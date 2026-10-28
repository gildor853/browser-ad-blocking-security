# Browser ad blocking as a security baseline

Provided as is, without warranty — see [DISCLAIMER.md](./DISCLAIMER.md).

An evidence-based analysis of why blocking ads and third-party tracking in web
browsers should be part of the default security baseline for individuals and
organisations, and of what else belongs next to it. Every factual claim is
linked to a public source listed in [SOURCES.md](./SOURCES.md). Recommendations
and judgements are labelled as **opinion** and kept apart from the facts.

Research cut-off: **28 October 2026**.

## Contents

| Document | What it covers |
|----------|----------------|
| [01 — Threat landscape](./docs/01-threat-landscape.md) | How online advertising becomes an attack and surveillance channel: malvertising, zero-click delivery, search-ad impersonation, scam ads, tracking and real-time bidding, third-party scripts |
| [02 — Evidence](./docs/02-evidence.md) | The facts, each with a citation: government guidance, incident reports, measurements, and the data that cuts the other way |
| [03 — Beyond ad blocking](./docs/03-beyond-ad-blocking.md) | The other layers: updates, protective DNS, browser choice and settings, extension hygiene, phishing-resistant sign-in, isolation, mobile |
| [04 — Solutions and configurations](./docs/04-solutions-and-configs.md) | Concrete tools per browser and platform, verified extension IDs, enterprise policy examples (Chrome, Edge, Firefox) and protective DNS endpoints |
| [05 — Counterarguments](./docs/05-counterarguments.md) | Publisher revenue, breakage, trust in the blocker, Manifest V3, legal status, and where the case for blocking is weaker |
| [06 — Methodology and QA](./docs/06-methodology-and-qa.md) | How the sources were selected and verified, what was dropped, known limits |
| [SOURCES.md](./SOURCES.md) | All sources with dates and access date |

A short Czech summary is in [README.cs.md](./README.cs.md).

## Executive summary

**Facts (see [02 — Evidence](./docs/02-evidence.md)):**

- Online ads let third parties put content and code on pages the user chose to
  trust. US agencies have treated this as a security problem for years. The NSA
  (2018) and CISA (2020/2021) published guidance recommending that
  organisations block ads. The FBI (2022) advised the public to use an ad
  blocker when searching the web. The US Intelligence Community told a US
  senator in 2021 that it had deployed network-based ad blocking. [S1–S4]
- Ad-delivered attacks without any click are documented. Historic exploit-kit
  campaigns needed no user interaction [S7]. More recently, leaked material from
  the spyware vendor Intellexa describes an advertising-based "remote 0-click"
  vector called Aladdin [S8], and Google observed malicious ads used to
  fingerprint and redirect targets to Intellexa's exploit servers [S9].
- Recent mass-scale cases rely on deception rather than exploits. Examples
  are sponsored search results that impersonate software
  brands [S1, S14–S16], scam ads (Google reports stopping 5.1 billion bad ads
  and suspending 39.2 million advertiser accounts in 2024 [S13]) and redirect
  chains. One such chain affected nearly one million devices in a single
  campaign [S6].
- Browser exploitation is getting harder. Google counted under 10% of 2025
  zero-day exploitation in browsers [S12]. This is a reason to keep browsers
  updated, and it makes the "drive-by" argument weaker for typical users than
  it was in 2016.
- Ads also drive large-scale tracking. A 2016 measurement found over 81,000
  third parties on at least two of the top one million sites [S20]. A 2022
  ICCL report estimated that real-time bidding broadcasts data about people in
  the US and Europe 178 trillion times a year [S22].
- Ad blockers have real costs and limits. Extensions are highly privileged
  software [S2, S3]. Current Chrome versions no longer run uBlock Origin (Manifest V2) [S24,
  S28]. Blocking breaks some sites [S3, S31]. Measured page-load gains are
  modest [S19].

**Opinion (the author's assessment):**

- For general-purpose browsing, a reputable content blocker belongs in the
  default security configuration, much like automatic updates and a password
  manager. Organisations should deploy it centrally, together with protective
  DNS, because users cannot judge which ad is malicious.
- On its own, ad blocking is not a security strategy. Its value comes from
  removing one high-volume, attacker-controllable channel. The other layers in
  [03](./docs/03-beyond-ad-blocking.md) still matter more for a well-targeted
  attack.

## Key recommendations (opinion)

1. **Keep the browser and the operating system updated automatically.** Ad
   blocking reduces exposure; patching removes the vulnerabilities themselves.
   [S3]
2. **Install one reputable, open-source content blocker from the official
   store.** Firefox (desktop and Android): uBlock Origin. Chrome, Edge and
   Safari: uBlock Origin Lite. Brave: built-in Shields. Do not stack several
   blockers. [S28, S30, S36, S37]
3. **Add protective DNS** at the device or network level (for example Quad9,
   AdGuard DNS, NextDNS or a self-hosted Pi-hole). It also covers apps and
   devices that cannot run a browser extension. [S3, S43–S46]
4. **Never install software from a sponsored search result.** Type the
   vendor's address or use a bookmark or the official app store. [S1, S14]
5. **Use a password manager and phishing-resistant sign-in** (passkeys or FIDO2
   security keys) for important accounts. [S5]
6. **Keep extensions to a minimum** and review them. Every extension, blockers
   included, is a supply-chain risk. [S3, S18]
7. **Organisations:** enforce the blocker and DNS settings through policy (see
   [04](./docs/04-solutions-and-configs.md)), maintain an allowlist for
   business-critical sites, and consider browser isolation for high-risk roles.
   [S2, S3]

## Quick-start hardening checklist

- [ ] Browser and OS set to update automatically
- [ ] One content blocker installed from the official store (see the table in
      [04](./docs/04-solutions-and-configs.md#1-which-blocker-on-which-browser))
- [ ] Default filter lists enabled, including the malware/phishing list
- [ ] No second ad blocker or "VPN/ad-block" bundle installed alongside it
- [ ] Protective DNS configured (browser secure DNS, OS, or router)
- [ ] Browser's built-in safe-browsing protection left on
- [ ] Downloads only from vendors' own sites or official stores, never from ads
- [ ] Password manager in use; passkeys or a security key on email, banking and
      work accounts
- [ ] Extension list reviewed; unused extensions removed
- [ ] On phones: blocker-capable browser (e.g. Firefox for Android with
      uBlock Origin, or Safari with a content blocker) and/or Private DNS

## How to read this repository

- Statements followed by a citation such as `[S6]` are facts that come from
  the source. Numbers are quoted as the source states them, with the year.
- Paragraphs marked **Opinion** are the author's judgement.
- Product names are examples, not endorsements. Availability and features
  change; check the vendor's current documentation before deploying.

## Licence

The text, configuration examples and scripts in this repository are released
under the [MIT License](./LICENSE), Copyright (c) 2026 Gildor. Quotations
from cited sources remain the property of their owners and are reproduced as
short citations.

## Disclaimer

This repository is provided as is, without warranty of any kind. It is not
security, legal or other professional advice, and following it does not
guarantee protection against any threat. Configuration examples can break
websites or conflict with your environment; test before deploying. See
[DISCLAIMER.md](./DISCLAIMER.md) for the full terms and limitation of liability.
