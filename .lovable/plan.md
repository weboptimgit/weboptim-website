

## Logo sekcia v Brand Manual — variácie cez CSS

### Čo dostane používateľ
Plnohodnotná **Logo Guidelines** sekcia v `/brand-manual` so 4 vizuálnymi variáciami loga, pravidlami použitia (do/don't), safe space ukážkou a download linkmi.

### Variácie loga (všetky z 1 SVG súboru)

| Variácia | Pozadie | Technika |
|---|---|---|
| **Primary (čierna)** | biele | SVG ako-je |
| **Inverted (biela)** | tmavé (brand dark) | CSS `filter: brightness(0) invert(1)` |
| **Monochrome čierna** | svetlé/farebné | CSS `filter: brightness(0)` |
| **Brand cyan** | tmavé | CSS `filter` s hue-rotate alebo SVG `<mask>` + cyan overlay |

> Poznámka: `filter: brightness(0) invert(1)` funguje spoľahlivo iba ak má SVG plné farby (žiadne gradienty). Ak chceš presné brand farby (napr. cyan #42C8F2), najčistejšie riešenie je inline SVG s `currentColor` na `fill` atribútoch — potom stačí nastaviť `color: ...` na rodičovi a logo sa prefarbí. Toto navrhujem urobiť pri jednom SVG súbore, ktorý mi pošleš.

### Štruktúra Logo sekcie

```text
┌─────────────────────────────────────────┐
│  LOGO VARIATIONS (4 cards grid)         │
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐    │
│  │Black │ │White │ │Mono  │ │Cyan  │    │
│  └──────┘ └──────┘ └──────┘ └──────┘    │
├─────────────────────────────────────────┤
│  SAFE SPACE (vizuálna mriežka okolo)    │
├─────────────────────────────────────────┤
│  ✅ CORRECT USAGE      ❌ INCORRECT      │
│  - na kontrastnom bg   - nedeformovať   │
│  - dodržať safe space  - nemeniť farby  │
│  - min veľkosť 24px    - nepridávať tieň│
├─────────────────────────────────────────┤
│  BACKGROUND VARIANTS                    │
│  light / dark / gradient / photo        │
├─────────────────────────────────────────┤
│  DOWNLOAD: SVG · PNG (každá variácia)   │
└─────────────────────────────────────────┘
```

### Technické detaily

1. **Inline-SVG komponent** — `<LogoVariant variant="white" />` ktorý vloží SVG inline a nastaví `color`/`fill`. Tým získame plnú kontrolu cez CSS bez nutnosti viacerých súborov.
2. **Fallback cez `<img>` + filter** — pre rýchle riešenie ak nechceš inline SVG.
3. **Safe space** — vizualizácia bodkovaným borderom okolo loga (CSS `outline-dashed`), s padding rovným polovici výšky symbolu.
4. **Download tlačidlá** — generujú SVG na klik (Blob → download) pre každú variáciu, plus môžem pridať PNG export cez canvas.
5. **Print friendly** — `@media print` zachová biele logo na tmavom pozadí cez `print-color-adjust: exact` (už máš nastavené v `BrandManual.tsx`).

### Súbory na úpravu
- `src/pages/BrandManual.tsx` — rozšíriť Logo sekciu
- `src/assets/logo-weboptim-full.svg` — prípadne nahradiť tvojím novým SVG

### Čo potrebujem od teba
1. **Pošli SVG** (ideálne 1 master verzia v plných farbách, bez gradientov, s `<path>` namiesto bitmapy).
2. Potvrď či chceš aj **download tlačidlá** pre každú variáciu, alebo stačí len zobrazenie.

Po schválení a doručení SVG to implementujem v jednom kroku.

