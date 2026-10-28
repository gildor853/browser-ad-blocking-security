# Sources

Every source below was opened and read on **28 October 2026** (access date for
all entries). The documents cite them as `[S1]`, `[S2]`, and so on. "Used for"
names the claims each source supports; a claim that could not be traced to a
source here was removed (see [Methodology and QA](./docs/06-methodology-and-qa.md)).

Some official sites refuse automated clients (HTTP 401/403). Where that
happened, the content was checked through an archived copy, which is listed
next to the original.

## Government and public-sector guidance

| ID | Source | Date | Used for |
|----|--------|------|----------|
| S1 | FBI Internet Crime Complaint Center (IC3), *Cyber Criminals Impersonating Brands Using Search Engine Advertisement Services to Defraud Users*, PSA I-122122-PSA — <https://www.ic3.gov/PSA/2022/PSA221221> | 21 Dec 2022 | Search-ad impersonation; FBI advice to use an ad blocker when searching |
| S2 | CISA, *Capacity Enhancement Guide: Securing Web Browsers and Defending Against Malvertising for Federal Agencies* — <https://www.cisa.gov/sites/default/files/publications/Capacity_Enhancement_Guide-Securing_Web_Browsers_and_Defending_Against_Malvertising_for_Federal_Agencies.pdf> | PDF dated late 2020; described in S4 as published January 2021 | CISA recommendations: standardised browsers, ad blocking, isolation, protective DNS; caveats on blocker privileges and paid allowlisting |
| S3 | NSA, *Cybersecurity Information Sheet: Blocking Unnecessary Advertising Web Content*, U/OO/176814-18 — <https://media.defense.gov/2019/Jul/16/2002158057/-1/-1/0/CSI-BLOCKING-UNNECESSARY-ADVERTISING-WEB-CONTENT.PDF> (archived copy used for reading: <https://web.archive.org/web/20250110101236id_/https://media.defense.gov/2019/Jul/16/2002158057/-1/-1/0/CSI-BLOCKING-UNNECESSARY-ADVERTISING-WEB-CONTENT.PDF>) | 5 Jul 2018 | Exploit kits delivered through ads; network-level blocking; risks of browser extensions |
| S4 | Sen. Ron Wyden, letter to the Office of Management and Budget on ad blocking in federal agencies — <https://s3.documentcloud.org/documents/21068028/wyden-letter-to-omb-on-ad-blocking.pdf> | 22 Sep 2021 | US Intelligence Community statement on network-based ad blocking; "often without requiring users to click" |
| S5 | CISA, *Implementing Phishing-Resistant MFA* (fact sheet) — <https://www.cisa.gov/sites/default/files/publications/fact-sheet-implementing-phishing-resistant-mfa-508c.pdf> | Oct 2022 | Phishing-resistant MFA (FIDO/WebAuthn) as the "gold standard" |

## Threat research and industry reports

