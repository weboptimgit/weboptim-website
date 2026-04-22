import { Language } from "@/contexts/LanguageContext";

export type BrandManualLang = {
  // Hero
  badge: string;
  internal: string;
  heroTitle1: string;
  heroTitle2: string;
  heroSubtitle: string;
  printBtn: string;
  startReading: string;

  // TOC + section titles
  sections: {
    overview: string;
    audience: string;
    voice: string;
    visual: string;
    typography: string;
    logo: string;
    imagery: string;
    ui: string;
    social: string;
    positioning: string;
    quickref: string;
  };

  // Eyebrows (numbered)
  eyebrows: {
    overview: string;
    audience: string;
    voice: string;
    visual: string;
    typography: string;
    logo: string;
    imagery: string;
    ui: string;
    social: string;
    positioning: string;
    quickref: string;
  };

  // 1. Overview
  overviewDesc: string;
  mission: { title: string; body: string };
  vision: { title: string; body: string };
  coreValuesTitle: string;
  coreValues: { t: string; d: string }[];
  personalityTitle: string;
  personalityTags: string[];
  personalityBody: string;
  uspTitle: string;
  uspTagline: string;
  uspPoints: string[];

  // 2. Audience
  audienceDesc: string;
  personas: { name: string; age: string; role: string; quote: string; goalsLabel: string; goals: string[] }[];
  painTitle: string;
  pain: string[];
  outcomesTitle: string;
  outcomes: string[];
  motivationsTitle: string;
  motivations: string[];

  // 3. Voice
  voiceDesc: string;
  voiceCards: { t: string; d: string }[];
  doTitle: string;
  dontTitle: string;
  doItems: string[];
  dontItems: string[];
  examplesTitle: string;
  headlinesLabel: string;
  ctasLabel: string;
  exampleHeadlines: string[];
  exampleCtas: string[];

  // 4. Visual
  visualDesc: string;
  primaryLabel: string;
  secondaryLabel: string;
  surfacesLabel: string;
  textBordersLabel: string;
  signatureGradientsLabel: string;
  heroGradientName: string;
  heroGradientUse: string;
  primaryGradientName: string;
  primaryGradientUse: string;

  // Color roles (translated descriptions for each swatch)
  colorRoles: {
    primary: string;
    secondary: string;
    purple: string;
    pink: string;
    background: string;
    card: string;
    muted: string;
    foreground: string;
    mutedFg: string;
    border: string;
  };

  // 5. Typography
  typographyDesc: string;
  displayFontLabel: string;
  bodyFontLabel: string;
  displayFontDesc: string;
  bodyFontDesc: string;
  typeScaleTitle: string;
  typeScale: { tag: string; sample: string }[];

  // 6. Logo
  logoDesc: string;
  logoVariants: { label: string; desc: string }[];
  bgVariantsLabel: string;
  bgVariants: string[];
  safeSpaceLabel: string;
  safeSpaceDesc: string;
  minSizeLabel: string;
  minSizeDesc: string;
  minSizeNotes: string[];
  correctTitle: string;
  incorrectTitle: string;
  correctItems: string[];
  incorrectItems: string[];
  downloadSvg: string;

  // 7. Imagery
  imageryDesc: string;
  imageryCards: { title: string; body: string }[];
  realPeopleFallback: string;
  moodTitle: string;
  moodLabels: { mood: string; lighting: string; framing: string; product: string };
  moodBodies: { mood: string; lighting: string; framing: string; product: string };

  // 8. UI
  uiDesc: string;
  buttonsTitle: string;
  buttonsLabels: { default: string; hero: string; outline: string; ghost: string };
  buttonsNote: string;
  formsTitle: string;
  formsPlaceholderEmail: string;
  formsPlaceholderMsg: string;
  formsNote: string;
  cardsTitle: string;
  cardsGlassTitle: string;
  cardsSolidTitle: string;
  tokensTitle: string;
  spacingTitle: string;
  spacingNote: string;

  // 9. Social
  socialDesc: string;
  socialChannels: { ch: string; tone: string; body: string }[];
  adCreativeTitle: string;
  adCreativeItems: string[];
  captionTitle: string;
  captionItems: string[];

  // 10. Positioning
  positioningDesc: string;
  positioningCards: { title: string; body: string }[];

  // 11. Quick reference
  quickrefDesc: string;
  qrMissionLabel: string;
  qrMissionBody: string;
  qrVoiceLabel: string;
  qrVoiceBody: string;
  qrAlwaysLabel: string;
  qrAlways: string[];
  qrNeverLabel: string;
  qrNever: string[];
  qrColorsLabel: string;
  qrTypeLabel: string;
  qrCtaLabel: string;
  qrCtaButton: string;
  qrCtaNote: string;
  footer: string;
};

