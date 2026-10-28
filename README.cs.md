# Blokování reklam v prohlížeči jako bezpečnostní základ (shrnutí)

Poskytováno tak, jak je, bez záruky — viz [DISCLAIMER.md](./DISCLAIMER.md).

Krátké české shrnutí. Plná analýza je v angličtině v [README.md](./README.md),
zdroje jsou v [SOURCES.md](./SOURCES.md). Stav ke dni **28. 10. 2026**.

## Fakta (se zdroji)

- Americké úřady doporučují blokovat reklamy. Mezi ně patří NSA (2018),
  CISA (2020/2021) a FBI (2022), které radí používat blokátor reklam při
  vyhledávání. Zpravodajská komunita USA (IC) v roce 2021 uvedla, že
  blokování reklam nasadila na úrovni sítě a DNS. [S1–S4]
- Útoky přes reklamu bez jediného kliknutí jsou doložené. Kampaň Stegano
  (2016) nevyžadovala žádnou interakci uživatele [S7]. Uniklé materiály
  firmy Intellexa (spyware Predator) popisují vektor „Aladdin“: k infekci
  stačí reklamu zobrazit [S8]. Google pozoroval škodlivé reklamy, které
  přesměrovávaly vybrané cíle na exploitové servery [S9].
- Masovým problémem dnes jsou spíš podvody než exploity. Jde o falešné
  sponzorované výsledky vyhledávání s podvrženým softwarem [S1, S14–S16] a
  o přesměrovací řetězce, z nichž jeden zasáhl téměř milion zařízení [S6].
  Google za rok 2024 zastavil 5,1 miliardy špatných reklam a zrušil
  39,2 milionu inzertních účtů [S13].
- Exploitů prohlížečů ubývá: v roce 2025 na ně připadlo méně než 10 %
  zneužitých zero-day zranitelností [S12]. Aktualizace tedy fungují.
- Reklama pohání masivní sledování. ICCL v roce 2022 odhadla, že RTB
  aukce sdílejí data o lidech v USA a Evropě 178 bilionů krát ročně [S22].
- Blokátory mají i svá rizika a limity. Rozšíření jsou privilegovaný
  software [S3] a v prosinci 2024 byla napadena legitimní rozšíření [S18].
  Chrome už nepodporuje uBlock Origin (MV2) [S24]. Blokování může rozbít
  weby [S3] a zrychlení načítání je malé [S19].

## Názor autora

- Kvalitní blokátor obsahu má patřit do výchozí bezpečnostní konfigurace
  stejně jako automatické aktualizace a správce hesel. Firmy by ho měly
  nasazovat centrálně spolu s ochranným DNS.
- Samotné blokování reklam ale bezpečnostní strategií není. Patří k němu
  aktualizace, ochranné DNS, opatrnost u stahování (nikdy ze sponzorovaných
  odkazů), správce hesel s passkeys nebo FIDO2 klíči, minimum rozšíření a u
  ohrožených osob izolace prohlížeče.

## Doporučené nástroje (příklady)

| Prohlížeč | Blokátor |
|-----------|----------|
| Firefox (desktop, Android) | uBlock Origin |
| Chrome, Edge | uBlock Origin Lite |
| Safari (Mac, iPhone, iPad) | uBlock Origin Lite |
| Brave | vestavěné Shields |

Ochranné DNS: např. Quad9 (`9.9.9.9`, `https://dns.quad9.net/dns-query`),
AdGuard DNS (`94.140.14.14`), NextDNS nebo vlastní Pi-hole. Konfigurace pro
firmy (politiky Chrome, Edge a Firefox) jsou v
[docs/04-solutions-and-configs.md](./docs/04-solutions-and-configs.md).

## Upozornění

Nejde o bezpečnostní, právní ani jiné odborné poradenství. Za nic neručíme a
žádné nastavení nezaručuje ochranu. Konfiguraci si vždy nejdřív otestujte.
Plné znění je v [DISCLAIMER.md](./DISCLAIMER.md).
