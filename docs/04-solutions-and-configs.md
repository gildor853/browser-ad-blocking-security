# 04 — Solutions and configurations

[← 03 — Beyond ad blocking](./03-beyond-ad-blocking.md) · Next: [05 — Counterarguments](./05-counterarguments.md)

Identifiers, policy names and endpoints in this chapter were checked against
the vendors' own documentation on 28 October 2026 (see
[SOURCES.md](../SOURCES.md)). Products change quickly, so check them again
before deployment. Product choices are **examples (opinion)**, not
endorsements. All examples are provided without warranty (see
[DISCLAIMER.md](../DISCLAIMER.md)).

> **Test first.** Force-installing extensions, enforcing DNS-over-HTTPS in
> `secure` mode, or blocking all extensions can break line-of-business web
> apps, internal DNS names and captive portals. Pilot on a small group.

## 1. Which blocker on which browser

| Browser | Suggested blocker (opinion) | Why | Source |
|---------|-----------------------------|-----|--------|
| Firefox (desktop, Android) | **uBlock Origin** | Firefox keeps Manifest V2 and blocking `webRequest`. uBO "works best on Firefox" (CNAME uncloaking, HTML filtering, blocking at browser launch) | [S25], [S28], [S29] |
| Google Chrome | **uBlock Origin Lite** | Chrome 138 was the last version to support MV2 extensions. uBO (MV2) was removed from the Chrome Web Store on 31 Aug 2026 | [S24], [S28], [S30] |
| Microsoft Edge | **uBlock Origin Lite** (or uBO while it still runs) | Edge is moving consumers off MV2 from Aug 2026, aiming to finish by the end of 2026. Enterprise MV2 deprecation follows in early 2027 | [S26], [S27], [S34] |
| Safari (macOS, iOS, iPadOS) | **uBlock Origin Lite** (App Store) | Listed for iPhone, iPad and Mac | [S36] |
| Brave | **Built-in Shields** | Blocks trackers, cross-site cookies, phishing and fingerprinting by default | [S37] |

Do not combine several content blockers [S28].

### Verified extension identifiers

| Extension | Store | Identifier |
|-----------|-------|------------|
| uBlock Origin Lite | Chrome Web Store | `ddkjiahejlhfcafbddmgiahcphecmpfh` [S33] |
| uBlock Origin Lite | Edge Add-ons | `cimighlppcgcoapaliogpjjdehbnofhn` [S34] |
| uBlock Origin | Edge Add-ons | `odfafepnkmbhccpbejgmiehpchacaeak` [S34] |
| uBlock Origin | Firefox Add-ons (AMO) | `uBlock0@raymondhill.net` [S35], [S42] |
| uBlock Origin Lite | Firefox Add-ons (AMO) | `uBOLiteRedux@raymondhill.net` [S35] |
| uBlock Origin Lite | Apple App Store | app id `6745342698` [S36] |

The original uBlock Origin ID in the Chrome Web Store
(`cjpalhdlnbpafiamejdnhcphjbkeiagm`) no longer installs, because the listing was
removed [S28].

## 2. Individual users (5 minutes)

1. Install the blocker from the official store, using the link in the table
   above or in [SOURCES.md](../SOURCES.md) (S33–S36). uBlock Origin and uBO
   Lite are developed by Raymond Hill (gorhill). The projects' READMEs list the
   official store pages [S28], [S30], so use those rather than searching
   the store.
2. Keep the default filter lists. In uBO Lite, the default "Optimal" mode does
   not apply generic cosmetic filtering. Raise it to "Complete" on sites where
   you want that [S31], [S32].
