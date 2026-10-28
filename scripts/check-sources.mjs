#!/usr/bin/env node
/**
 * Citation consistency: every [S#] cited in README*.md and docs/*.md must be
 * defined in SOURCES.md (a table row starting with "| S#"), and every defined
 * source must be cited at least once. Ranges like [S1–S4] or [S14-S16] count
 * for every ID in the range.
 *
 * Run: node scripts/check-sources.mjs
 */
import { readFileSync, readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const sources = readFileSync(join(root, "SOURCES.md"), "utf8");
const defined = new Set([...sources.matchAll(/^\|\s*S(\d+)\s*\|/gm)].map((m) => Number(m[1])));

const files = [
  ...readdirSync(root).filter((f) => /^README.*\.md$/.test(f)),
  ...readdirSync(join(root, "docs")).filter((f) => f.endsWith(".md")).map((f) => `docs/${f}`),
];

const cited = new Map();
const errors = [];
for (const f of files) {
  const text = readFileSync(join(root, f), "utf8");
  for (const group of text.matchAll(/\[(S\d+(?:\s*[–-]\s*S\d+)?(?:\s*,\s*S\d+(?:\s*[–-]\s*S\d+)?)*)\]/g)) {
    for (const part of group[1].split(",")) {
      const [a, b] = part.split(/[–-]/).map((s) => Number(s.trim().slice(1)));
      for (let n = a; n <= (b ?? a); n++) {
        if (!defined.has(n)) errors.push(`${f}: cites undefined source S${n}`);
        cited.set(n, (cited.get(n) ?? 0) + 1);
      }
    }
  }
}
for (const n of defined) if (!cited.has(n)) errors.push(`SOURCES.md: S${n} is never cited`);

const ids = [...defined].sort((x, y) => x - y);
ids.forEach((n, i) => {
  if (n !== i + 1) errors.push(`SOURCES.md: IDs are not consecutive near S${n}`);
});

if (errors.length) {
  console.error("check-sources failed:\n" + [...new Set(errors)].map((e) => `  - ${e}`).join("\n"));
  process.exit(1);
}
console.log(`check-sources: OK (${defined.size} sources, ${[...cited.values()].reduce((a, b) => a + b, 0)} citations)`);
