# 01 — Threat landscape

[← README](../README.md) · Next: [02 — Evidence](./02-evidence.md)

This chapter describes *how* advertising and related third-party content
become a risk. The facts behind each point, with citations, are collected in
[02 — Evidence](./02-evidence.md). Source IDs (`[S1]` …) refer to
[SOURCES.md](../SOURCES.md).

## Why ads are a security problem at all

A web page with ads is assembled from many parties. The publisher sells a
slot. An ad exchange or network picks an advertiser, often in real time and
through several intermediaries. The browser then loads images, scripts and
frames from domains that neither the user nor, often, the publisher chose
directly.

That gives an attacker three things that are hard to get otherwise:

1. **Reach.** An ad bought on a large network can appear on reputable sites.
   The ESET Stegano report describes malicious ads on "popular news websites"
   reaching millions of readers [S7].
2. **Targeting.** The same targeting tools that marketers use (location,
   device, interests, IP address, advertising identifiers) let an attacker
   show the payload only to chosen victims and hide it from researchers [S8,
   S9].
3. **Credibility.** The content appears inside a trusted page, or as a
   "Sponsored" search result above the real vendor's link [S1].

CISA states that malvertising "bypasses built-in browser protections against
pop-ups and forced redirects and inserts malicious ads into legitimate ad
networks" [S2].

## Attack patterns

### 1. Drive-by and zero-click malvertising

The ad itself (or a script it loads) probes the browser and exploits a
vulnerability, and no click is needed.

- **Historic, mass-scale.** In 2016, the Stegano campaign hid code in banner
  pixels and, "without requiring any user interaction", sent vulnerable
  visitors to exploits for Flash Player and Internet Explorer [S7]. The NSA
  wrote in 2018 that exploit kits in malicious ads "can take advantage of
  unpatched vulnerabilities to silently install malware" [S3].
- **Current, targeted.** Leaked Intellexa (Predator spyware) material
  describes "Aladdin", a vector that shows a malicious ad on the target's
  phone. According to the company's internal materials, "simply viewing the
  advertisement is enough to trigger the infection". Amnesty International
  believes it was supported in active deployments in 2024 [S8]. Google's
  Threat Intelligence Group observed some Intellexa customers using malicious
  ads on third-party platforms to fingerprint users and redirect targets to
  exploit servers [S9]. Amnesty had already reported in 2023 that spyware
  vendors were subverting the ad ecosystem for "zero-clicks" [S10].
- **Trend.** Browser exploitation is becoming rarer and more expensive. In
  Google's count, browsers accounted for under 10% of zero-day exploitation in
  2025, down from the "browser-heavy years of 2021-2022" [S12].

**Assessment (opinion):** for most people, zero-click ad exploits are now a
low-probability but high-impact risk. They are concentrated on journalists,
activists, officials and executives. For those groups, blocking ad delivery
(including in-app ads via DNS) is a meaningful layer. For everyone, prompt
updates matter more.

### 2. Malvertising redirect chains

The ad, often on low-quality or illegal streaming sites, sends the visitor
through a chain of redirectors to a payload or a scam. Microsoft described
such a chain, starting on illegal streaming sites and ending in information
stealers hosted on GitHub, that "impacted nearly one million devices
globally" from December 2024 [S6].

### 3. Search-ad impersonation and fake downloads

Criminals buy sponsored search results for popular software or services. The
ad looks like the vendor's, and the landing page delivers malware or collects
credentials. The FBI warned about this in 2022 [S1]. Malwarebytes documented
cases in 2025 involving a fake Chrome installer [S14], fake DeepSeek ads [S15]
and a Notion ad leading to a "ClickFix" lure that tricks the user into running
a command themselves [S16].

This needs a click, but the click is well-intentioned: the user is trying to
reach the real vendor.

### 4. Scam and fraud ads

Investment scams, fake celebrity endorsements, fake shops and fake support
numbers. The scale is visible from the platform side: Google reports stopping
5.1 billion bad ads and suspending 39.2 million advertiser accounts in 2024,
including over 700,000 accounts suspended for public-figure impersonation
scams [S13]. Those are enforcement numbers. They do not say how many bad ads
got through, but they show how many attempts are made.

### 5. Tracking, profiling and real-time bidding

Ad tech also collects data at very large scale.

- A January 2016 crawl of the top one million sites found over 81,000 third
  parties present on at least two sites. Google, Facebook, Twitter, Amazon,
  AdNexus and Oracle were each present on more than 10% of sites [S20].
- The same study found that the privacy tools of the time did not detect
  newer fingerprinting techniques well [S20], so blocking lists alone are not
  a full defence against tracking.
- ICCL estimated in 2022 that real-time bidding exposes data about people in
  the US and Europe 178 trillion times a year: 747 times a day for a US person
  and 376 times a day in Europe [S22].

The security link is direct. The identifiers that make targeting possible
(advertising ID, IP address, location) are what Aladdin-style attacks use to
pick victims [S8].

### 6. Third-party scripts and supply chain

Sites embed scripts from CDNs, analytics and ad vendors. If one of those is
compromised, every embedding site serves the attacker's code. The
`cdn.polyfill.io` domain, embedded by more than 100,000 sites, came under new
ownership in February 2024 and then served injected malware. One sample
redirected mobile users to a sports betting site [S17]. Content blockers do
not stop every such case (the polyfill library was not an ad). Network and
DNS blocklists are among the tools that can cut such domains off quickly.

### 7. Cryptojacking

In-browser mining scripts, typically run "without her consent or knowledge",
were documented at scale in 2018 [S21]. Firefox still offers a dedicated
cryptomining block in its tracking protection policy [S42], and NextDNS lists
cryptojacking protection among its features [S45].

### 8. The blocker as a risk

The defence is itself privileged software. The NSA warned that a malicious
ad-blocking extension "could cause a greater compromise to network security
than a malvertising attack, even when installed from reputable browser app
stores" [S3]. In December 2024, about a dozen legitimate Chrome extensions were
hijacked after their developers were phished [S18]. See
[05 — Counterarguments](./05-counterarguments.md) for how to manage this.

## Summary table

| Pattern | User action needed | Typical victims | Ad blocker helps? | Other key controls |
|---------|-------------------|-----------------|-------------------|--------------------|
| Zero-click ad exploit | None | Targeted individuals; historically everyone | Yes, removes the delivery channel in the browser | Updates, isolation, DNS blocking for in-app ads |
| Redirect chains | Visit a page | Mass | Yes | Protective DNS, safe-browsing, EDR |
| Search-ad impersonation | Click a sponsored result | Mass | Yes, hides sponsored results | Bookmarks, official stores, application control |
| Scam ads | Engage with the ad | Mass | Yes | Awareness, payment safeguards |
| Tracking / RTB | None | Everyone | Partly | Browser tracking protection, fingerprinting defences |
| Script supply chain | None | Visitors of affected sites | Sometimes | DNS blocklists, site operators' controls |
| Malicious or hijacked blocker | Install | Users of that extension | — | Few extensions, reputable open-source blocker, policy allowlists |

The "Ad blocker helps?" column is the author's assessment, based on the
mechanisms described above.
