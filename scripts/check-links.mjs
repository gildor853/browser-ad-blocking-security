#!/usr/bin/env node
/**
 * Link check for the Markdown documents (Node >= 20, built-in fetch, no deps).
 *
 * - Relative links: the target file must exist; "#anchor" fragments pointing
 *   at Markdown files must match a heading in the target file.
 * - External http(s) links: requested with HEAD, falling back to GET.
 *   Fails on 404/410 and on DNS/connection errors that persist after retries.
 *   401/403/429/5xx and timeouts are reported as warnings: several official
 *   sites refuse automated clients although the page exists.
 *
 * Run: node scripts/check-links.mjs [--offline]
 */
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { dirname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const offline = process.argv.includes("--offline");
const TIMEOUT_MS = 25_000;
const RETRIES = 2;
const CONCURRENCY = 6;
const UA =
  "Mozilla/5.0 (X11; Linux x86_64; rv:140.0) Gecko/20100101 Firefox/140.0";

function mdFiles(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    if (name === "node_modules" || name.startsWith(".")) continue;
    const p = join(dir, name);
    if (statSync(p).isDirectory()) out.push(...mdFiles(p));
    else if (name.endsWith(".md")) out.push(p);
  }
  return out;
}

function stripCode(text) {
  return text.replace(/```[\s\S]*?```/g, "").replace(/`[^`\n]*`/g, "");
}

function slug(heading) {
  return heading
    .trim()
    .toLowerCase()
    .replace(/[`*_~]/g, "")
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/[^\p{L}\p{N}\s-]/gu, "")
    .replace(/\s/g, "-");
}

function anchors(file) {
  const text = readFileSync(file, "utf8").replace(/```[\s\S]*?```/g, "");
  const set = new Set();
  const counts = new Map();
  for (const m of text.matchAll(/^#{1,6}\s+(.+?)\s*#*\s*$/gm)) {
    const base = slug(m[1]);
    const n = counts.get(base) ?? 0;
    counts.set(base, n + 1);
    set.add(n === 0 ? base : `${base}-${n}`);
  }
  return set;
}

const errors = [];
const warnings = [];
const external = new Map(); // url -> [files]

for (const file of mdFiles(root)) {
  const rel = relative(root, file);
  const text = stripCode(readFileSync(file, "utf8"));
  const targets = [];
  for (const m of text.matchAll(/\[[^\]]*\]\(([^)\s]+)(?:\s+"[^"]*")?\)/g)) targets.push(m[1]);
  for (const m of text.matchAll(/<(https?:\/\/[^>\s]+)>/g)) targets.push(m[1]);
  for (const target of targets) {
    if (/^https?:\/\//i.test(target)) {
      const list = external.get(target) ?? [];
      list.push(rel);
      external.set(target, list);
      continue;
    }
    if (/^(mailto:|data:)/i.test(target)) continue;
    const [pathPart, frag] = target.split("#");
    const dest = pathPart ? resolve(dirname(file), decodeURI(pathPart)) : file;
    if (!existsSync(dest)) {
      errors.push(`${rel}: broken relative link -> ${target}`);
      continue;
    }
    if (frag && dest.endsWith(".md") && !anchors(dest).has(frag)) {
      errors.push(`${rel}: missing anchor -> ${target}`);
    }
  }
}

async function request(url, method) {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), TIMEOUT_MS);
  try {
    const res = await fetch(url, {
      method,
      redirect: "follow",
      signal: ctrl.signal,
      headers: { "user-agent": UA, accept: "*/*" },
    });
    if (method === "GET") await res.body?.cancel().catch(() => {});
    return { status: res.status };
  } catch (e) {
    return { error: e?.cause?.code ?? e?.name ?? String(e) };
  } finally {
    clearTimeout(timer);
  }
}

async function check(url) {
  let last;
  for (let attempt = 0; attempt <= RETRIES; attempt++) {
    if (attempt) await new Promise((r) => setTimeout(r, 1500 * attempt));
    let r = await request(url, "HEAD");
    if (r.error || r.status >= 400) r = await request(url, "GET");
    last = r;
    if (!r.error && r.status < 400) return { ok: true, status: r.status };
    if (r.status === 404 || r.status === 410) break; // definitive
  }
  return { ok: false, ...last };
}

if (!offline) {
  const urls = [...external.keys()];
  let i = 0;
  const workers = Array.from({ length: CONCURRENCY }, async () => {
    while (i < urls.length) {
      const url = urls[i++];
      const r = await check(url);
      const where = external.get(url)[0];
      if (r.ok) continue;
      if (r.status === 404 || r.status === 410) {
        errors.push(`${where}: ${r.status} ${url}`);
      } else if (r.error && /ENOTFOUND|EAI_AGAIN|ECONNREFUSED|CERT|ERR_TLS/i.test(r.error)) {
        errors.push(`${where}: ${r.error} ${url}`);
      } else {
        warnings.push(`${where}: ${r.status ?? r.error} ${url}`);
      }
    }
  });
  await Promise.all(workers);
  console.log(`check-links: ${urls.length} external URLs checked`);
}

for (const w of warnings) console.warn(`  warning: ${w}`);
if (errors.length) {
  console.error("check-links failed:\n" + errors.map((e) => `  - ${e}`).join("\n"));
  process.exit(1);
}
console.log(`check-links: OK${warnings.length ? ` (${warnings.length} warning(s))` : ""}`);
