# 06 — Methodology and QA

[← 05 — Counterarguments](./05-counterarguments.md) · [README](../README.md)

## Scope and question

**Question:** Should blocking ads and third-party tracking in web browsers be
treated as a default security practice, and what else belongs alongside it?

**In scope:** desktop and mobile web browsing by individuals and organisations;
advertising, tracking and third-party scripts as attack or surveillance
channels; browser- and DNS-level countermeasures.

**Out of scope:** email security, endpoint detection products, legal analysis
beyond the cited German decisions, and ranking commercial products.

Research cut-off: **28 October 2026**.

## Source selection

Sources were chosen in this order of preference:

1. **Primary official documents.** Government guidance (FBI, CISA, NSA), the
   vendors' own documentation for policies and identifiers (Google, Microsoft,
   Mozilla, Apple App Store, extension READMEs and store listings) and court
   press releases.
2. **Primary incident research** by the organisation that did the
   investigation (Microsoft, Google, ESET, Malwarebytes, Sansec, Sekoia,
   Amnesty International).
3. **Peer-reviewed or preprint research** for measurements (Englehardt &
   Narayanan; Garimella et al.; Eskandari et al.) and a civil-society report
   (ICCL), with its methodology stated by the publisher.

News articles that summarise other reports were not used as evidence. Where a
news article pointed to a primary source, the primary source was read and
cited instead.

## Verification procedure

For every source in [SOURCES.md](../SOURCES.md):

1. The page or PDF was downloaded on 28 October 2026 and converted to text.
2. Every number, date, quotation and identifier used in the documents was
   checked against that text. Quotations are verbatim. Numbers carry the
   year they refer to.
3. Publication dates were taken from the document itself (page date, PDF
   date line, press-release date). Where sources disagree, both are stated.
   For example, the CISA guide's PDF dates from late 2020, while Sen. Wyden's
   letter says it was published in January 2021.
4. Extension IDs were checked against the official store listing. Firefox
   add-on IDs were also checked through the AMO download URL pattern used in
   the policy example.
5. Enterprise policy names, value types, enumerations and registry paths were
   checked against Google's published policy templates and the Chromium policy
   definitions, Microsoft Learn's Edge policy pages and Mozilla's policy
   templates.
6. DNS addresses and endpoints were checked against each provider's own
   documentation page.

Automated checks in this repository:

- `scripts/check-links.mjs` requests every external URL in the Markdown files
  and fails on "not found" or "gone" responses and DNS errors. Some official
  sites reject automated clients (HTTP 401/403/429) even though the page exists.
  Those responses are reported as warnings, not failures, and the content was
  checked manually or through an archived copy.
- `scripts/check-sources.mjs` checks that every `[S#]` citation in the
  documents exists in `SOURCES.md` and that every listed source is cited at
  least once.
- `scripts/check-legal.mjs` checks the disclaimer and licence files.

## Corrections made during QA

| Draft statement | Problem | Resolution |
|-----------------|---------|------------|
| NSA guidance dated "June 2018" (as cited in Sen. Wyden's letter) | The information sheet itself is dated 5 July 2018 | Use the document's own date |
| GTIG: "75 zero-days in 2024" | GTIG's 2025 review revises the 2024 count to 78 and the 2023 count to 100 | State both, with attribution |
| CISA guide date | The PDF dates from late 2020, but Sen. Wyden's letter says January 2021 | State both |

## Claims dropped for lack of verifiable support

- **Australian ASD Essential Eight wording on web advertisements.** The
  official page could not be retrieved for verification (server errors on
  28 October 2026), so it is not cited.
- **US FTC material on data brokers.** The URLs found returned "not found", so
  it is not cited.
- **The Cyberhaven extension incident from the vendor's own blog.** The URL
  now redirects to a support portal and a news report blocked access. The
  incident is cited through Sekoia's primary research [S18] instead.
- **Apple's content-blocker developer documentation and Mozilla's support
  article on Enhanced Tracking Protection.** These pages require JavaScript and
  could not be verified as text. The Firefox policy reference [S42] and the
  App Store listing [S36] are cited instead.
- **Any figure for the share of malicious ads among all ads, or for the
  share of malware that blockers prevent.** No primary source measuring this
  was found.

## Known limitations

- **Point-in-time.** Browser extension platforms are changing (Edge's MV2
  timeline [S26] and Chrome's MV3-only state [S24]). Store listings, IDs and
  DNS endpoints may change.
- **Source bias.** Several incident reports come from security vendors
  (including ad and browser vendors) with commercial interests. The analysis
  uses their factual observations, not their product claims.
- **US-centric guidance.** The government guidance found is mainly from the
  United States. Its absence elsewhere is not evidence against the practice.
- **No outcome study.** No source measured population-level harm prevented
  by ad blocking (see [05](./05-counterarguments.md#where-the-case-is-weakest-honest-summary)).
- **Older measurements.** Tracking and performance studies date from
  2016–2017 [S19], [S20], so absolute numbers today will differ.
- **German law only.** The legal section covers two German decisions [S48],
  [S49]. The 2025 case was remanded and is unresolved as of the cut-off.

## Independence

This is an independent, unpaid analysis. It has not been commissioned,
reviewed or endorsed by any organisation named in it. See
[DISCLAIMER.md](../DISCLAIMER.md).