3. Turn on secure DNS in the browser settings or OS, using a protective
   resolver from [section 4](#4-protective-dns-endpoints).
4. Visit the EFF's Cover Your Tracks to see what is blocked [S23].

## 3. Managed deployment

### 3.1 Google Chrome

Policies used [S39]:

- `ExtensionInstallForcelist`: list of `extension_id;update_url`. The Chrome
  Web Store update URL is `https://clients2.google.com/service/update2/crx`.
- `ExtensionSettings`: per-extension dictionary. `installation_mode` is one of
  `blocked`, `allowed`, `force_installed`, `normal_installed` or `removed`. The
  special ID `"*"` sets the default for all other extensions.
- `DnsOverHttpsMode`: `off`, `automatic` (with insecure fallback) or `secure`
  (no fallback). `DnsOverHttpsTemplates`: one or more URI templates. If a
  template contains the `dns` variable, Chrome uses GET; otherwise it uses
  POST. `secure` requires a template.
- `SafeBrowsingProtectionLevel`: `0` none, `1` standard (default), `2`
  enhanced. Enhanced "requires sharing more browsing information with Google".

**Linux** (`/etc/opt/chrome/policies/managed/` [S40]), e.g.
`/etc/opt/chrome/policies/managed/baseline.json`:

```json
{
  "ExtensionSettings": {
    "*": { "installation_mode": "blocked" },
    "ddkjiahejlhfcafbddmgiahcphecmpfh": {
      "installation_mode": "force_installed",
      "update_url": "https://clients2.google.com/service/update2/crx"
    }
  },
  "DnsOverHttpsMode": "automatic",
  "DnsOverHttpsTemplates": "https://dns.quad9.net/dns-query",
  "SafeBrowsingProtectionLevel": 1
}
```

Blocking all other extensions (`"*": blocked`) is a deliberate, strict
choice. Add `allowed` entries for every extension your users need, or leave
out the `"*"` entry.

**Windows** (registry, equivalent to the Group Policy ADMX [S39]):

```reg
Windows Registry Editor Version 5.00

[HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Google\Chrome\ExtensionInstallForcelist]
"1"="ddkjiahejlhfcafbddmgiahcphecmpfh;https://clients2.google.com/service/update2/crx"

[HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Google\Chrome]
"DnsOverHttpsMode"="automatic"
"DnsOverHttpsTemplates"="https://dns.quad9.net/dns-query"
"SafeBrowsingProtectionLevel"=dword:00000001
```

Prefer Group Policy, Intune or Chrome Enterprise Core over hand-edited
registry files in production (opinion).

**uBO Lite managed settings.** uBO Lite reads administrator settings from
managed storage. For example, `defaultFiltering` takes `"none"`, `"basic"`,
`"optimal"` or `"complete"` [S32]:

```json
{
  "3rdparty": {
    "extensions": {
      "ddkjiahejlhfcafbddmgiahcphecmpfh": {
        "defaultFiltering": "optimal"
      }
    }
  }
}
```

### 3.2 Microsoft Edge

Edge uses the same policy names, with the registry path
`SOFTWARE\Policies\Microsoft\Edge` and the Edge Add-ons update URL [S41]:

```reg
Windows Registry Editor Version 5.00

[HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Microsoft\Edge\ExtensionInstallForcelist]
"1"="cimighlppcgcoapaliogpjjdehbnofhn;https://edge.microsoft.com/extensionwebstorebase/v1/crx"

[HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Microsoft\Edge]
"DnsOverHttpsMode"="automatic"
"DnsOverHttpsTemplates"="https://dns.quad9.net/dns-query"
```

According to Microsoft, the Edge `secure` mode "only sends DNS-over-HTTPS
queries and will fail to resolve on error" [S41]. Use `automatic` unless you
have tested `secure` with your internal DNS.

The uBO Lite managed-settings key for Edge is
`HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Microsoft\Edge\3rdparty\extensions\cimighlppcgcoapaliogpjjdehbnofhn\policy`
[S32].

### 3.3 Mozilla Firefox

`policies.json` goes in a `distribution` folder next to the Firefox
executable (Windows), in `Firefox.app/Contents/Resources/distribution`
(macOS), or in `/etc/firefox/policies` for a system-wide policy on Linux
[S42]. `force_installed` requires an `install_url`. For AMO the pattern is
`https://addons.mozilla.org/firefox/downloads/latest/ADDON_ID/latest.xpi`
[S42].

```json
{
  "policies": {
    "ExtensionSettings": {
      "uBlock0@raymondhill.net": {
        "installation_mode": "force_installed",
        "install_url": "https://addons.mozilla.org/firefox/downloads/latest/uBlock0@raymondhill.net/latest.xpi"
      }
    },
    "EnableTrackingProtection": {
      "Value": true,
      "Cryptomining": true,
      "Fingerprinting": true,
      "Locked": false
    },
    "DNSOverHTTPS": {
      "Enabled": true,
      "ProviderURL": "https://dns.quad9.net/dns-query",
      "Fallback": true,
      "Locked": false
    }
  }
}
```

Notes [S42]:

- `EnableTrackingProtection` with `Value: true` enables tracking protection
  in normal and private windows. `Cryptomining` and `Fingerprinting` block
  those script categories.
- `DNSOverHTTPS.Fallback` (Firefox 124+) controls whether Firefox falls back
  to the system resolver when the DoH provider fails.
- Check the result at `about:policies`.

## 4. Protective DNS endpoints

| Service | Plain DNS | DNS-over-HTTPS | DNS-over-TLS | Filtering | Source |
|---------|-----------|----------------|--------------|-----------|--------|
| Quad9 (recommended service) | `9.9.9.9`, `149.112.112.112`, `2620:fe::fe`, `2620:fe::9` | `https://dns.quad9.net/dns-query` | `dns.quad9.net` | Malware/phishing blocking, DNSSEC validation | [S43] |
| AdGuard DNS (default) | `94.140.14.14`, `94.140.15.15`, `2a10:50c0::ad1:ff`, `2a10:50c0::ad2:ff` | `https://dns.adguard-dns.com/dns-query` | `dns.adguard-dns.com` | Ads, trackers, phishing | [S44] |
| NextDNS | per-account | per-account | per-account | Configurable: ads, trackers, malware, phishing, cryptojacking, typosquatting, newly registered domains | [S45] |
| Pi-hole (self-hosted) | your server | via add-ons | via add-ons | Network-wide blocking with your chosen lists | [S46] |

Quad9's `9.9.9.10` is its unfiltered service and does not block malware
[S43]. The Pi-hole "add-ons" note means encrypted upstream or downstream DNS
needs extra components. That is a general observation; follow the Pi-hole
documentation [S46].

## 5. Mobile

| Platform | Browser blocking | Device-wide |
|----------|------------------|-------------|
| Android | Firefox for Android with uBlock Origin [S28] | Private DNS with a DoT hostname such as `dns.quad9.net` or `dns.adguard-dns.com` [S43], [S44] |
| iOS / iPadOS | uBlock Origin Lite for Safari [S36] | Provider's DNS profile or app (follow provider instructions) |

## 6. Verifying a deployment

- `about:policies` shows the Firefox policies in effect [S42]. In Chrome and
  Edge, the equivalent pages are `chrome://policy` and `edge://policy`.
- Confirm that the extension appears as installed by policy and cannot be
  removed.
- Open a known test page for tracker blocking such as Cover Your Tracks
  [S23], and check that business-critical sites still work.