| ID | Source | Date | Used for |
|----|--------|------|----------|
| S6 | Microsoft Threat Intelligence, *Malvertising campaign leads to info stealers hosted on GitHub* — <https://www.microsoft.com/en-us/security/blog/2025/03/06/malvertising-campaign-leads-to-info-stealers-hosted-on-github/> | 6 Mar 2025 | Malvertising redirect chain from streaming sites; nearly one million devices affected |
| S7 | ESET WeLiveSecurity, *Readers of popular websites targeted by stealthy Stegano exploit kit hiding in pixels of malicious ads* — <https://www.welivesecurity.com/2016/12/06/readers-popular-websites-targeted-stealthy-stegano-exploit-kit-hiding-pixels-malicious-ads/> | 6 Dec 2016 | Historical drive-by malvertising without user interaction |
| S8 | Amnesty International Security Lab, *To Catch a Predator: Leak exposes the internal operations of Intellexa's mercenary spyware* — <https://securitylab.amnesty.org/latest/2025/12/intellexa-leaks-predator-spyware-operations-exposed/> | 4 Dec 2025 | "Aladdin" ad-based zero-click infection vector |
| S9 | Google Threat Intelligence Group, *Intellexa's Prolific Zero-Day Exploits Continue* — <https://cloud.google.com/blog/topics/threat-intelligence/intellexa-zero-day-exploits-continue/> | 3 Dec 2025 | Malicious ads used to fingerprint and redirect targets to exploit servers |
| S10 | Amnesty International Security Lab, *Predator Files: Technical deep-dive into Intellexa Alliance's surveillance products* — <https://securitylab.amnesty.org/latest/2023/10/technical-deep-dive-into-intellexa-alliance-surveillance-products/> | 6 Oct 2023 | Spyware vendors subverting the ad ecosystem for "zero-clicks" |
| S11 | Google Threat Intelligence Group, *Hello 0-Days, My Old Friend: A 2024 Zero-Day Exploitation Analysis* — <https://cloud.google.com/blog/topics/threat-intelligence/2024-zero-day-trends> | 29 Apr 2025 | Zero-day counts for 2022–2024; fewer browser zero-days |
| S12 | Google Threat Intelligence Group, *Look What You Made Us Patch: 2025 Zero-Days in Review* — <https://cloud.google.com/blog/topics/threat-intelligence/2025-zero-day-review> | 5 Mar 2026 | 90 zero-days in 2025; browsers under 10% of zero-day exploitation |
| S13 | Google, *2024 Ads Safety Report* — <https://services.google.com/fh/files/misc/ads_safety_report_2024.pdf> (announcement: <https://blog.google/products/ads-commerce/google-ads-safety-report-2024/>) | 2025 | Scale of bad ads and suspended advertiser accounts |
| S14 | Malwarebytes, *SecTopRAT bundled in Chrome installer distributed via Google Ads* — <https://www.malwarebytes.com/blog/threat-intel/2025/02/sectoprat-bundled-in-chrome-installer-distributed-via-google-ads> | 20 Feb 2025 | Fake software download promoted by a search ad |
| S15 | Malwarebytes, *DeepSeek users targeted with fake sponsored Google ads that deliver malware* — <https://www.malwarebytes.com/blog/news/2025/03/deepseek-users-targeted-with-fake-sponsored-google-ads-that-deliver-malware> | 26 Mar 2025 | Sponsored-result impersonation; ad-blocker suggestion |
| S16 | Malwarebytes, *ClickFix vs. traditional download in new DarkGate campaign* — <https://www.malwarebytes.com/blog/threat-intel/2025/01/clickfix-vs-traditional-download-in-new-darkgate-campaign> | 31 Jan 2025 | Search ad for Notion leading to "ClickFix" social engineering |
| S17 | Sansec, *Polyfill supply chain attack hits 100K+ sites* — <https://sansec.io/research/polyfill-supply-chain-attack> | 25 Jun 2024 | Third-party script supply-chain compromise |
| S18 | Sekoia, *Supply Chain Attack Against Chrome Browser Extensions* — <https://www.sekoia.com/blog/targeted-supply-chain-attack-against-chrome-browser-extensions> | 22 Jan 2025 | Compromise of legitimate extensions via developer phishing |

## Academic and civil-society research

