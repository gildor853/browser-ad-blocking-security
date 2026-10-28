# 03 — Beyond ad blocking

[← 02 — Evidence](./02-evidence.md) · Next: [04 — Solutions and configurations](./04-solutions-and-configs.md)

A content blocker removes one attack channel. The threats in
[01](./01-threat-landscape.md) call for several layers. This chapter lists them
in rough order of value for a typical user or organisation (the ordering is
**opinion**). Concrete settings are in
[04 — Solutions and configurations](./04-solutions-and-configs.md).

## Layer 1 — Updates

Every source on drive-by malvertising ties the risk to unpatched software. The
NSA says exploit kits "take advantage of unpatched vulnerabilities" and that
"software updates are implemented promptly to prevent malware installation"
[S3]. Google attributes the decline in browser zero-days partly to browser
hardening [S12].

- Turn on automatic updates for the browser and OS, and restart the browser
  when it asks.
- Organisations: monitor browser versions centrally and keep update deferral
  short.

## Layer 2 — Content blocking in the browser

This is the subject of this repository. Practical points:

- **One blocker, not several.** The uBO project explicitly advises against
  running uBO with another content blocker [S28].
- **Keep the default lists** and the malware list on [S28, S30].
- **Use the browser's built-in protection too.** Firefox's tracking
  protection can block cryptomining and fingerprinting scripts, configurable by
  policy [S42]. Brave blocks trackers, cross-site cookies, phishing and
  fingerprinting by default through Shields [S37].
- **Chromium-based browsers and Manifest V3.** Chrome has disabled all
  Manifest V2 extensions, including uBlock Origin, and removed them from the
  Chrome Web Store [S24, S28]. The MV3 replacement, uBO Lite, works
  differently and is weaker against anti-blocker sites [S31]. Firefox keeps
  MV2 support and the blocking `webRequest` API [S25].

## Layer 3 — Protective DNS

DNS-level filtering blocks known ad, tracker, malware and phishing domains
for every app on the device or network, not just the browser. It also covers
in-app ads that a browser extension cannot see. This matters for vectors like
Aladdin, which can serve the malicious ad in a mobile app [S8].

- The NSA prefers network-based ad blocking because it gives similar
  protection "without introducing additional risk" [S3]. CISA lists protective
  DNS among its recommendations [S2]. The US Intelligence Community reports
  using DNS information to block malicious ads [S4].
- Options (examples, not endorsements):
  - **Public resolvers.** Quad9 blocks malicious domains [S43]. AdGuard DNS
    blocks ads, tracking and phishing [S44].
  - **Configurable services.** NextDNS lists blocking of ads, trackers,
    malware, phishing and cryptojacking [S45].
  - **Self-hosted.** Pi-hole offers network-wide blocking on your own
    hardware [S46].
- **Limits (opinion):** DNS cannot block ads served from the same domain as
  the content, cannot hide page elements, and is bypassed by apps that use
  their own encrypted DNS. Use it together with a browser blocker, not instead
  of one.

## Layer 4 — Safe download and search habits

Search-ad impersonation relies on a well-intentioned click [S1, S14–S16].

- Reach software vendors through a bookmark, the typed address or the
  platform's official store, never through a "Sponsored" result.
- Do not paste commands into a terminal or Run dialog because a web page told
  you to. That is the "ClickFix" technique [S16].
- Organisations: restrict who can install software, and use application
  allowlisting where practical (opinion).

## Layer 5 — Accounts: password manager and phishing-resistant MFA

Many ad-borne scams end on a credential-phishing page [S1]. A password manager
will not autofill on a look-alike domain (opinion based on how such tools
match origins). Phishing-resistant MFA defeats credential replay: CISA calls it
"the gold standard" and names FIDO/WebAuthn as the only widely available form
[S5]. Passkeys and FIDO2 security keys are implementations of that standard.

## Layer 6 — Extension hygiene

Extensions are privileged and a supply-chain target [S3, S18].

- Install as few extensions as possible, only from official stores, and
  prefer open-source projects with a long track record.
- Remove extensions that are unused, abandoned, or that change ownership.
- Organisations: block all extensions by default and allow only reviewed ones,
  using the `ExtensionSettings` policy (Chrome, Edge) or its Firefox
  equivalent [S39, S42].

## Layer 7 — Isolation for high-risk users

CISA recommends isolating web browsers from the operating system. Its guide
describes moving the processing of web content off the local system to a
virtualised environment or an isolated cloud-based platform, which "isolates
potential malicious code and content" [S2]. Chrome's Site Isolation puts sites in separate processes as a
defence against attacks such as Spectre [S38].

- High-risk roles (administrators, executives, journalists, activists):
  consider a separate browser profile or device for untrusted browsing, plus
  strict blocking.
- For people who may be targeted by mercenary spyware, the advertising
  identifiers and IP-based targeting described for Aladdin [S8] are a further
  reason to block ads on the device and at DNS level, and to keep devices
  updated (opinion).

## Layer 8 — Mobile

Mobile devices are where the most advanced ad-based vector was reported
[S8], and where browser extensions are least available.

- **Android:** Firefox for Android supports uBlock Origin [S28]. Quad9 and AdGuard DNS
  publish DNS-over-TLS hostnames (`dns.quad9.net`, `dns.adguard-dns.com`)
  [S43, S44]. Android's "Private DNS" setting accepts such a hostname, which
  applies protective DNS to the whole device (platform behaviour, not taken
  from the cited sources).
- **iPhone and iPad:** uBlock Origin Lite is available on the App Store for
  iPhone, iPad and Mac [S36]. Encrypted protective DNS can be added with the
  provider's configuration profile or app (opinion; follow the provider's own
  instructions).

## Layer 9 — Measure

Test what your setup actually blocks. The EFF's Cover Your Tracks tests how
well a browser blocks trackers and how unique its fingerprint is [S23].
