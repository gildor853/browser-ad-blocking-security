# 02 — Evidence

[← 01 — Threat landscape](./01-threat-landscape.md) · Next: [03 — Beyond ad blocking](./03-beyond-ad-blocking.md)

This chapter lists the facts the analysis relies on. Each item gives the
source ID from [SOURCES.md](../SOURCES.md), the date of the source, and a short
quotation or a precise paraphrase. Quotations are verbatim. Paraphrases keep
the source's numbers and qualifiers. There are no derived statistics here
beyond what the sources state.

Evidence that weakens or qualifies the case is in its own section
([E. Evidence that cuts the other way](#e-evidence-that-cuts-the-other-way)).

## A. Official guidance and government practice

| # | Claim | Source |
|---|-------|--------|
| A1 | The FBI warned that criminals buy search-engine ads impersonating brands, leading to malware or credential theft. Its advice to the public includes: "Use an ad blocking extension when performing internet searches." | [S1] FBI IC3, 21 Dec 2022 |
| A2 | The NSA states that "Exploit kits in malicious ads can take advantage of unpatched vulnerabilities to silently install malware". It recommends prompt patching **and** blocking ads, and says that "network-based solutions provide a similar level of protection to host solutions without introducing additional risk." | [S3] NSA CSI, 5 Jul 2018 |
| A3 | CISA recommends that federal agencies standardise and secure browsers, deploy ad-blocking, isolate browsers from the operating system and use protective DNS. It states that malvertising "bypasses built-in browser protections against pop-ups and forced redirects and inserts malicious ads into legitimate ad networks." It lists reduced malicious ads and redirects, faster page loading and less third-party data collection among the benefits of ad blocking. | [S2] CISA CEG (PDF dated late 2020) |
| A4 | The US Intelligence Community CIO told Sen. Wyden's office: "The IC has implemented network-based ad-blocking technologies and uses information from several layers, including Domain Name System information, to block unwanted and malicious advertising content." The same letter says online ads can deliver malware "often without requiring users to click anything" and that CISA published its guidance in January 2021. | [S4] Wyden letter, 22 Sep 2021 |
| A5 | CISA calls phishing-resistant MFA "the gold standard" and states that "The only widely available phishing-resistant authentication is FIDO/WebAuthn authentication." | [S5] CISA fact sheet, Oct 2022 |

## B. Attacks delivered through ads

| # | Claim | Source |
|---|-------|--------|
| B1 | In early December 2024, Microsoft detected "a large-scale malvertising campaign that impacted nearly one million devices globally". It originated from illegal streaming websites embedded with malvertising redirectors and led to information stealers hosted on GitHub. | [S6] Microsoft, 6 Mar 2025 |
| B2 | Stegano (2016): malicious ads on popular news websites targeted millions of readers. "Without requiring any user interaction, the initial script reports information about the victim's machine to the attacker's remote server", and selected victims were redirected to exploits for Flash Player and Internet Explorer. | [S7] ESET, 6 Dec 2016 |
| B3 | Leaked Intellexa material presents "Aladdin" as a "remote 0-click" vector: "Internal company materials explain that simply viewing the advertisement is enough to trigger the infection on the target's device, without any need to click on the advertisement itself." Possible target selectors include an advertising ID, email address, location or IP address. Amnesty believes Aladdin "was supported in active Predator deployments in 2024". | [S8] Amnesty, 4 Dec 2025 |
| B4 | Google observed "the use of malicious advertisements on third-party platforms to fingerprint users and redirect targeted users to Intellexa's exploit delivery servers" by a few Intellexa customers. The primary delivery mechanism "remains one-time links sent to targets directly via end-to-end encrypted messaging applications." | [S9] GTIG, 3 Dec 2025 |
| B5 | In 2023, Amnesty reported that cyber-surveillance companies are "racing to subvert and exploit the already invasive digital advertising ecosystem" for "ad-network powered 'zero-clicks'". | [S10] Amnesty, Oct 2023 |
| B6 | A Google search ad for Chrome led to a Google Sites page and a fake installer bundled with the SecTopRAT remote access trojan. | [S14] Malwarebytes, 20 Feb 2025 |
| B7 | Fake sponsored Google ads impersonating DeepSeek delivered malware. The post suggests considering an ad-blocker. | [S15] Malwarebytes, 26 Mar 2025 |
| B8 | A Google ad for Notion led some visitors to a fake "Verify you are human" ClickFix page and others to a traditional download, delivering DarkGate. | [S16] Malwarebytes, 31 Jan 2025 |

## C. Scale of ad abuse and tracking

| # | Claim | Source |
|---|-------|--------|
| C1 | In 2024, Google stopped 5.1 billion bad ads, suspended 39.2 million advertiser accounts and permanently suspended over 700,000 accounts for public-figure impersonation scams. It reports "a 90% drop in reports of this kind of scam ad". | [S13] Google, 2024 Ads Safety Report |
| C2 | A January 2016 crawl of the top one million sites found over 81,000 third parties present on at least two first-party sites. Only 123 were present on more than 1% of sites. Google, Facebook, Twitter, Amazon, AdNexus and Oracle were present on more than 10% of sites. | [S20] Englehardt & Narayanan, CCS 2016 |
| C3 | The same study found that "existing privacy tools are not effective at detecting these newer and more obscure fingerprinting techniques". | [S20] |
| C4 | ICCL: RTB "tracks and shares what people view online and their real-world location 178 Trillion times every year in U.S. & Europe". That is 747 times a day for a person in the US and 376 times a day in Europe. | [S22] ICCL, 16 May 2022 |
| C5 | In-browser cryptomining code "executes client-side in her browser, mines a cryptocurrency, typically without her consent or knowledge". | [S21] Eskandari et al., 2018 |
| C6 | The `cdn.polyfill.io` domain, embedded by 100K+ sites, was bought in February 2024 and then served malware. One decoded sample redirected mobile users to a sports betting site. | [S17] Sansec, 25 Jun 2024 |

## D. Effectiveness and performance

| # | Claim | Source |
|---|-------|--------|
| D1 | On news websites, "All ad-blockers except Ghostery give around 25–34% savings in the amount of data transferred (on average)". The authors conclude that "ad-blockers decrease the data consumption significantly, though the benefits in terms of load times are limited." | [S19] Garimella et al., WebSci 2017 |
| D2 | The Englehardt study found Ghostery effective against the third-party tracking it measured, but found fingerprinting techniques largely undetected by the privacy tools of the time (see C3). | [S20] |
| D3 | uBlock Origin's default lists include a malicious-URL blocklist. The project advises: "Do NOT use uBO with any other content blocker." | [S28] |
| D4 | On Firefox, uBO can uncloak third-party trackers hidden behind CNAME records, filter HTML before parsing and block requests from tabs restored at browser launch. Chromium-based browsers do not provide equivalent capabilities. | [S29] |

## E. Evidence that cuts the other way

These facts do not overturn the recommendation, but they limit how strongly it
can be stated.

| # | Claim | Source |
|---|-------|--------|
| E1 | GTIG tracked 75 zero-days exploited in 2024 (98 in 2023, 63 in 2022), with browser zero-days down from 17 to 11. GTIG's 2025 review later gives the 2024 count as 78 and the 2023 count as 100. | [S11] GTIG, 29 Apr 2025; [S12] |
| E2 | "Browsers accounted for less than 10% of 2025 zero-day exploitation … This suggests that browser hardening measures are working." GTIG adds that attackers' operational security has improved, which may reduce the volume of *observed* exploitation. | [S12] GTIG, 5 Mar 2026 |
| E3 | The NSA warns that ad-blocking extensions have access to most browser data and that "Such software could cause a greater compromise to network security than a malvertising attack, even when installed from reputable browser app stores". It cites a 2018 report of over 20 million users installing malicious ad blockers. | [S3] |
| E4 | CISA notes that some ad-blocking products "accept payment from advertisers to ensure their ads are allowlisted from blocking". | [S2] |
| E5 | uBO notes that Adblock Plus installs with "Acceptable Ads" enabled by default. | [S28] |
| E6 | In December 2024, around a dozen legitimate Chrome extensions were compromised after a phishing campaign tricked their developers into authorising a malicious OAuth app, "potentially affecting hundreds of thousands of end users". | [S18] Sekoia, 22 Jan 2025 |
| E7 | Blocking can break websites, some sites refuse content to users with blockers, and filter-list contributors could add rules that block legitimate domains. The NSA recommends allowlisting critical domains. | [S3] |
| E8 | uBO Lite (Manifest V3) "will be less effective at dealing with websites using anti-content blocker or minimizing website breakage because many filters can't be converted into DNR rules." | [S31] |
| E9 | Germany's Federal Court of Justice held in 2018 that offering Adblock Plus, including its paid allowlisting model, is not unfair competition. In 2025 it sent a separate copyright question back to the Hamburg court. | [S48], [S49] |

## What the evidence supports, and what it does not

**Supported:**

- Advertising is a documented delivery channel for malware, scams and targeted
  spyware, at both mass and targeted scale (A1–A4, B1–B8, C1).
- Leading US security agencies recommend blocking ads, and one part of the US
  government reports doing so at network level (A2–A4).
- Ad tech collects data at very large scale (C2, C4).

**Not supported, so not claimed here:**

- That ad blockers stop *most* malware or *most* phishing. No source measured
  that.
- That a typical user today faces a high risk of zero-click exploitation
  through ads. The evidence points to targeted use (B3, B4) and fewer browser
  zero-days (E1, E2).
- Specific percentages of malicious ads among all ads. The sources found give
  enforcement counts (C1), not prevalence rates.