export const brandManualTranslations: Record<Language, BrandManualLang> = {
  EN: {
    badge: "Brand Manual · v1.0 · 2025",
    internal: "Internal · Not Indexed",
    heroTitle1: "WebOptim",
    heroTitle2: "Brand Guidelines",
    heroSubtitle:
      "The single source of truth for how WebOptim looks, sounds and behaves — across every website, ad, deck and social post.",
    printBtn: "Print / Save as PDF",
    startReading: "Start reading",

    sections: {
      overview: "Brand Overview",
      audience: "Audience",
      voice: "Tone of Voice",
      visual: "Visual Identity",
      typography: "Typography",
      logo: "Logo Guidelines",
      imagery: "Photography & Imagery",
      ui: "UI / Web Design Rules",
      social: "Social Media",
      positioning: "Competitor Positioning",
      quickref: "Quick Reference Sheet",
    },
    eyebrows: {
      overview: "01 · Foundation",
      audience: "02 · People",
      voice: "03 · Voice",
      visual: "04 · Visual",
      typography: "05 · Typography",
      logo: "06 · Logo",
      imagery: "07 · Imagery",
      ui: "08 · UI",
      social: "09 · Social",
      positioning: "10 · Positioning",
      quickref: "11 · Cheat Sheet",
    },

    overviewDesc:
      "Who we are, why we exist, and how we show up. Every piece of communication should ladder back to these foundations.",
    mission: {
      title: "Mission",
      body:
        "To help ambitious businesses win online — through fast, beautifully engineered websites, e-shops and digital growth that actually convert. We replace agency bloat with senior craft, measurable results and zero friction.",
    },
    vision: {
      title: "Vision",
      body:
        "To become the most trusted digital partner for SMEs across Central Europe — the studio teams call when their website has to perform, not just look pretty.",
    },
    coreValuesTitle: "Core Values",
    coreValues: [
      { t: "Speed", d: "Fast delivery, fast websites, fast replies. Time is the real currency." },
      { t: "Craft", d: "Senior-level execution. No juniors learning on the client's dime." },
      { t: "Transparency", d: "Clear pricing, honest timelines, no jargon used to inflate scope." },
      { t: "Results", d: "We measure what matters: conversions, revenue, organic growth." },
    ],
    personalityTitle: "Brand Personality",
    personalityTags: ["Confident", "Pragmatic", "Modern", "Direct", "Helpful", "Senior", "Future-forward"],
    personalityBody:
      "We sound like a senior consultant — not an over-eager intern, not a corporate brochure. We are calm, technical, and slightly bold. We use modern visuals (glassmorphism, glowing gradients) because we build for clients who want to look ahead, not behind.",
    uspTitle: "Unique Selling Proposition",
    uspTagline: "Premium websites without the agency tax.",
    uspPoints: [
      "Senior team, no account-manager middlemen",
      "Multi-domain, multi-language ready (EU/CZ/SK)",
      "Performance-first stack (React, edge, real Core Web Vitals scores)",
      "Transparent pricing via live online configurator",
    ],

    audienceDesc:
      "We don't talk to everyone. Knowing exactly who we serve makes our copy sharper and our design more decisive.",
    personas: [
      {
        name: "The Ambitious Founder",
        age: "30–45",
        role: "Owner / CEO of a 5–50 person company",
        quote: "I need a website that sells, not just exists.",
        goalsLabel: "Top goals",
        goals: [
          "Generate qualified leads",
          "Look as serious as bigger competitors",
          "Stop losing deals to a bad first impression",
        ],
      },
      {
        name: "The In-house Marketer",
        age: "28–40",
        role: "Marketing Manager / Head of Growth",
        quote: "I need a partner who can keep up with my campaigns.",
        goalsLabel: "Top goals",
        goals: [
          "Faster landing pages for paid ads",
          "SEO that compounds",
          "A dev team that ships in days, not months",
        ],
      },
      {
        name: "The E-commerce Operator",
        age: "25–50",
        role: "Shop owner scaling beyond template platforms",
        quote: "My platform is the bottleneck.",
        goalsLabel: "Top goals",
        goals: [
          "Higher conversion rate",
          "Better mobile UX",
          "Custom features without enterprise prices",
        ],
      },
    ],
    painTitle: "Pain Points",
    pain: [
      "Slow, outdated websites that leak conversions",
      "Agencies that overpromise and underdeliver",
      "Hidden costs and never-ending change requests",
      "No clarity on what's actually being built",
      "DIY tools that hit a wall once they grow",
    ],
    outcomesTitle: "Desired Outcomes",
    outcomes: [
      "A site that loads instantly and ranks",
      "More qualified leads in the inbox",
      "Higher conversion rate from existing traffic",
      "A brand presence that matches their ambition",
      "A long-term partner, not a one-off vendor",
    ],
    motivationsTitle: "Buying Motivations",
    motivations: [
      "Trust — visible portfolio, real reviews, named team",
      "Speed — clear timeline, fast first reply",
      "Transparency — live configurator, fixed quotes",
      "Expertise — senior craft visible on the site itself",
      "ROI proof — measurable case studies",
    ],

    voiceDesc: "How WebOptim sounds in writing — from website headlines to support emails.",
    voiceCards: [
      {
        t: "Communication style",
        d: "Direct, confident, helpful. We lead with the outcome, then explain the how. We never bury the value under buzzwords.",
      },
      {
        t: "Vocabulary style",
        d: "Modern, slightly technical, plain-spoken. Use real terms (Core Web Vitals, conversion rate, edge hosting) — explain them only when needed. No corporate fluff (synergy, leverage, holistic).",
      },
      {
        t: "Sentence style",
        d: "Short and rhythmic. Mix punchy 4-word lines with longer explanations. Active voice. One idea per sentence.",
      },
      {
        t: "Emotional tone",
        d: "Calm confidence with a spark of excitement. We're the senior pro who has seen it all — but still genuinely loves shipping great work.",
      },
    ],
    doTitle: "Do",
    dontTitle: "Don't",
    doItems: [
      'Lead with results: "Faster sites. More conversions."',
      "Use specific numbers (3x, 90+ PageSpeed, 14 days)",
      "Address the reader as 'you'",
      "Keep CTAs verb-led: 'Get your quote', 'See our work'",
      "Use Slovak/Czech idioms naturally — never machine-translated",
    ],
    dontItems: [
      "Don't say 'world-class', 'best-in-class', 'cutting-edge'",
      "Don't use exclamation marks to fake enthusiasm!!!",
      "Don't use AI-sounding phrases ('In today's digital landscape…')",
      "Don't speak about ourselves in third person on the site",
      "Don't promise what we can't measure",
    ],
    examplesTitle: "Example headlines & CTAs",
    headlinesLabel: "Headlines",
    ctasLabel: "CTAs",
    exampleHeadlines: [
      "Premium websites. Without the agency tax.",
      "Your website should sell — not just exist.",
      "From idea to launch in 14 days.",
      "Built for speed. Engineered for conversions.",
    ],
    exampleCtas: ["Get your free quote", "See our work", "Start your project", "Calculate your price"],

    visualDesc:
      "The exact palette pulled from our live design tokens. Always use HSL variables in code; HEX is for external tools (Figma, print, ads).",
    primaryLabel: "Primary",
    secondaryLabel: "Secondary & Accents",
    surfacesLabel: "Surfaces",
    textBordersLabel: "Text & Borders",
    signatureGradientsLabel: "Signature Gradients",
    heroGradientName: "Hero Gradient",
    heroGradientUse: "Hero buttons · key brand moments · marketing artwork",
    primaryGradientName: "Primary Gradient",
    primaryGradientUse: "Text gradients · icon backgrounds · subtle CTAs",

    colorRoles: {
      primary: "Primary brand color · CTAs · highlights",
      secondary: "Secondary actions · links · accents",
      purple: "Gradient accent · glow effects",
      pink: "Hero gradient end · marketing accents",
      background: "Primary background · dark canvas",
      card: "Cards · elevated surfaces",
      muted: "Inputs · borders · subtle backgrounds",
      foreground: "Primary text · headings",
      mutedFg: "Secondary text · descriptions",
      border: "Dividers · card borders",
    },

    typographyDesc: "Two fonts. Clear hierarchy. Loaded with display=swap for performance.",
    displayFontLabel: "Display font",
    bodyFontLabel: "Body font",
    displayFontDesc: "All headings (H1–H6) · hero copy · large numbers. Modern geometric sans, slightly rounded.",
    bodyFontDesc: "Body copy · UI labels · small print. Distinctive but highly legible at small sizes.",
    typeScaleTitle: "Type scale",
    typeScale: [
      { tag: "H1", sample: "Premium websites." },
      { tag: "H2", sample: "What we build" },
      { tag: "H3", sample: "Service title" },
      { tag: "H4", sample: "Card heading" },
      { tag: "Body L", sample: "Long-form paragraph copy on services and case studies." },
      { tag: "Body", sample: "Default paragraph text — the workhorse for almost everything." },
      { tag: "Small", sample: "Captions, labels, secondary information." },
      { tag: "Button", sample: "GET YOUR QUOTE" },
    ],

    logoDesc:
      "The WebOptim mark is a single inline SVG using currentColor. Variations are produced via CSS — no separate files needed. Always preserve clear space, contrast and proportions.",
    logoVariants: [
      { label: "Primary — White", desc: "Default usage on dark or branded backgrounds." },
      { label: "Inverted — Black", desc: "On light, neutral backgrounds and print materials." },
      { label: "Brand — Cyan", desc: "Accent variant for hero moments and feature highlights." },
      { label: "Monochrome — Muted", desc: "Low-emphasis placements: footers, signatures, watermarks." },
    ],
    bgVariantsLabel: "Background variants",
    bgVariants: ["Light surface", "Dark surface", "Brand gradient", "Brand cyan"],
    safeSpaceLabel: "Safe space",
    safeSpaceDesc: "Minimum clear space (x) on all sides equals the height of the symbol.",
    minSizeLabel: "Minimum size",
    minSizeDesc: "Never reproduce the wordmark below 24 px height in digital, or 8 mm in print.",
    minSizeNotes: ["12px · favicon", "24px · digital min", "40px · default"],
    correctTitle: "Correct usage",
    incorrectTitle: "Incorrect usage",
    correctItems: [
      "Use the original SVG and recolor via CSS currentColor",
      "Maintain the safe space equal to the symbol height",
      "Use white on dark, black on light, cyan only as accent",
      "Keep the logo at minimum 24 px height in digital",
    ],
    incorrectItems: [
      "Don't recolor outside the brand palette",
      "Don't add shadows, strokes, glows or 3D effects",
      "Don't stretch, skew, rotate or distort the proportions",
      "Don't place over busy photos without a solid backdrop",
    ],
    downloadSvg: "Download SVG",

    imageryDesc:
      "Our visual world is digital-first: glowing gradients, glass surfaces, abstract shapes — humans only when they earn the moment.",
    imageryCards: [
      { title: "Abstract & Atmospheric", body: "Glowing orbs, soft gradients, blurred light. Used as backgrounds and hero artwork." },
      { title: "Glassmorphism UI", body: "Translucent cards over rich backgrounds. Real product UI screenshots when available." },
      { title: "Real People", body: "Only the actual team. Natural light, neutral backdrops, no stock smiles." },
    ],
    realPeopleFallback: "Editorial portrait",
    moodTitle: "Mood, lighting & framing",
    moodLabels: { mood: "Mood", lighting: "Lighting", framing: "Framing", product: "Product images" },
    moodBodies: {
      mood: "Premium · futuristic · calm. Never cheerful-stock or corporate-handshake.",
      lighting: "Cool, blueish highlights. Soft glows. Deep shadows. Never harsh flash.",
      framing: "Generous negative space. Hero subject off-center. Layered depth.",
      product: "Real device mockups (laptop / phone) with subtle perspective and brand-tinted glow.",
    },

    uiDesc: "The components and spacing primitives every page must respect.",
    buttonsTitle: "Buttons",
    buttonsLabels: {
      default: "Default — Primary action",
      hero: "Hero — Marketing CTA",
      outline: "Outline — Secondary",
      ghost: "Ghost — Tertiary",
    },
    buttonsNote: "Sizes: sm · default · lg · xl · Always rounded-lg or larger.",
    formsTitle: "Forms",
    formsPlaceholderEmail: "your@email.com",
    formsPlaceholderMsg: "Tell us about your project…",
    formsNote: "Always include explicit success modal · Anti-spam delay 3s · Labels above fields.",
    cardsTitle: "Cards",
    cardsGlassTitle: "Glass card (default)",
    cardsSolidTitle: "Solid card",
    tokensTitle: "Tokens",
    spacingTitle: "Spacing system",
    spacingNote:
      "Tailwind 4px base. Most components use 4 · 6 · 8 · 16 · 24. Sections always use 80–112px vertical rhythm.",

    socialDesc: "Channel-specific tone — same voice, different volume.",
    socialChannels: [
      {
        ch: "Instagram",
        tone: "Visual & aspirational",
        body: "Showcase the craft. Big visuals, before/after of websites, behind-the-scenes from the studio. Captions short and punchy with 1–2 emoji max.",
      },
      {
        ch: "Facebook",
        tone: "Informative & local",
        body: "Longer-form posts about projects, milestones, and Czech/Slovak market insights. Plain language, conversational. Avoid hashtags.",
      },
      {
        ch: "LinkedIn",
        tone: "Professional & expert",
        body: "Case studies with real numbers, lessons learned, hiring posts. First-person from the team. No motivational fluff.",
      },
    ],
    adCreativeTitle: "Ad creative style",
    adCreativeItems: [
      "Dark background + signature gradient orb",
      "Headline in Outfit Bold, max 6 words",
      "One clear CTA button (Primary or Hero variant)",
      "Logo bottom-left, small but legible",
      "Real screenshot of the product when relevant",
    ],
    captionTitle: "Caption style",
    captionItems: [
      "Hook in the first line — no warm-up",
      "Sentence case, not Title Case",
      'Numbers as digits ("3x", not "three times")',
      "End with a clear next step or question",
      "Sk/Cz captions feel native — no Google-translate vibe",
    ],

    positioningDesc: "Where WebOptim sits in the market — and why people choose us over everyone else.",
    positioningCards: [
      {
        title: "Premium without being pricey",
        body: "We sit above DIY tools (Wix, Webflow templates) and freelancers — but well below traditional agencies in cost. Our website itself is the proof: senior craft visible in every interaction.",
      },
      {
        title: "Trusted, not hyped",
        body: "Real Google reviews on the homepage. Named team. Multi-domain presence (.eu / .cz / .sk). Transparent live pricing. Trust comes from showing, not telling.",
      },
      {
        title: "Modern, not trendy",
        body: "Glassmorphism, gradient orbs and animated borders signal that we build for what's next — not what was hot in 2018. But we never sacrifice clarity for visual gimmicks.",
      },
      {
        title: "Expert, not mysterious",
        body: "We share knowledge openly — blog, glossary, FAQ, free price calculator. The more clients understand, the better they buy.",
      },
    ],

    quickrefDesc: "Print this. Pin it. Live by it.",
    qrMissionLabel: "Mission",
    qrMissionBody: "Premium websites that actually convert — without the agency tax.",
    qrVoiceLabel: "Voice in 5 words",
    qrVoiceBody: "Confident · direct · modern · helpful · senior.",
    qrAlwaysLabel: "Always",
    qrAlways: [
      "Lead with the outcome",
      "Use real numbers",
      "Verb-led CTAs",
      "Dark theme by default",
      "HSL tokens in code",
    ],
    qrNeverLabel: "Never",
    qrNever: [
      "Buzzwords or AI clichés",
      "Stock corporate photography",
      "Hard-coded colors in components",
      "Toast-only success feedback",
    ],
    qrColorsLabel: "Colors",
    qrTypeLabel: "Type",
    qrCtaLabel: "Signature CTA",
    qrCtaButton: "Get your free quote",
    qrCtaNote: "Hero gradient · Outfit semibold · rounded-lg",
    footer: "WebOptim Brand Manual v1.0 · 2025 · Built from weboptim.eu / .cz / .sk",
  },

  SK: {
    badge: "Brand manuál · v1.0 · 2025",
    internal: "Interné · Neindexované",
    heroTitle1: "WebOptim",
    heroTitle2: "Brand manuál",
    heroSubtitle:
      "Jediný zdroj pravdy o tom, ako WebOptim vyzerá, znie a vystupuje — naprieč každou webstránkou, reklamou, prezentáciou a sociálnym príspevkom.",
    printBtn: "Tlačiť / Uložiť ako PDF",
    startReading: "Začať čítať",

    sections: {
      overview: "Prehľad značky",
      audience: "Cieľová skupina",
      voice: "Tón komunikácie",
      visual: "Vizuálna identita",
      typography: "Typografia",
      logo: "Pravidlá loga",
      imagery: "Fotografia a vizuál",
      ui: "Pravidlá UI / web dizajnu",
      social: "Sociálne siete",
      positioning: "Pozícia voči konkurencii",
      quickref: "Rýchla referencia",
    },
    eyebrows: {
      overview: "01 · Základ",
      audience: "02 · Ľudia",
      voice: "03 · Hlas",
      visual: "04 · Vizuál",
      typography: "05 · Typografia",
      logo: "06 · Logo",
      imagery: "07 · Vizuál",
      ui: "08 · UI",
      social: "09 · Social",
      positioning: "10 · Pozícia",
      quickref: "11 · Cheat sheet",
    },

    overviewDesc:
      "Kto sme, prečo existujeme a ako vystupujeme. Každá komunikácia by mala vychádzať z týchto základov.",
    mission: {
      title: "Misia",
      body:
        "Pomáhame ambicióznym firmám vyhrávať online — rýchlymi, krásne navrhnutými webmi, e-shopmi a digitálnym rastom, ktorý reálne konvertuje. Nahrádzame agentúrnu byrokraciu seniorným remeslom, merateľnými výsledkami a nulovým trením.",
    },
    vision: {
      title: "Vízia",
      body:
        "Stať sa najdôveryhodnejším digitálnym partnerom pre malé a stredné firmy v strednej Európe — štúdiom, ktoré tímy volajú, keď web musí výkonne fungovať, nielen vyzerať.",
    },
    coreValuesTitle: "Hlavné hodnoty",
    coreValues: [
      { t: "Rýchlosť", d: "Rýchle dodanie, rýchle weby, rýchle odpovede. Čas je skutočná mena." },
      { t: "Remeslo", d: "Seniorná úroveň prevedenia. Žiadni juniori, ktorí sa učia na klientovi." },
      { t: "Transparentnosť", d: "Jasné ceny, čestné termíny, žiadne cudzie slová na nafúknutie rozsahu." },
      { t: "Výsledky", d: "Meriame to, na čom záleží: konverzie, tržby, organický rast." },
    ],
    personalityTitle: "Osobnosť značky",
    personalityTags: ["Sebavedomá", "Pragmatická", "Moderná", "Priama", "Užitočná", "Seniorná", "Nadčasová"],
    personalityBody:
      "Znieme ako seniorný konzultant — nie prehnane nadšený stážista, nie firemná brožúra. Sme pokojní, technickí a mierne odvážni. Používame moderný vizuál (glassmorphism, žiariace gradienty), pretože staviame pre klientov, ktorí chcú hľadieť dopredu, nie dozadu.",
    uspTitle: "Jedinečná hodnotová ponuka",
    uspTagline: "Prémiové weby bez agentúrnej dane.",
    uspPoints: [
      "Seniorný tím, žiadni account manageri ako medzičlánok",
      "Pripravené pre viac domén a jazykov (EU/CZ/SK)",
      "Stack zameraný na výkon (React, edge, reálne Core Web Vitals)",
      "Transparentné ceny cez živý online konfigurátor",
    ],

    audienceDesc:
      "Nehovoríme s každým. Keď presne vieme, komu slúžime, naša komunikácia je ostrejšia a dizajn rozhodnejší.",
    personas: [
      {
        name: "Ambiciózny zakladateľ",
        age: "30–45",
        role: "Majiteľ / CEO firmy s 5–50 ľuďmi",
        quote: "Potrebujem web, ktorý predáva — nie taký, ktorý len existuje.",
        goalsLabel: "Hlavné ciele",
        goals: [
          "Generovať kvalifikované leady",
          "Pôsobiť rovnako vážne ako väčší konkurenti",
          "Prestať strácať obchody kvôli zlému prvému dojmu",
        ],
      },
      {
        name: "Interný marketér",
        age: "28–40",
        role: "Marketing manažér / Head of Growth",
        quote: "Potrebujem partnera, ktorý drží krok s mojimi kampaňami.",
        goalsLabel: "Hlavné ciele",
        goals: [
          "Rýchlejšie landing pages pre platenú reklamu",
          "SEO, ktoré sa dlhodobo zúročí",
          "Vývojársky tím, ktorý dodá v dňoch, nie mesiacoch",
        ],
      },
      {
        name: "Prevádzkovateľ e-shopu",
        age: "25–50",
        role: "Majiteľ e-shopu, ktorý prerastá šablónové platformy",
        quote: "Moja platforma je moja brzda.",
        goalsLabel: "Hlavné ciele",
        goals: [
          "Vyššia miera konverzie",
          "Lepšie mobilné UX",
          "Vlastné funkcie bez enterprise cien",
        ],
      },
    ],
    painTitle: "Bolestivé body",
    pain: [
      "Pomalé, zastarané weby, ktoré strácajú konverzie",
      "Agentúry, ktoré sľubujú veľa a dodávajú málo",
      "Skryté náklady a nekonečné zmenové požiadavky",
      "Žiadna jasnosť, čo sa vlastne stavia",
      "DIY nástroje, ktoré narazia na strop pri raste",
    ],
    outcomesTitle: "Želané výsledky",
    outcomes: [
      "Web, ktorý sa načíta okamžite a má pozície",
      "Viac kvalifikovaných leadov v schránke",
      "Vyššia konverzia z existujúcej návštevnosti",
      "Brand, ktorý zodpovedá ich ambíciám",
      "Dlhodobý partner, nie jednorazový dodávateľ",
    ],
    motivationsTitle: "Motivácie pri nákupe",
    motivations: [
      "Dôvera — viditeľné portfólio, reálne recenzie, menovaný tím",
      "Rýchlosť — jasný harmonogram, rýchla prvá odpoveď",
      "Transparentnosť — živý konfigurátor, fixné cenové ponuky",
      "Expertíza — seniorné remeslo viditeľné priamo na webe",
      "Dôkaz ROI — merateľné prípadové štúdie",
    ],

    voiceDesc: "Ako WebOptim znie v písaní — od headline-ov po podporné e-maily.",
    voiceCards: [
      {
        t: "Komunikačný štýl",
        d: "Priamy, sebavedomý, užitočný. Vedieme s výsledkom, potom vysvetľujeme ako. Hodnotu nikdy nepochovávame pod cudzími slovami.",
      },
      {
        t: "Slovník",
        d: "Moderný, mierne technický, zrozumiteľný. Používame reálne pojmy (Core Web Vitals, miera konverzie, edge hosting) — vysvetľujeme ich len keď treba. Žiadna firemná vata (synergia, leverage, holistický).",
      },
      {
        t: "Štýl viet",
        d: "Krátke a rytmické. Miešame údernú 4-slovnú vetu s dlhšími vysvetleniami. Aktívny rod. Jedna myšlienka na vetu.",
      },
      {
        t: "Emocionálny tón",
        d: "Pokojné sebavedomie s iskrou nadšenia. Sme seniorný profík, ktorý videl všetko — ale stále úprimne miluje dobrú prácu.",
      },
    ],
    doTitle: "Robíme",
    dontTitle: "Nerobíme",
    doItems: [
      'Vedieme s výsledkom: „Rýchlejšie weby. Viac konverzií."',
      "Používame konkrétne čísla (3×, 90+ PageSpeed, 14 dní)",
      "Oslovujeme čitateľa ako „vy"",
      "CTA so slovesom: „Získajte cenovú ponuku", „Pozrite naše práce"",
      "Slovenské/české idiómy znejú prirodzene — nikdy strojový preklad",
    ],
    dontItems: [
      "Nepoužívame „svetová úroveň", „best-in-class", „cutting-edge"",
      "Nepoužívame výkričníky na predstieranie nadšenia!!!",
      "Nepoužívame AI frázy („V dnešnom digitálnom svete…")",
      "O sebe nehovoríme v tretej osobe na webe",
      "Nesľubujeme to, čo nevieme zmerať",
    ],
    examplesTitle: "Príklady headline-ov a CTA",
    headlinesLabel: "Headline-y",
    ctasLabel: "CTA",
    exampleHeadlines: [
      "Prémiové weby. Bez agentúrnej dane.",
      "Váš web by mal predávať — nielen existovať.",
      "Od nápadu k spusteniu za 14 dní.",
      "Stavané na rýchlosť. Inžinierované na konverzie.",
    ],
    exampleCtas: ["Získajte cenovú ponuku zdarma", "Pozrite naše práce", "Spustiť projekt", "Vypočítať cenu"],

    visualDesc:
      "Presná paleta z našich živých design tokenov. V kóde vždy používajte HSL premenné; HEX je pre externé nástroje (Figma, tlač, reklamy).",
    primaryLabel: "Primárna",
    secondaryLabel: "Sekundárne a akcenty",
    surfacesLabel: "Povrchy",
    textBordersLabel: "Text a okraje",
    signatureGradientsLabel: "Signature gradienty",
    heroGradientName: "Hero gradient",
    heroGradientUse: "Hero tlačidlá · kľúčové brand momenty · marketingové vizuály",
    primaryGradientName: "Primárny gradient",
    primaryGradientUse: "Text gradienty · pozadia ikon · jemné CTA",

    colorRoles: {
      primary: "Primárna brand farba · CTA · zvýraznenia",
      secondary: "Sekundárne akcie · odkazy · akcenty",
      purple: "Gradientový akcent · žiariace efekty",
      pink: "Záver hero gradientu · marketingové akcenty",
      background: "Primárne pozadie · tmavé plátno",
      card: "Karty · vyzdvihnuté povrchy",
      muted: "Inputy · okraje · jemné pozadia",
      foreground: "Primárny text · nadpisy",
      mutedFg: "Sekundárny text · popisy",
      border: "Oddelenia · okraje kariet",
    },

    typographyDesc: "Dva fonty. Jasná hierarchia. Načítané s display=swap pre výkon.",
    displayFontLabel: "Display font",
    bodyFontLabel: "Body font",
    displayFontDesc:
      "Všetky nadpisy (H1–H6) · hero copy · veľké čísla. Moderný geometrický sans, mierne zaoblený.",
    bodyFontDesc: "Body copy · UI labely · drobné texty. Charakteristický, ale skvelo čitateľný v malých veľkostiach.",
    typeScaleTitle: "Typografická škála",
    typeScale: [
      { tag: "H1", sample: "Prémiové weby." },
      { tag: "H2", sample: "Čo staviame" },
      { tag: "H3", sample: "Názov služby" },
      { tag: "H4", sample: "Nadpis karty" },
      { tag: "Body L", sample: "Dlhší odsekový text na službách a prípadových štúdiách." },
      { tag: "Body", sample: "Predvolený text odseku — ťahúň takmer všetkého." },
      { tag: "Small", sample: "Popisky, labely, sekundárne informácie." },
      { tag: "Button", sample: "ZÍSKAŤ CENOVÚ PONUKU" },
    ],

    logoDesc:
      "WebOptim značka je jediný inline SVG s currentColor. Variácie vznikajú cez CSS — netreba viacero súborov. Vždy zachovajte ochrannú zónu, kontrast a proporcie.",
    logoVariants: [
      { label: "Primárna — Biela", desc: "Predvolené použitie na tmavých alebo brand pozadiach." },
      { label: "Inverzná — Čierna", desc: "Na svetlých, neutrálnych pozadiach a tlačovinách." },
      { label: "Brand — Cyan", desc: "Akcentová verzia pre hero momenty a zvýraznenia." },
      { label: "Monochromatická — Tlmená", desc: "Pre nenápadné použitie: pätičky, podpisy, vodoznaky." },
    ],
    bgVariantsLabel: "Varianty pozadia",
    bgVariants: ["Svetlý povrch", "Tmavý povrch", "Brand gradient", "Brand cyan"],
    safeSpaceLabel: "Ochranná zóna",
    safeSpaceDesc: "Minimálna ochranná zóna (x) zo všetkých strán sa rovná výške symbolu.",
    minSizeLabel: "Minimálna veľkosť",
    minSizeDesc: "Nikdy nereprodukujte logo pod 24 px v digitále, alebo 8 mm v tlači.",
    minSizeNotes: ["12px · favicon", "24px · digitálne min", "40px · predvolené"],
    correctTitle: "Správne použitie",
    incorrectTitle: "Nesprávne použitie",
    correctItems: [
      "Používajte originálne SVG a prefarbujte cez CSS currentColor",
      "Dodržujte ochrannú zónu rovnú výške symbolu",
      "Bielu na tmavom, čiernu na svetlom, cyan len ako akcent",
      "V digitále držte logo minimálne 24 px na výšku",
    ],
    incorrectItems: [
      "Neprefarbujte mimo brand palety",
      "Nepridávajte tiene, obrysy, žiary ani 3D efekty",
      "Nedeformujte, nenakláňajte, nerotujte ani neskreslujte proporcie",
      "Neumiestňujte na rušné fotografie bez plného podkladu",
    ],
    downloadSvg: "Stiahnuť SVG",

    imageryDesc:
      "Náš vizuálny svet je digitálny: žiariace gradienty, sklenené povrchy, abstraktné tvary — ľudí ukazujeme len keď si to moment zaslúži.",
    imageryCards: [
      { title: "Abstraktné a atmosférické", body: "Žiariace gule, jemné gradienty, rozostrené svetlo. Pozadia a hero vizuály." },
      { title: "Glassmorphism UI", body: "Priesvitné karty na bohatých pozadiach. Reálne screenshoty produktu, keď sú k dispozícii." },
      { title: "Skutoční ľudia", body: "Iba reálny tím. Prirodzené svetlo, neutrálne pozadia, žiadne stockové úsmevy." },
    ],
    realPeopleFallback: "Editoriálny portrét",
    moodTitle: "Nálada, svetlo a kompozícia",
    moodLabels: { mood: "Nálada", lighting: "Svetlo", framing: "Kompozícia", product: "Produktové fotky" },
    moodBodies: {
      mood: "Prémiová · futuristická · pokojná. Nikdy stockovo veselá ani firemne podaná ruka.",
      lighting: "Chladné, modrasté svetlá. Jemné žiary. Hlboké tiene. Nikdy ostrý blesk.",
      framing: "Veľkorysý prázdny priestor. Hlavný subjekt mimo stredu. Vrstvená hĺbka.",
      product: "Reálne mockupy zariadení (laptop / telefón) s jemnou perspektívou a brand žiarou.",
    },

    uiDesc: "Komponenty a spacing primitívy, ktoré musí rešpektovať každá stránka.",
    buttonsTitle: "Tlačidlá",
    buttonsLabels: {
      default: "Default — Primárna akcia",
      hero: "Hero — Marketingové CTA",
      outline: "Outline — Sekundárne",
      ghost: "Ghost — Terciárne",
    },
    buttonsNote: "Veľkosti: sm · default · lg · xl · Vždy rounded-lg alebo viac.",
    formsTitle: "Formuláre",
    formsPlaceholderEmail: "vas@email.sk",
    formsPlaceholderMsg: "Povedzte nám o svojom projekte…",
    formsNote: "Vždy explicitný success modal · Anti-spam delay 3 s · Labely nad poliami.",
    cardsTitle: "Karty",
    cardsGlassTitle: "Glass karta (predvolená)",
    cardsSolidTitle: "Plná karta",
    tokensTitle: "Tokeny",
    spacingTitle: "Spacing systém",
    spacingNote:
      "Tailwind 4px base. Väčšina komponentov používa 4 · 6 · 8 · 16 · 24. Sekcie vždy 80–112 px vertikálny rytmus.",

    socialDesc: "Tón špecifický pre kanál — rovnaký hlas, iná hlasitosť.",
    socialChannels: [
      {
        ch: "Instagram",
        tone: "Vizuálny a aspiračný",
        body: "Ukážte remeslo. Veľké vizuály, before/after webov, behind-the-scenes zo štúdia. Popisy krátke a úderné s 1–2 emoji max.",
      },
      {
        ch: "Facebook",
        tone: "Informatívny a lokálny",
        body: "Dlhšie príspevky o projektoch, míľnikoch a postrehoch z česko-slovenského trhu. Jednoduchý jazyk, konverzačný. Vyhnite sa hashtagom.",
      },
      {
        ch: "LinkedIn",
        tone: "Profesionálny a expertný",
        body: "Prípadové štúdie s reálnymi číslami, lessons learned, hiring posty. Prvá osoba od tímu. Žiadne motivačné frázy.",
      },
    ],
    adCreativeTitle: "Štýl reklamných vizuálov",
    adCreativeItems: [
      "Tmavé pozadie + signature gradient orb",
      "Headline v Outfit Bold, max 6 slov",
      "Jedno jasné CTA tlačidlo (Primary alebo Hero variant)",
      "Logo vľavo dole, malé ale čitateľné",
      "Reálny screenshot produktu, keď je relevantný",
    ],
    captionTitle: "Štýl popisov",
    captionItems: [
      "Hook v prvom riadku — žiadny rozbeh",
      "Sentence case, nie Title Case",
      'Čísla ako číslice ("3×", nie "trikrát")',
      "Zakončite jasným ďalším krokom alebo otázkou",
      "Sk/Cz popisy znejú natívne — žiadne google-translate vibes",
    ],

    positioningDesc: "Kde sa WebOptim nachádza na trhu — a prečo si ľudia vyberajú práve nás.",
    positioningCards: [
      {
        title: "Prémiové bez prepláteného",
        body: "Sme nad DIY nástrojmi (Wix, Webflow šablóny) a freelancermi — ale výrazne pod tradičnými agentúrami v cene. Náš web sám je dôkazom: seniorné remeslo viditeľné v každej interakcii.",
      },
      {
        title: "Dôveryhodní, nie nahypovaní",
        body: "Reálne Google recenzie na homepage. Menovaný tím. Multi-doménová prítomnosť (.eu / .cz / .sk). Transparentné živé ceny. Dôvera vzniká z ukazovania, nie hovorenia.",
      },
      {
        title: "Moderní, nie módni",
        body: "Glassmorphism, gradient orby a animované okraje hovoria, že staviame pre to, čo príde — nie čo bolo trendy v 2018. Ale nikdy neobetujeme zrozumiteľnosť za vizuálny gimmick.",
      },
      {
        title: "Experti, nie tajomní",
        body: "Otvorene zdieľame know-how — blog, slovník, FAQ, cenová kalkulačka zdarma. Čím viac klient rozumie, tým lepšie nakupuje.",
      },
    ],

    quickrefDesc: "Vytlačte. Pripnite. Žite podľa toho.",
    qrMissionLabel: "Misia",
    qrMissionBody: "Prémiové weby, ktoré reálne konvertujú — bez agentúrnej dane.",
    qrVoiceLabel: "Hlas v 5 slovách",
    qrVoiceBody: "Sebavedomý · priamy · moderný · užitočný · seniorný.",
    qrAlwaysLabel: "Vždy",
    qrAlways: [
      "Vedieme s výsledkom",
      "Reálne čísla",
      "CTA so slovesom",
      "Predvolene tmavá téma",
      "HSL tokeny v kóde",
    ],
    qrNeverLabel: "Nikdy",
    qrNever: [
      "Cudzie slová alebo AI klišé",
      "Stocková firemná fotografia",
      "Hard-coded farby v komponentoch",
      "Iba toast pri úspechu",
    ],
    qrColorsLabel: "Farby",
    qrTypeLabel: "Typografia",
    qrCtaLabel: "Signature CTA",
    qrCtaButton: "Získajte cenovú ponuku zdarma",
    qrCtaNote: "Hero gradient · Outfit semibold · rounded-lg",
    footer: "WebOptim Brand manuál v1.0 · 2025 · Postavený z weboptim.eu / .cz / .sk",
  },

  CZ: {
    badge: "Brand manuál · v1.0 · 2025",
    internal: "Interní · Neindexováno",
    heroTitle1: "WebOptim",
    heroTitle2: "Brand manuál",
    heroSubtitle:
      "Jediný zdroj pravdy o tom, jak WebOptim vypadá, zní a vystupuje — napříč každou webovou stránkou, reklamou, prezentací a sociálním příspěvkem.",
    printBtn: "Tisknout / Uložit jako PDF",
    startReading: "Začít číst",

    sections: {
      overview: "Přehled značky",
      audience: "Cílová skupina",
      voice: "Tón komunikace",
      visual: "Vizuální identita",
      typography: "Typografie",
      logo: "Pravidla loga",
      imagery: "Fotografie a vizuál",
      ui: "Pravidla UI / web designu",
      social: "Sociální sítě",
      positioning: "Pozice vůči konkurenci",
      quickref: "Rychlá reference",
    },
    eyebrows: {
      overview: "01 · Základ",
      audience: "02 · Lidé",
      voice: "03 · Hlas",
      visual: "04 · Vizuál",
      typography: "05 · Typografie",
      logo: "06 · Logo",
      imagery: "07 · Vizuál",
      ui: "08 · UI",
      social: "09 · Social",
      positioning: "10 · Pozice",
      quickref: "11 · Cheat sheet",
    },

    overviewDesc:
      "Kdo jsme, proč existujeme a jak vystupujeme. Každá komunikace by měla vycházet z těchto základů.",
    mission: {
      title: "Mise",
      body:
        "Pomáháme ambiciózním firmám vyhrávat online — rychlými, krásně navrženými weby, e-shopy a digitálním růstem, který skutečně konvertuje. Nahrazujeme agenturní byrokracii seniorním řemeslem, měřitelnými výsledky a nulovým třením.",
    },
    vision: {
      title: "Vize",
      body:
        "Stát se nejdůvěryhodnějším digitálním partnerem pro malé a střední firmy ve střední Evropě — studiem, které týmy volají, když web musí výkonně fungovat, nejen vypadat.",
    },
    coreValuesTitle: "Hlavní hodnoty",
    coreValues: [
      { t: "Rychlost", d: "Rychlé dodání, rychlé weby, rychlé odpovědi. Čas je skutečná měna." },
      { t: "Řemeslo", d: "Seniorní úroveň provedení. Žádní junioři, kteří se učí na klientovi." },
      { t: "Transparentnost", d: "Jasné ceny, čestné termíny, žádná cizí slova k nafouknutí rozsahu." },
      { t: "Výsledky", d: "Měříme to, na čem záleží: konverze, tržby, organický růst." },
    ],
    personalityTitle: "Osobnost značky",
    personalityTags: ["Sebejistá", "Pragmatická", "Moderní", "Přímá", "Užitečná", "Seniorní", "Nadčasová"],
    personalityBody:
      "Zníme jako seniorní konzultant — ne přehnaně nadšený stážista, ne firemní brožura. Jsme klidní, techničtí a mírně odvážní. Používáme moderní vizuál (glassmorphism, zářící gradienty), protože stavíme pro klienty, kteří chtějí hledět dopředu, ne dozadu.",
    uspTitle: "Jedinečná hodnotová nabídka",
    uspTagline: "Prémiové weby bez agenturní daně.",
    uspPoints: [
      "Seniorní tým, žádní account manažeři jako mezičlánek",
      "Připraveno pro více domén a jazyků (EU/CZ/SK)",
      "Stack zaměřený na výkon (React, edge, reálné Core Web Vitals)",
      "Transparentní ceny přes živý online konfigurátor",
    ],

    audienceDesc:
      "Nemluvíme s každým. Když přesně víme, komu sloužíme, naše komunikace je ostřejší a design rozhodnější.",
    personas: [
      {
        name: "Ambiciózní zakladatel",
        age: "30–45",
        role: "Majitel / CEO firmy s 5–50 lidmi",
        quote: "Potřebuji web, který prodává — ne takový, co jen existuje.",
        goalsLabel: "Hlavní cíle",
        goals: [
          "Generovat kvalifikované leady",
          "Působit stejně vážně jako větší konkurenti",
          "Přestat ztrácet obchody kvůli špatnému prvnímu dojmu",
        ],
      },
      {
        name: "Interní marketér",
        age: "28–40",
        role: "Marketing manažer / Head of Growth",
        quote: "Potřebuji partnera, který drží krok s mými kampaněmi.",
        goalsLabel: "Hlavní cíle",
        goals: [
          "Rychlejší landing pages pro placenou reklamu",
          "SEO, které se dlouhodobě zúročí",
          "Vývojářský tým, který dodá ve dnech, ne měsících",
        ],
      },
      {
        name: "Provozovatel e-shopu",
        age: "25–50",
        role: "Majitel e-shopu, který přerůstá šablonové platformy",
        quote: "Moje platforma je moje brzda.",
        goalsLabel: "Hlavní cíle",
        goals: [
          "Vyšší míra konverze",
          "Lepší mobilní UX",
          "Vlastní funkce bez enterprise cen",
        ],
      },
    ],
    painTitle: "Bolestivé body",
    pain: [
      "Pomalé, zastaralé weby, které ztrácí konverze",
      "Agentury, které slibují hodně a dodávají málo",
      "Skryté náklady a nekonečné změnové požadavky",
      "Žádná jasnost, co se vlastně staví",
      "DIY nástroje, které narazí na strop při růstu",
    ],
    outcomesTitle: "Žádané výsledky",
    outcomes: [
      "Web, který se načte okamžitě a má pozice",
      "Více kvalifikovaných leadů ve schránce",
      "Vyšší konverze ze stávající návštěvnosti",
      "Brand, který odpovídá jejich ambicím",
      "Dlouhodobý partner, ne jednorázový dodavatel",
    ],
    motivationsTitle: "Motivace při nákupu",
    motivations: [
      "Důvěra — viditelné portfolio, reálné recenze, jmenovaný tým",
      "Rychlost — jasný harmonogram, rychlá první odpověď",
      "Transparentnost — živý konfigurátor, fixní cenové nabídky",
      "Expertíza — seniorní řemeslo viditelné přímo na webu",
      "Důkaz ROI — měřitelné případové studie",
    ],

    voiceDesc: "Jak WebOptim zní v psaní — od headlinů po podpůrné e-maily.",
    voiceCards: [
      {
        t: "Komunikační styl",
        d: "Přímý, sebejistý, užitečný. Vedeme s výsledkem, pak vysvětlujeme jak. Hodnotu nikdy nepohřbíváme pod cizími slovy.",
      },
      {
        t: "Slovník",
        d: "Moderní, mírně technický, srozumitelný. Používáme reálné pojmy (Core Web Vitals, míra konverze, edge hosting) — vysvětlujeme je jen když je třeba. Žádná firemní vata (synergie, leverage, holistický).",
      },
      {
        t: "Styl vět",
        d: "Krátké a rytmické. Mícháme údernou 4-slovní větu s delšími vysvětleními. Aktivní rod. Jedna myšlenka na větu.",
      },
      {
        t: "Emocionální tón",
        d: "Klidná sebejistota s jiskrou nadšení. Jsme seniorní profík, který viděl všechno — ale stále upřímně miluje dobrou práci.",
      },
    ],
    doTitle: "Děláme",
    dontTitle: "Neděláme",
    doItems: [
      'Vedeme s výsledkem: „Rychlejší weby. Více konverzí."',
      "Používáme konkrétní čísla (3×, 90+ PageSpeed, 14 dní)",
      "Oslovujeme čtenáře jako „vy"",
      "CTA se slovesem: „Získejte cenovou nabídku", „Podívejte se na naše práce"",
      "České/slovenské idiomy zní přirozeně — nikdy strojový překlad",
    ],
    dontItems: [
      "Nepoužíváme „světová úroveň", „best-in-class", „cutting-edge"",
      "Nepoužíváme vykřičníky k předstírání nadšení!!!",
      "Nepoužíváme AI fráze („V dnešním digitálním světě…")",
      "O sobě nemluvíme ve třetí osobě na webu",
      "Neslibujeme to, co neumíme změřit",
    ],
    examplesTitle: "Příklady headlinů a CTA",
    headlinesLabel: "Headliny",
    ctasLabel: "CTA",
    exampleHeadlines: [
      "Prémiové weby. Bez agenturní daně.",
      "Váš web by měl prodávat — nejen existovat.",
      "Od nápadu ke spuštění za 14 dní.",
      "Stavěné na rychlost. Inženýrované na konverze.",
    ],
    exampleCtas: ["Získejte cenovou nabídku zdarma", "Podívejte se na naše práce", "Spustit projekt", "Vypočítat cenu"],

    visualDesc:
      "Přesná paleta z našich živých design tokenů. V kódu vždy používejte HSL proměnné; HEX je pro externí nástroje (Figma, tisk, reklamy).",
    primaryLabel: "Primární",
    secondaryLabel: "Sekundární a akcenty",
    surfacesLabel: "Povrchy",
    textBordersLabel: "Text a okraje",
    signatureGradientsLabel: "Signature gradienty",
    heroGradientName: "Hero gradient",
    heroGradientUse: "Hero tlačítka · klíčové brand momenty · marketingové vizuály",
    primaryGradientName: "Primární gradient",
    primaryGradientUse: "Text gradienty · pozadí ikon · jemné CTA",

    colorRoles: {
      primary: "Primární brand barva · CTA · zvýraznění",
      secondary: "Sekundární akce · odkazy · akcenty",
      purple: "Gradientový akcent · zářící efekty",
      pink: "Závěr hero gradientu · marketingové akcenty",
      background: "Primární pozadí · tmavé plátno",
      card: "Karty · vyzdvižené povrchy",
      muted: "Inputy · okraje · jemná pozadí",
      foreground: "Primární text · nadpisy",
      mutedFg: "Sekundární text · popisy",
      border: "Oddělení · okraje karet",
    },

    typographyDesc: "Dva fonty. Jasná hierarchie. Načteno s display=swap pro výkon.",
    displayFontLabel: "Display font",
    bodyFontLabel: "Body font",
    displayFontDesc:
      "Všechny nadpisy (H1–H6) · hero copy · velká čísla. Moderní geometrický sans, mírně zaoblený.",
    bodyFontDesc: "Body copy · UI labely · drobné texty. Charakteristický, ale skvěle čitelný v malých velikostech.",
    typeScaleTitle: "Typografická škála",
    typeScale: [
      { tag: "H1", sample: "Prémiové weby." },
      { tag: "H2", sample: "Co stavíme" },
      { tag: "H3", sample: "Název služby" },
      { tag: "H4", sample: "Nadpis karty" },
      { tag: "Body L", sample: "Delší odstavcový text na službách a případových studiích." },
      { tag: "Body", sample: "Výchozí text odstavce — tahoun téměř všeho." },
      { tag: "Small", sample: "Popisky, labely, sekundární informace." },
      { tag: "Button", sample: "ZÍSKAT CENOVOU NABÍDKU" },
    ],

    logoDesc:
      "WebOptim značka je jediný inline SVG s currentColor. Variace vznikají přes CSS — netřeba více souborů. Vždy zachovejte ochrannou zónu, kontrast a proporce.",
    logoVariants: [
      { label: "Primární — Bílá", desc: "Výchozí použití na tmavých nebo brand pozadích." },
      { label: "Inverzní — Černá", desc: "Na světlých, neutrálních pozadích a tiskovinách." },
      { label: "Brand — Cyan", desc: "Akcentová verze pro hero momenty a zvýraznění." },
      { label: "Monochromatická — Tlumená", desc: "Pro nenápadné použití: patičky, podpisy, vodoznaky." },
    ],
    bgVariantsLabel: "Varianty pozadí",
    bgVariants: ["Světlý povrch", "Tmavý povrch", "Brand gradient", "Brand cyan"],
    safeSpaceLabel: "Ochranná zóna",
    safeSpaceDesc: "Minimální ochranná zóna (x) ze všech stran se rovná výšce symbolu.",
    minSizeLabel: "Minimální velikost",
    minSizeDesc: "Nikdy nereprodukujte logo pod 24 px v digitálu, nebo 8 mm v tisku.",
    minSizeNotes: ["12px · favicon", "24px · digitální min", "40px · výchozí"],
    correctTitle: "Správné použití",
    incorrectTitle: "Nesprávné použití",
    correctItems: [
      "Používejte originální SVG a přebarvujte přes CSS currentColor",
      "Dodržujte ochrannou zónu rovnou výšce symbolu",
      "Bílou na tmavém, černou na světlém, cyan jen jako akcent",
      "V digitálu držte logo minimálně 24 px na výšku",
    ],
    incorrectItems: [
      "Nepřebarvujte mimo brand paletu",
      "Nepřidávejte stíny, obrysy, záře ani 3D efekty",
      "Nedeformujte, nenaklánějte, nerotujte ani nezkreslujte proporce",
      "Neumísťujte na rušné fotografie bez plného podkladu",
    ],
    downloadSvg: "Stáhnout SVG",

    imageryDesc:
      "Náš vizuální svět je digitální: zářící gradienty, skleněné povrchy, abstraktní tvary — lidi ukazujeme jen když si to moment zaslouží.",
    imageryCards: [
      { title: "Abstraktní a atmosférické", body: "Zářící koule, jemné gradienty, rozostřené světlo. Pozadí a hero vizuály." },
      { title: "Glassmorphism UI", body: "Průsvitné karty na bohatých pozadích. Reálné screenshoty produktu, když jsou k dispozici." },
      { title: "Skuteční lidé", body: "Pouze reálný tým. Přirozené světlo, neutrální pozadí, žádné stockové úsměvy." },
    ],
    realPeopleFallback: "Editoriální portrét",
    moodTitle: "Nálada, světlo a kompozice",
    moodLabels: { mood: "Nálada", lighting: "Světlo", framing: "Kompozice", product: "Produktové fotky" },
    moodBodies: {
      mood: "Prémiová · futuristická · klidná. Nikdy stockově veselá ani firemně podaná ruka.",
      lighting: "Chladná, namodralá světla. Jemné záře. Hluboké stíny. Nikdy ostrý blesk.",
      framing: "Velkorysý prázdný prostor. Hlavní subjekt mimo střed. Vrstvená hloubka.",
      product: "Reálné mockupy zařízení (laptop / telefon) s jemnou perspektivou a brand září.",
    },

    uiDesc: "Komponenty a spacing primitivy, které musí respektovat každá stránka.",
    buttonsTitle: "Tlačítka",
    buttonsLabels: {
      default: "Default — Primární akce",
      hero: "Hero — Marketingové CTA",
      outline: "Outline — Sekundární",
      ghost: "Ghost — Terciární",
    },
    buttonsNote: "Velikosti: sm · default · lg · xl · Vždy rounded-lg nebo více.",
    formsTitle: "Formuláře",
    formsPlaceholderEmail: "vas@email.cz",
    formsPlaceholderMsg: "Řekněte nám o svém projektu…",
    formsNote: "Vždy explicitní success modal · Anti-spam delay 3 s · Labely nad poli.",
    cardsTitle: "Karty",
    cardsGlassTitle: "Glass karta (výchozí)",
    cardsSolidTitle: "Plná karta",
    tokensTitle: "Tokeny",
    spacingTitle: "Spacing systém",
    spacingNote:
      "Tailwind 4px base. Většina komponent používá 4 · 6 · 8 · 16 · 24. Sekce vždy 80–112 px vertikální rytmus.",

    socialDesc: "Tón specifický pro kanál — stejný hlas, jiná hlasitost.",
    socialChannels: [
      {
        ch: "Instagram",
        tone: "Vizuální a aspirativní",
        body: "Ukažte řemeslo. Velké vizuály, before/after webů, behind-the-scenes ze studia. Popisy krátké a úderné s 1–2 emoji max.",
      },
      {
        ch: "Facebook",
        tone: "Informativní a lokální",
        body: "Delší příspěvky o projektech, milnících a postřezích z česko-slovenského trhu. Jednoduchý jazyk, konverzační. Vyhněte se hashtagům.",
      },
      {
        ch: "LinkedIn",
        tone: "Profesionální a expertní",
        body: "Případové studie s reálnými čísly, lessons learned, hiring posty. První osoba od týmu. Žádné motivační fráze.",
      },
    ],
    adCreativeTitle: "Styl reklamních vizuálů",
    adCreativeItems: [
      "Tmavé pozadí + signature gradient orb",
      "Headline v Outfit Bold, max 6 slov",
      "Jedno jasné CTA tlačítko (Primary nebo Hero variant)",
      "Logo vlevo dole, malé ale čitelné",
      "Reálný screenshot produktu, když je relevantní",
    ],
    captionTitle: "Styl popisů",
    captionItems: [
      "Hook v prvním řádku — žádný rozjezd",
      "Sentence case, ne Title Case",
      'Čísla jako číslice ("3×", ne "třikrát")',
      "Zakončete jasným dalším krokem nebo otázkou",
      "Cz/Sk popisy zní nativně — žádné google-translate vibes",
    ],

    positioningDesc: "Kde se WebOptim nachází na trhu — a proč si lidé vybírají právě nás.",
    positioningCards: [
      {
        title: "Prémiové bez přeplaceného",
        body: "Jsme nad DIY nástroji (Wix, Webflow šablony) a freelancery — ale výrazně pod tradičními agenturami v ceně. Náš web sám je důkazem: seniorní řemeslo viditelné v každé interakci.",
      },
      {
        title: "Důvěryhodní, ne nahypovaní",
        body: "Reálné Google recenze na homepage. Jmenovaný tým. Multi-doménová přítomnost (.eu / .cz / .sk). Transparentní živé ceny. Důvěra vzniká z ukazování, ne mluvení.",
      },
      {
        title: "Moderní, ne módní",
        body: "Glassmorphism, gradient orby a animované okraje říkají, že stavíme pro to, co přijde — ne co bylo trendy v 2018. Ale nikdy neobětujeme srozumitelnost za vizuální gimmick.",
      },
      {
        title: "Experti, ne tajemní",
        body: "Otevřeně sdílíme know-how — blog, slovník, FAQ, cenová kalkulačka zdarma. Čím více klient rozumí, tím lépe nakupuje.",
      },
    ],

    quickrefDesc: "Vytiskněte. Připněte. Žijte podle toho.",
    qrMissionLabel: "Mise",
    qrMissionBody: "Prémiové weby, které reálně konvertují — bez agenturní daně.",
    qrVoiceLabel: "Hlas v 5 slovech",
    qrVoiceBody: "Sebejistý · přímý · moderní · užitečný · seniorní.",
    qrAlwaysLabel: "Vždy",
    qrAlways: [
      "Vedeme s výsledkem",
      "Reálná čísla",
      "CTA se slovesem",
      "Výchozí tmavá téma",
      "HSL tokeny v kódu",
    ],
    qrNeverLabel: "Nikdy",
    qrNever: [
      "Cizí slova nebo AI klišé",
      "Stocková firemní fotografie",
      "Hard-coded barvy v komponentech",
      "Pouze toast při úspěchu",
    ],
    qrColorsLabel: "Barvy",
    qrTypeLabel: "Typografie",
    qrCtaLabel: "Signature CTA",
    qrCtaButton: "Získejte cenovou nabídku zdarma",
    qrCtaNote: "Hero gradient · Outfit semibold · rounded-lg",
    footer: "WebOptim Brand manuál v1.0 · 2025 · Postavený z weboptim.eu / .cz / .sk",
  },
};