| ID | Source | Date | Used for |
|----|--------|------|----------|
| S19 | Garimella, Kostakis, Mathioudakis, *Ad-blocking: A Study on Performance, Privacy and Counter-measures* (ACM WebSci 2017) — <https://arxiv.org/abs/1705.03193> | 2017 | Bandwidth savings; limited load-time gains |
| S20 | Englehardt, Narayanan, *Online Tracking: A 1-million-site Measurement and Analysis* (ACM CCS 2016) — <https://www.cs.princeton.edu/~arvindn/publications/OpenWPM_1_million_site_tracking_measurement.pdf> | 2016 | Scale of third-party tracking; limits of privacy tools against fingerprinting |
| S21 | Eskandari, Leoutsarakos, Mursch, Clark, *A first look at browser-based Cryptojacking* (IEEE S&B 2018) — <https://arxiv.org/abs/1803.02887> | 2018 | In-browser cryptomining without consent |
| S22 | Irish Council for Civil Liberties, *ICCL report on the scale of Real-Time Bidding data broadcasts in the U.S. and Europe* — <https://www.iccl.ie/digital-data/iccl-report-on-the-scale-of-real-time-bidding-data-broadcasts-in-the-u-s-and-europe/> | 16 May 2022 | Volume of real-time-bidding data broadcasts |
| S23 | Electronic Frontier Foundation, *Cover Your Tracks — About* — <https://coveryourtracks.eff.org/about> | n.d. | Tool for testing tracker blocking and fingerprint uniqueness |

## Browser platforms and extensions

| ID | Source | Date | Used for |
|----|--------|------|----------|
| S24 | Chrome for Developers, *Manifest V2 support timeline* — <https://developer.chrome.com/docs/extensions/develop/migrate/mv2-deprecation-timeline> | updated 2026 | Chrome MV2 phase-out dates |
| S25 | Mozilla, *Mozilla's approach to Manifest V3: What's different and why it matters for extension users* — <https://blog.mozilla.org/en/firefox/firefox-manifest-v3-adblockers/> | 25 Feb 2025 | Firefox keeps MV2 and blocking webRequest |
| S26 | Microsoft Edge Blog, *Moving the Microsoft Edge extensions ecosystem forward with Manifest Version 3* — <https://blogs.windows.com/msedgedev/2026/08/07/moving-the-microsoft-edge-extensions-ecosystem-forward-with-manifest-version-3/> | 7 Aug 2026 | Edge MV2 transition plan |
| S27 | Microsoft Learn, *Timeline for migrating to Manifest V3* — <https://learn.microsoft.com/en-us/microsoft-edge/extensions/developer-guide/manifest-v3> | 2026 | Edge MV2 timeline |
| S28 | uBlock Origin README — <https://github.com/gorhill/uBlock> | 2026 | uBO availability; "do not use with another content blocker"; Acceptable Ads default in ABP |
| S29 | uBlock Origin wiki, *uBlock Origin works best on Firefox* — <https://github.com/gorhill/uBlock/wiki/uBlock-Origin-works-best-on-Firefox> | 2026 | Firefox-only capabilities (CNAME uncloaking, HTML filtering, launch-time blocking) |
| S30 | uBlock Origin Lite README — <https://github.com/uBlockOrigin/uBOL-home> | 2026 | uBOL design and default rulesets |
| S31 | uBlock Origin Lite wiki, *Frequently asked questions* — <https://github.com/uBlockOrigin/uBOL-home/wiki/Frequently-asked-questions-%28FAQ%29> | 2026 | Differences between uBO and uBOL |
| S32 | uBlock Origin Lite wiki, *Managed settings* — <https://github.com/uBlockOrigin/uBOL-home/wiki/Managed-settings> | 2026 | Administrator configuration of uBOL |
| S33 | Chrome Web Store, *uBlock Origin Lite* — <https://chromewebstore.google.com/detail/ublock-origin-lite/ddkjiahejlhfcafbddmgiahcphecmpfh> | 2026 | Extension ID |
| S34 | Microsoft Edge Add-ons, *uBlock Origin Lite* — <https://microsoftedge.microsoft.com/addons/detail/ublock-origin-lite/cimighlppcgcoapaliogpjjdehbnofhn> and *uBlock Origin* — <https://microsoftedge.microsoft.com/addons/detail/ublock-origin/odfafepnkmbhccpbejgmiehpchacaeak> | 2026 | Extension IDs |
| S35 | Firefox Add-ons, *uBlock Origin* — <https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/> and *uBlock Origin Lite* — <https://addons.mozilla.org/en-US/firefox/addon/ublock-origin-lite/> | 2026 | Add-on IDs |
| S36 | App Store, *uBlock Origin Lite* — <https://apps.apple.com/app/ublock-origin-lite/id6745342698> | 2026 | Availability on iPhone, iPad and Mac |
| S37 | Brave, *Shields* — <https://brave.com/shields/> | 2026 | Built-in blocking in Brave |
| S38 | Chromium, *Site Isolation* — <https://www.chromium.org/Home/chromium-security/site-isolation/> | n.d. | Site Isolation as a defence layer |

