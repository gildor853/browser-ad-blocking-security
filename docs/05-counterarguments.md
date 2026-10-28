# 05 — Counterarguments

[← 04 — Solutions and configurations](./04-solutions-and-configs.md) · Next: [06 — Methodology and QA](./06-methodology-and-qa.md)

A recommendation to make ad blocking a near-default practice should face the
strongest objections. Each section states the objection, the relevant
facts, and the author's response (**opinion**).

## 1. "Ads pay for the free web"

**Facts.** Publishers can refuse content to users with blockers. In 2018 the
German Federal Court of Justice pointed to defensive measures available to
publishers, such as locking out users who are not willing to stop using the
blocker [S48]. Some blockers offer allowlisting programmes: Adblock Plus
installs with Acceptable Ads enabled by default [S28], and the Acceptable Ads
programme describes itself as a way for publishers and advertisers to reach
ad-filtering users with "nonintrusive" ads [S47]. CISA notes that some ad
blockers accept payment for allowlisting [S2].

**Response.** The revenue concern is legitimate, but it is an economic
argument, not a security one. Users and organisations can support publishers
directly (subscriptions, allowlisting trusted sites) while keeping
third-party ad delivery blocked by default. A security baseline should not
depend on every ad network in the chain being trustworthy.

## 2. "Modern browsers are secure enough; drive-by attacks are history"

**Facts.** Browser zero-day exploitation has fallen. Google counted under 10%
of 2025 zero-day exploitation in browsers and attributes this partly to
hardening [S12]. Mass exploit-kit campaigns like Stegano belong to the
Flash/Internet Explorer era [S7]. But the same researchers warn that
improved attacker operational security may hide some exploitation [S12].
Mercenary spyware vendors still use ads as a delivery channel [S8], [S9].
And most current ad harm does not need an exploit at all: it uses
impersonation, redirects and scams [S1], [S6], [S13]–[S16].

**Response.** This objection is partly right, and this repository does not
rely on mass zero-click exploitation. The case rests mainly on social
engineering through ads, privacy, and targeted threats.

## 3. "The ad blocker itself is a risk"

**Facts.** The NSA warned that a malicious ad-blocking extension "could cause
a greater compromise to network security than a malvertising attack" [S3].
In December 2024, attackers hijacked about a dozen legitimate Chrome
extensions through developer phishing [S18].

**Response.** True, and the main reason to:

- use **one** well-known, open-source blocker with a long public history,
  installed from the official store;
- on Chromium-based browsers, consider a declarative blocker. uBO Lite
  "operates entirely declaratively", and the browser itself applies the
  filtering [S30]. This narrows what the extension does at run time, but you
  still have to trust its updates (opinion);
- use **network-level** blocking (protective DNS), which the NSA describes as
  giving similar protection "without introducing additional risk" [S3];
- manage extensions centrally in organisations (see
  [04](./04-solutions-and-configs.md#3-managed-deployment)).

## 4. "Manifest V3 has made ad blocking ineffective"

**Facts.** Chrome no longer supports MV2 extensions [S24]. uBO Lite cannot
implement some uBO features and is less effective against anti-blocker sites
[S31]. Firefox keeps MV2 and blocking `webRequest` [S25]. Edge plans to finish
moving consumers to MV3 by the end of 2026 [S26].

**Response.** MV3 blockers are weaker, but not ineffective. uBO Lite still
ships EasyList, EasyPrivacy, Peter Lowe's list and uBO's own filters by
default [S30]. Users who want the strongest filtering can use Firefox with
uBO. Everyone can add DNS filtering, which MV3 does not affect.

## 5. "Blocking breaks websites"

**Facts.** The NSA lists broken page dependencies and possible denial of
service through poisoned filter lists as concerns, and recommends
allowlisting critical domains [S3]. uBO Lite's FAQ acknowledges breakage
trade-offs [S31].

**Response.** Breakage is real but manageable: per-site disabling, a short
organisational allowlist, and default rather than aggressive filter lists.
This is an operational cost, comparable to other security controls.

## 6. "It doesn't measurably improve performance"

**Facts.** A 2017 study found 25–34% less data transferred with most
blockers, but only limited load-time benefits [S19].

**Response.** Agreed. This repository does not argue for ad blocking on
performance grounds. Lower data use is a side benefit, especially on metered
mobile connections.

## 7. "Is it legal?"

**Facts.** In Germany, the Federal Court of Justice held on 19 April 2018
(I ZR 154/16) that offering Adblock Plus, including its paid allowlisting
model, is not an unfair commercial practice [S48]. On 31 July 2025
(I ZR 131/23, *Werbeblocker IV*) it partially set aside a Hamburg appellate
judgment and sent the case back for further findings on a copyright
question. The publisher argues that its web pages are computer programs and
that the blocker's interference with the DOM and CSS structures the browser
builds from them is an unauthorised modification of those programs [S49]. No decision of the Hamburg court on remand
was found by the research cut-off.

**Response (not legal advice).** Using a blocker for one's own browsing has
not been held unlawful in the decisions found. The 2025 German case concerns
the provider of the blocker, not users, and is unresolved. Organisations
outside Germany should check their own jurisdiction. See
[DISCLAIMER.md](../DISCLAIMER.md).

## 8. "Users should just be careful"

**Facts.** The Stegano campaign ran on reputable news sites and needed no
interaction [S7]. Aladdin-style ads need only to be displayed [S8].
Search-ad impersonation targets users who are trying to do the right thing
by going to the vendor's site [S1].

**Response.** Training helps against some scams, but a control that removes
the channel is more reliable than asking people to judge every ad. Both are
needed.

## Where the case is weakest (honest summary)

- For a fully updated browser and a careful user, the *exploit* risk from
  ads is low today. The strongest everyday arguments are scams,
  impersonation and privacy.
- No source found here measures how much harm ad blockers prevent at
  population scale. The recommendation rests on agency guidance, documented
  incidents and the mechanism, not on a controlled outcome study.
- Ad blockers move trust from ad networks to filter-list maintainers and the
  extension developer. That trade is favourable for reputable open-source
  projects, but it is still a trade.