## Enterprise policies

| ID | Source | Date | Used for |
|----|--------|------|----------|
| S39 | Google, *Chrome Enterprise policy list* — <https://chromeenterprise.google/policies/>; machine-readable policy templates — <https://dl.google.com/dl/edgedl/chrome/policy/policy_templates.zip>; Chromium policy definition — <https://raw.githubusercontent.com/chromium/chromium/main/components/policy/resources/templates/policy_definitions/Extensions/ExtensionInstallForcelist.yaml> | 2026 | `ExtensionInstallForcelist`, `ExtensionSettings`, `DnsOverHttpsMode`, `DnsOverHttpsTemplates`, `SafeBrowsingProtectionLevel` |
| S40 | Chromium, *Linux Quick Start* (policy file locations) — <https://www.chromium.org/administrators/linux-quick-start/> | n.d. | `/etc/opt/chrome/policies/managed` |
| S41 | Microsoft Learn, Microsoft Edge policy reference: *ExtensionInstallForcelist* — <https://learn.microsoft.com/en-us/deployedge/microsoft-edge-policies/extensioninstallforcelist>, *ExtensionSettings* — <https://learn.microsoft.com/en-us/deployedge/microsoft-edge-policies/extensionsettings>, *DnsOverHttpsMode* — <https://learn.microsoft.com/en-us/deployedge/microsoft-edge-policies/dnsoverhttpsmode>, *DnsOverHttpsTemplates* — <https://learn.microsoft.com/en-us/deployedge/microsoft-edge-policies/dnsoverhttpstemplates> | 2026 | Edge policies, registry path and Edge Add-ons update URL |
| S42 | Mozilla, *Policy templates for Firefox* — <https://mozilla.github.io/policy-templates/> | 2026 | `ExtensionSettings`, `DNSOverHTTPS`, `EnableTrackingProtection` |

## Protective DNS

| ID | Source | Date | Used for |
|----|--------|------|----------|
| S43 | Quad9, *Service addresses and features* — <https://www.quad9.net/service/service-addresses-and-features> | 2026 | Quad9 addresses and DoH/DoT endpoints |
| S44 | AdGuard DNS, *Known DNS providers / AdGuard DNS* — <https://adguard-dns.io/kb/general/dns-providers/> | 2026 | AdGuard DNS addresses and endpoints |
| S45 | NextDNS — <https://nextdns.io/> | 2026 | Feature list |
| S46 | Pi-hole — <https://pi-hole.net/> and documentation <https://docs.pi-hole.net/> | 2026 | Self-hosted network-wide blocking |

## Economics and law

| ID | Source | Date | Used for |
|----|--------|------|----------|
| S47 | Acceptable Ads — <https://acceptableads.com/> | 2026 | Acceptable Ads programme |
| S48 | Bundesgerichtshof, press release No. 078/2018 (I ZR 154/16) — <https://www.bundesgerichtshof.de/SharedDocs/Pressemitteilungen/DE/2018/2018078.html> | 19 Apr 2018 | Ad blockers lawful under German unfair-competition law |
| S49 | Bundesgerichtshof, press release No. 148/2025 (I ZR 131/23, *Werbeblocker IV*) — <https://www.bundesgerichtshof.de/SharedDocs/Pressemitteilungen/DE/2025/2025148.html> | 31 Jul 2025 | Copyright question remanded to the Hamburg court |
