import { useState } from "react";
import {
  Sparkles,
  Target,
  Eye,
  Heart,
  Users,
  MessageSquare,
  Palette,
  Type,
  Image as ImageIcon,
  Layout,
  Share2,
  Trophy,
  Check,
  X,
  Printer,
  Copy,
  ChevronRight,
} from "lucide-react";
import logoFull from "@/assets/logo-weboptim-full.svg";
import logoMark from "@/assets/logo-weboptim.svg";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";

/**
 * Hidden brand manual page — not linked anywhere, noindex.
 * Access via /brand-manual.
 * Built using actual website design tokens (index.css) and copy.
 */

type Section = {
  id: string;
  title: string;
  icon: typeof Sparkles;
};

const sections: Section[] = [
  { id: "overview", title: "Brand Overview", icon: Sparkles },
  { id: "audience", title: "Audience", icon: Users },
  { id: "voice", title: "Tone of Voice", icon: MessageSquare },
  { id: "visual", title: "Visual Identity", icon: Palette },
  { id: "typography", title: "Typography", icon: Type },
  { id: "logo", title: "Logo Guidelines", icon: ImageIcon },
  { id: "imagery", title: "Photography & Imagery", icon: ImageIcon },
  { id: "ui", title: "UI / Web Design Rules", icon: Layout },
  { id: "social", title: "Social Media", icon: Share2 },
  { id: "positioning", title: "Competitor Positioning", icon: Trophy },
  { id: "quickref", title: "Quick Reference Sheet", icon: ChevronRight },
];

// Actual brand colors from src/index.css (HSL → HEX equivalents)
const brandColors = {
  primary: { name: "Cyan", hsl: "hsl(193 88% 61%)", hex: "#42C8F2", role: "Primary brand color · CTAs · highlights" },
  secondary: { name: "Brand Blue", hsl: "hsl(210 60% 55%)", hex: "#4F8DD1", role: "Secondary actions · links · accents" },
  purple: { name: "Brand Purple", hsl: "hsl(270 50% 55%)", hex: "#7B5BBF", role: "Gradient accent · glow effects" },
  pink: { name: "Magenta Accent", hsl: "hsl(320 70% 55%)", hex: "#D946A6", role: "Hero gradient end · marketing accents" },
  background: { name: "Deep Navy", hsl: "hsl(230 35% 7%)", hex: "#0B0E1A", role: "Primary background · dark canvas" },
  card: { name: "Card Surface", hsl: "hsl(230 35% 10%)", hex: "#11151F", role: "Cards · elevated surfaces" },
  muted: { name: "Muted Surface", hsl: "hsl(230 30% 15%)", hex: "#1B1F2E", role: "Inputs · borders · subtle backgrounds" },
  foreground: { name: "Off-White", hsl: "hsl(210 40% 98%)", hex: "#F8FAFC", role: "Primary text · headings" },
  mutedFg: { name: "Muted Text", hsl: "hsl(220 15% 65%)", hex: "#9BA3B5", role: "Secondary text · descriptions" },
  border: { name: "Border", hsl: "hsl(230 30% 18%)", hex: "#23283A", role: "Dividers · card borders" },
};

const Swatch = ({ name, hex, hsl, role }: { name: string; hex: string; hsl: string; role: string }) => {
  const [copied, setCopied] = useState(false);
  const copy = (txt: string) => {
    navigator.clipboard.writeText(txt);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };
  return (
    <div className="glass rounded-2xl overflow-hidden hover:border-primary/30 transition-all">
      <div
        className="h-28 w-full relative"
        style={{ backgroundColor: hex }}
      >
        <button
          onClick={() => copy(hex)}
          className="absolute top-2 right-2 px-2 py-1 rounded-md bg-black/40 backdrop-blur text-xs text-white flex items-center gap-1 hover:bg-black/60 transition no-print"
        >
          <Copy className="w-3 h-3" />
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <div className="p-4">
        <div className="font-display font-semibold text-foreground">{name}</div>
        <div className="font-mono text-xs text-muted-foreground mt-1">{hex.toUpperCase()}</div>
        <div className="font-mono text-xs text-muted-foreground">{hsl}</div>
        <div className="text-xs text-muted-foreground mt-2">{role}</div>
      </div>
    </div>
  );
};

const SectionHeader = ({ icon: Icon, eyebrow, title, description }: { icon: typeof Sparkles; eyebrow: string; title: string; description?: string }) => (
  <div className="mb-10">
    <div className="flex items-center gap-2 mb-3">
      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-medium tracking-wider uppercase text-primary">
        <Icon className="w-3.5 h-3.5" />
        {eyebrow}
      </span>
    </div>
    <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">
      {title.split(" ").map((w, i, arr) =>
        i === arr.length - 1 ? (
          <span key={i} className="text-gradient">{w}</span>
        ) : (
          <span key={i}>{w} </span>
        )
      )}
    </h2>
    {description && (
      <p className="text-muted-foreground text-lg max-w-3xl leading-relaxed">{description}</p>
    )}
  </div>
);

const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`glass rounded-2xl p-6 hover:border-primary/30 transition-all ${className}`}>
    {children}
  </div>
);

const Pill = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
    {children}
  </span>
);

const BrandManual = () => {
  const handlePrint = () => window.print();

  return (
    <>
      <SEO
        title="WebOptim — Brand Manual"
        description="Internal brand manual"
        noindex
      />

      <style>{`
        @media print {
          .no-print { display: none !important; }
          body { background: white !important; }
          section { break-inside: avoid; }
        }
      `}</style>

      <div className="min-h-screen bg-background">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-primary/20 blur-[120px]" />
            <div className="absolute -bottom-32 -right-32 w-[600px] h-[600px] rounded-full bg-purple-500/15 blur-[120px]" />
          </div>

          <div className="container mx-auto px-6 relative z-10 py-20 md:py-28">
            <div className="flex items-center gap-2 mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-medium tracking-wider uppercase text-primary">
                <Sparkles className="w-3.5 h-3.5" />
                Brand Manual · v1.0 · 2025
              </span>
              <span className="no-print inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-destructive/10 text-destructive border border-destructive/20">
                Internal · Not Indexed
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
              <span className="text-gradient">WebOptim</span>
              <br />
              Brand Guidelines
            </h1>

            <p className="text-muted-foreground text-xl max-w-2xl leading-relaxed mb-10">
              The single source of truth for how WebOptim looks, sounds and behaves —
              across every website, ad, deck and social post.
            </p>

            <div className="flex flex-wrap gap-3 no-print">
              <Button onClick={handlePrint} size="lg" className="gap-2">
                <Printer className="w-4 h-4" />
                Print / Save as PDF
              </Button>
              <a href="#overview">
                <Button variant="outline" size="lg" className="gap-2">
                  Start reading <ChevronRight className="w-4 h-4" />
                </Button>
              </a>
            </div>

            {/* TOC */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {sections.map((s, i) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="glass rounded-xl p-3 flex items-center gap-3 hover:border-primary/40 transition group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <div className="text-sm">
                      <div className="text-xs text-muted-foreground">{String(i + 1).padStart(2, "0")}</div>
                      <div className="font-medium text-foreground leading-tight">{s.title}</div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        <div className="container mx-auto px-6 py-20 space-y-32">
          {/* 1. BRAND OVERVIEW */}
          <section id="overview">
            <SectionHeader
              icon={Sparkles}
              eyebrow="01 · Foundation"
              title="Brand Overview"
              description="Who we are, why we exist, and how we show up. Every piece of communication should ladder back to these foundations."
            />

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-display font-semibold mb-3">Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To help ambitious businesses win online — through fast, beautifully engineered
                  websites, e-shops and digital growth that actually convert. We replace agency
                  bloat with senior craft, measurable results and zero friction.
                </p>
              </Card>

              <Card>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-display font-semibold mb-3">Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To become the most trusted digital partner for SMEs across Central Europe —
                  the studio teams call when their website has to perform, not just look pretty.
                </p>
              </Card>

              <Card className="md:col-span-2">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-display font-semibold mb-4">Core Values</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    { t: "Speed", d: "Fast delivery, fast websites, fast replies. Time is the real currency." },
                    { t: "Craft", d: "Senior-level execution. No juniors learning on the client's dime." },
                    { t: "Transparency", d: "Clear pricing, honest timelines, no jargon used to inflate scope." },
                    { t: "Results", d: "We measure what matters: conversions, revenue, organic growth." },
                  ].map((v) => (
                    <div key={v.t} className="rounded-xl border border-border/60 bg-muted/30 p-4">
                      <div className="font-display font-semibold text-foreground mb-1">{v.t}</div>
                      <div className="text-sm text-muted-foreground">{v.d}</div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card>
                <h3 className="text-xl font-display font-semibold mb-4">Brand Personality</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["Confident", "Pragmatic", "Modern", "Direct", "Helpful", "Senior", "Future-forward"].map((p) => (
                    <Pill key={p}>{p}</Pill>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We sound like a senior consultant — not an over-eager intern, not a corporate brochure.
                  We are calm, technical, and slightly bold. We use modern visuals (glassmorphism,
                  glowing gradients) because we build for clients who want to look ahead, not behind.
                </p>
              </Card>

              <Card>
                <h3 className="text-xl font-display font-semibold mb-4">Unique Selling Proposition</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <span className="text-foreground font-medium">"Premium websites without the agency tax."</span>
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {[
                    "Senior team, no account-manager middlemen",
                    "Multi-domain, multi-language ready (EU/CZ/SK)",
                    "Performance-first stack (React, edge, real Core Web Vitals scores)",
                    "Transparent pricing via live online configurator",
                  ].map((x) => (
                    <li key={x} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      {x}
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </section>

          {/* 2. AUDIENCE */}
          <section id="audience">
            <SectionHeader
              icon={Users}
              eyebrow="02 · People"
              title="Audience"
              description="We don't talk to everyone. Knowing exactly who we serve makes our copy sharper and our design more decisive."
            />

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                {
                  name: "The Ambitious Founder",
                  age: "30–45",
                  role: "Owner / CEO of a 5–50 person company",
                  quote: "I need a website that sells, not just exists.",
                  goals: ["Generate qualified leads", "Look as serious as bigger competitors", "Stop losing deals to a bad first impression"],
                },
                {
                  name: "The In-house Marketer",
                  age: "28–40",
                  role: "Marketing Manager / Head of Growth",
                  quote: "I need a partner who can keep up with my campaigns.",
                  goals: ["Faster landing pages for paid ads", "SEO that compounds", "A dev team that ships in days, not months"],
                },
                {
                  name: "The E-commerce Operator",
                  age: "25–50",
                  role: "Shop owner scaling beyond template platforms",
                  quote: "My platform is the bottleneck.",
                  goals: ["Higher conversion rate", "Better mobile UX", "Custom features without enterprise prices"],
                },
              ].map((p) => (
                <Card key={p.name}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center text-primary-foreground font-display font-bold">
                      {p.name.split(" ").slice(-1)[0][0]}
                    </div>
                    <div>
                      <div className="font-display font-semibold">{p.name}</div>
                      <div className="text-xs text-muted-foreground">{p.age} · {p.role}</div>
                    </div>
                  </div>
                  <blockquote className="text-sm italic text-muted-foreground border-l-2 border-primary/40 pl-3 mb-4">
                    "{p.quote}"
                  </blockquote>
                  <div className="text-xs uppercase tracking-wider text-primary mb-2 font-medium">Top goals</div>
                  <ul className="space-y-1.5 text-sm text-muted-foreground">
                    {p.goals.map((g) => (
                      <li key={g} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                        {g}
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <h3 className="font-display font-semibold mb-3 text-foreground">Pain Points</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {[
                    "Slow, outdated websites that leak conversions",
                    "Agencies that overpromise and underdeliver",
                    "Hidden costs and never-ending change requests",
                    "No clarity on what's actually being built",
                    "DIY tools that hit a wall once they grow",
                  ].map((x) => <li key={x} className="flex gap-2"><X className="w-4 h-4 text-destructive mt-0.5 shrink-0" />{x}</li>)}
                </ul>
              </Card>
              <Card>
                <h3 className="font-display font-semibold mb-3 text-foreground">Desired Outcomes</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {[
                    "A site that loads instantly and ranks",
                    "More qualified leads in the inbox",
                    "Higher conversion rate from existing traffic",
                    "A brand presence that matches their ambition",
                    "A long-term partner, not a one-off vendor",
                  ].map((x) => <li key={x} className="flex gap-2"><Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />{x}</li>)}
                </ul>
              </Card>
              <Card>
                <h3 className="font-display font-semibold mb-3 text-foreground">Buying Motivations</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {[
                    "Trust — visible portfolio, real reviews, named team",
                    "Speed — clear timeline, fast first reply",
                    "Transparency — live configurator, fixed quotes",
                    "Expertise — senior craft visible on the site itself",
                    "ROI proof — measurable case studies",
                  ].map((x) => <li key={x} className="flex gap-2"><ChevronRight className="w-4 h-4 text-primary mt-0.5 shrink-0" />{x}</li>)}
                </ul>
              </Card>
            </div>
          </section>

          {/* 3. TONE OF VOICE */}
          <section id="voice">
            <SectionHeader
              icon={MessageSquare}
              eyebrow="03 · Voice"
              title="Tone of Voice"
              description="How WebOptim sounds in writing — from website headlines to support emails."
            />

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {[
                { t: "Communication style", d: "Direct, confident, helpful. We lead with the outcome, then explain the how. We never bury the value under buzzwords." },
                { t: "Vocabulary style", d: "Modern, slightly technical, plain-spoken. Use real terms (Core Web Vitals, conversion rate, edge hosting) — explain them only when needed. No corporate fluff (synergy, leverage, holistic)." },
                { t: "Sentence style", d: "Short and rhythmic. Mix punchy 4-word lines with longer explanations. Active voice. One idea per sentence." },
                { t: "Emotional tone", d: "Calm confidence with a spark of excitement. We're the senior pro who has seen it all — but still genuinely loves shipping great work." },
              ].map((x) => (
                <Card key={x.t}>
                  <h3 className="font-display font-semibold text-foreground mb-2">{x.t}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{x.d}</p>
                </Card>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="border-primary/20">
                <h3 className="font-display font-semibold text-primary mb-4 flex items-center gap-2">
                  <Check className="w-5 h-5" /> Do
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {[
                    'Lead with results: "Faster sites. More conversions."',
                    "Use specific numbers (3x, 90+ PageSpeed, 14 days)",
                    "Address the reader as 'you'",
                    "Keep CTAs verb-led: 'Get your quote', 'See our work'",
                    "Use Slovak/Czech idioms naturally — never machine-translated",
                  ].map((x) => <li key={x} className="flex gap-2"><Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />{x}</li>)}
                </ul>
              </Card>
              <Card className="border-destructive/20">
                <h3 className="font-display font-semibold text-destructive mb-4 flex items-center gap-2">
                  <X className="w-5 h-5" /> Don't
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {[
                    "Don't say 'world-class', 'best-in-class', 'cutting-edge'",
                    "Don't use exclamation marks to fake enthusiasm!!!",
                    "Don't use AI-sounding phrases ('In today's digital landscape…')",
                    "Don't speak about ourselves in third person on the site",
                    "Don't promise what we can't measure",
                  ].map((x) => <li key={x} className="flex gap-2"><X className="w-4 h-4 text-destructive mt-0.5 shrink-0" />{x}</li>)}
                </ul>
              </Card>
            </div>

            <Card>
              <h3 className="font-display font-semibold text-foreground mb-4">Example headlines & CTAs</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="text-xs uppercase tracking-wider text-primary font-medium">Headlines</div>
                  {[
                    "Premium websites. Without the agency tax.",
                    "Your website should sell — not just exist.",
                    "From idea to launch in 14 days.",
                    "Built for speed. Engineered for conversions.",
                  ].map((x) => (
                    <div key={x} className="rounded-lg border border-border bg-muted/30 p-3 font-display text-foreground">
                      {x}
                    </div>
                  ))}
                </div>
                <div className="space-y-3">
                  <div className="text-xs uppercase tracking-wider text-primary font-medium">CTAs</div>
                  {[
                    "Get your free quote",
                    "See our work",
                    "Start your project",
                    "Calculate your price",
                  ].map((x) => (
                    <div key={x} className="rounded-lg border border-border bg-muted/30 p-3 font-mono text-sm text-foreground">
                      {x}
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </section>

          {/* 4. VISUAL IDENTITY — COLORS */}
          <section id="visual">
            <SectionHeader
              icon={Palette}
              eyebrow="04 · Visual"
              title="Visual Identity — Colors"
              description="The exact palette pulled from our live design tokens. Always use HSL variables in code; HEX is for external tools (Figma, print, ads)."
            />

            <div className="mb-6">
              <h3 className="font-display font-semibold text-foreground mb-4 text-lg">Primary</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <Swatch {...brandColors.primary} />
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-display font-semibold text-foreground mb-4 text-lg">Secondary & Accents</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <Swatch {...brandColors.secondary} />
                <Swatch {...brandColors.purple} />
                <Swatch {...brandColors.pink} />
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-display font-semibold text-foreground mb-4 text-lg">Surfaces</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <Swatch {...brandColors.background} />
                <Swatch {...brandColors.card} />
                <Swatch {...brandColors.muted} />
              </div>
            </div>

            <div className="mb-10">
              <h3 className="font-display font-semibold text-foreground mb-4 text-lg">Text & Borders</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <Swatch {...brandColors.foreground} />
                <Swatch {...brandColors.mutedFg} />
                <Swatch {...brandColors.border} />
              </div>
            </div>

            {/* Gradients */}
            <h3 className="font-display font-semibold text-foreground mb-4 text-lg">Signature Gradients</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <Card className="overflow-hidden p-0">
                <div className="h-32 bg-gradient-hero" />
                <div className="p-4">
                  <div className="font-display font-semibold">Hero Gradient</div>
                  <div className="font-mono text-xs text-muted-foreground mt-1">
                    linear-gradient(135deg, #42C8F2 → #5B9BFF → #9B7BFF → #D946A6)
                  </div>
                  <div className="text-xs text-muted-foreground mt-2">Hero buttons · key brand moments · marketing artwork</div>
                </div>
              </Card>
              <Card className="overflow-hidden p-0">
                <div className="h-32 bg-gradient-primary" />
                <div className="p-4">
                  <div className="font-display font-semibold">Primary Gradient</div>
                  <div className="font-mono text-xs text-muted-foreground mt-1">
                    linear-gradient(135deg, #42C8F2 → #4F8DD1)
                  </div>
                  <div className="text-xs text-muted-foreground mt-2">Text gradients · icon backgrounds · subtle CTAs</div>
                </div>
              </Card>
            </div>
          </section>

          {/* 5. TYPOGRAPHY */}
          <section id="typography">
            <SectionHeader
              icon={Type}
              eyebrow="05 · Typography"
              title="Typography System"
              description="Two fonts. Clear hierarchy. Loaded with display=swap for performance."
            />

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card>
                <div className="text-xs uppercase tracking-wider text-primary font-medium mb-2">Display font</div>
                <div className="font-display text-5xl mb-2">Outfit</div>
                <div className="text-sm text-muted-foreground">
                  All headings (H1–H6) · hero copy · large numbers. Modern geometric sans, slightly rounded.
                </div>
              </Card>
              <Card>
                <div className="text-xs uppercase tracking-wider text-primary font-medium mb-2">Body font</div>
                <div className="font-body text-5xl mb-2">Space Grotesk</div>
                <div className="text-sm text-muted-foreground">
                  Body copy · UI labels · small print. Distinctive but highly legible at small sizes.
                </div>
              </Card>
            </div>

            <Card>
              <h3 className="font-display font-semibold text-foreground mb-6">Type scale</h3>
              <div className="space-y-4">
                {[
                  { tag: "H1", size: "text-5xl md:text-7xl", weight: "font-bold", sample: "Premium websites." },
                  { tag: "H2", size: "text-3xl md:text-4xl", weight: "font-bold", sample: "What we build" },
                  { tag: "H3", size: "text-2xl", weight: "font-semibold", sample: "Service title" },
                  { tag: "H4", size: "text-xl", weight: "font-semibold", sample: "Card heading" },
                  { tag: "Body L", size: "text-lg", weight: "font-normal font-body", sample: "Long-form paragraph copy on services and case studies." },
                  { tag: "Body", size: "text-base", weight: "font-normal font-body", sample: "Default paragraph text — the workhorse for almost everything." },
                  { tag: "Small", size: "text-sm", weight: "font-normal font-body", sample: "Captions, labels, secondary information." },
                  { tag: "Button", size: "text-sm", weight: "font-medium font-body", sample: "GET YOUR QUOTE" },
                ].map((row) => (
                  <div key={row.tag} className="grid grid-cols-12 gap-4 items-baseline border-b border-border/50 pb-3">
                    <div className="col-span-2 text-xs text-muted-foreground uppercase tracking-wider">{row.tag}</div>
                    <div className={`col-span-10 font-display ${row.size} ${row.weight} text-foreground`}>{row.sample}</div>
                  </div>
                ))}
              </div>
            </Card>
          </section>

          {/* 6. LOGO */}
          <section id="logo">
            <SectionHeader
              icon={ImageIcon}
              eyebrow="06 · Logo"
              title="Logo Guidelines"
              description="The WebOptim mark must always feel premium and digital. Clear space, contrast and scale matter more than any single rule."
            />

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <Card>
                <div className="text-xs uppercase tracking-wider text-primary font-medium mb-3">Primary — on dark</div>
                <div className="rounded-xl bg-background border border-border h-40 flex items-center justify-center p-8">
                  <img src={logoFull} alt="WebOptim logo" className="h-12" />
                </div>
              </Card>
              <Card>
                <div className="text-xs uppercase tracking-wider text-primary font-medium mb-3">On light</div>
                <div className="rounded-xl bg-foreground h-40 flex items-center justify-center p-8">
                  <img src={logoFull} alt="WebOptim logo" className="h-12 invert" />
                </div>
              </Card>
              <Card>
                <div className="text-xs uppercase tracking-wider text-primary font-medium mb-3">Mark only</div>
                <div className="rounded-xl bg-background border border-border h-40 flex items-center justify-center p-8">
                  <img src={logoMark} alt="WebOptim mark" className="h-16" />
                </div>
                <div className="text-xs text-muted-foreground mt-3">Use when space is tight (favicon, app icon, social avatar).</div>
              </Card>
              <Card>
                <div className="text-xs uppercase tracking-wider text-primary font-medium mb-3">Clear space</div>
                <div className="rounded-xl bg-background border border-border h-40 flex items-center justify-center p-8 relative">
                  <div className="border-2 border-dashed border-primary/40 p-6 rounded-lg">
                    <img src={logoFull} alt="WebOptim logo" className="h-10" />
                  </div>
                </div>
                <div className="text-xs text-muted-foreground mt-3">Minimum clear space = height of the "W" on all sides.</div>
              </Card>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-primary/20">
                <h3 className="font-display font-semibold text-primary mb-3 flex items-center gap-2"><Check className="w-5 h-5" /> Correct usage</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Use original SVG files at all times</li>
                  <li>• Maintain minimum size of 24px height for the mark</li>
                  <li>• Keep clear space equal to the "W" height</li>
                  <li>• Place on dark backgrounds first; on light only when needed</li>
                </ul>
              </Card>
              <Card className="border-destructive/20">
                <h3 className="font-display font-semibold text-destructive mb-3 flex items-center gap-2"><X className="w-5 h-5" /> Incorrect usage</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Don't recolor outside the brand palette</li>
                  <li>• Don't add shadows, strokes, or 3D effects</li>
                  <li>• Don't stretch, skew, or rotate</li>
                  <li>• Don't place on busy photos without a backdrop</li>
                </ul>
              </Card>
            </div>
          </section>

          {/* 7. IMAGERY */}
          <section id="imagery">
            <SectionHeader
              icon={ImageIcon}
              eyebrow="07 · Imagery"
              title="Photography & Imagery Style"
              description="Our visual world is digital-first: glowing gradients, glass surfaces, abstract shapes — humans only when they earn the moment."
            />

            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <Card>
                <div className="h-32 rounded-lg bg-gradient-hero mb-4" />
                <h3 className="font-display font-semibold mb-2">Abstract & Atmospheric</h3>
                <p className="text-sm text-muted-foreground">Glowing orbs, soft gradients, blurred light. Used as backgrounds and hero artwork.</p>
              </Card>
              <Card>
                <div className="h-32 rounded-lg glass border border-primary/20 mb-4 flex items-center justify-center">
                  <Sparkles className="w-10 h-10 text-primary" />
                </div>
                <h3 className="font-display font-semibold mb-2">Glassmorphism UI</h3>
                <p className="text-sm text-muted-foreground">Translucent cards over rich backgrounds. Real product UI screenshots when available.</p>
              </Card>
              <Card>
                <div className="h-32 rounded-lg bg-muted border border-border mb-4 flex items-center justify-center text-muted-foreground text-sm">
                  Editorial portrait
                </div>
                <h3 className="font-display font-semibold mb-2">Real People</h3>
                <p className="text-sm text-muted-foreground">Only the actual team. Natural light, neutral backdrops, no stock smiles.</p>
              </Card>
            </div>

            <Card>
              <h3 className="font-display font-semibold text-foreground mb-4">Mood, lighting & framing</h3>
              <div className="grid md:grid-cols-2 gap-6 text-sm text-muted-foreground">
                <div>
                  <div className="text-xs uppercase tracking-wider text-primary font-medium mb-2">Mood</div>
                  Premium · futuristic · calm. Never cheerful-stock or corporate-handshake.
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-primary font-medium mb-2">Lighting</div>
                  Cool, blueish highlights. Soft glows. Deep shadows. Never harsh flash.
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-primary font-medium mb-2">Framing</div>
                  Generous negative space. Hero subject off-center. Layered depth.
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-primary font-medium mb-2">Product images</div>
                  Real device mockups (laptop / phone) with subtle perspective and brand-tinted glow.
                </div>
              </div>
            </Card>
          </section>

          {/* 8. UI / WEB DESIGN RULES */}
          <section id="ui">
            <SectionHeader
              icon={Layout}
              eyebrow="08 · UI"
              title="UI / Web Design Rules"
              description="The components and spacing primitives every page must respect."
            />

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* Buttons */}
              <Card>
                <h3 className="font-display font-semibold text-foreground mb-4">Buttons</h3>
                <div className="space-y-3">
                  <Button className="w-full">Default — Primary action</Button>
                  <Button variant="hero" className="w-full">Hero — Marketing CTA</Button>
                  <Button variant="outline" className="w-full">Outline — Secondary</Button>
                  <Button variant="ghost" className="w-full">Ghost — Tertiary</Button>
                </div>
                <div className="mt-4 text-xs text-muted-foreground">
                  Sizes: <span className="font-mono">sm · default · lg · xl</span> · Always rounded-lg or larger.
                </div>
              </Card>

              {/* Forms */}
              <Card>
                <h3 className="font-display font-semibold text-foreground mb-4">Forms</h3>
                <div className="space-y-3">
                  <input
                    type="text"
                    placeholder="your@email.com"
                    className="w-full h-10 px-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <textarea
                    placeholder="Tell us about your project…"
                    rows={3}
                    className="w-full px-3 py-2 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <div className="text-xs text-muted-foreground">
                    Always include explicit success modal · Anti-spam delay 3s · Labels above fields.
                  </div>
                </div>
              </Card>

              {/* Cards */}
              <Card>
                <h3 className="font-display font-semibold text-foreground mb-4">Cards</h3>
                <div className="space-y-3">
                  <div className="glass rounded-2xl p-4">
                    <div className="text-sm font-display font-semibold">Glass card (default)</div>
                    <div className="text-xs text-muted-foreground">bg-card/50 · backdrop-blur-xl · border-border/50</div>
                  </div>
                  <div className="rounded-2xl bg-card border border-border p-4">
                    <div className="text-sm font-display font-semibold">Solid card</div>
                    <div className="text-xs text-muted-foreground">bg-card · border-border</div>
                  </div>
                </div>
              </Card>

              {/* Tokens */}
              <Card>
                <h3 className="font-display font-semibold text-foreground mb-4">Tokens</h3>
                <ul className="text-sm text-muted-foreground space-y-2 font-mono">
                  <li>radius: <span className="text-foreground">0.75rem</span> (sm/md/lg derived)</li>
                  <li>shadow-card: <span className="text-foreground">0 8px 32px rgba(0,0,0,.5)</span></li>
                  <li>shadow-glow: <span className="text-foreground">0 0 40px hsl(193 88% 61% / .4)</span></li>
                  <li>section py: <span className="text-foreground">py-20 md:py-28</span></li>
                  <li>container px: <span className="text-foreground">px-6 · max-w-7xl</span></li>
                </ul>
              </Card>
            </div>

            <Card>
              <h3 className="font-display font-semibold text-foreground mb-4">Spacing system</h3>
              <div className="grid grid-cols-4 md:grid-cols-8 gap-3">
                {[1, 2, 3, 4, 6, 8, 12, 16].map((n) => (
                  <div key={n} className="text-center">
                    <div
                      className="bg-primary/30 border border-primary/40 rounded mb-2 mx-auto"
                      style={{ width: `${n * 4}px`, height: `${n * 4}px` }}
                    />
                    <div className="text-xs text-muted-foreground font-mono">{n * 4}px</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-xs text-muted-foreground">
                Tailwind 4px base. Most components use 4 · 6 · 8 · 16 · 24. Sections always use 80–112px vertical rhythm.
              </div>
            </Card>
          </section>

          {/* 9. SOCIAL */}
          <section id="social">
            <SectionHeader
              icon={Share2}
              eyebrow="09 · Social"
              title="Social Media Guidelines"
              description="Channel-specific tone — same voice, different volume."
            />
            <div className="grid md:grid-cols-3 gap-6">
              {[
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
              ].map((c) => (
                <Card key={c.ch}>
                  <h3 className="font-display font-semibold text-foreground mb-2">{c.ch}</h3>
                  <Pill>{c.tone}</Pill>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{c.body}</p>
                </Card>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <Card>
                <h3 className="font-display font-semibold text-foreground mb-3">Ad creative style</h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Dark background + signature gradient orb</li>
                  <li>• Headline in Outfit Bold, max 6 words</li>
                  <li>• One clear CTA button (Primary or Hero variant)</li>
                  <li>• Logo bottom-left, small but legible</li>
                  <li>• Real screenshot of the product when relevant</li>
                </ul>
              </Card>
              <Card>
                <h3 className="font-display font-semibold text-foreground mb-3">Caption style</h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Hook in the first line — no warm-up</li>
                  <li>• Sentence case, not Title Case</li>
                  <li>• Numbers as digits ("3x", not "three times")</li>
                  <li>• End with a clear next step or question</li>
                  <li>• Sk/Cz captions feel native — no Google-translate vibe</li>
                </ul>
              </Card>
            </div>
          </section>

          {/* 10. POSITIONING */}
          <section id="positioning">
            <SectionHeader
              icon={Trophy}
              eyebrow="10 · Positioning"
              title="Competitor Positioning"
              description="Where WebOptim sits in the market — and why people choose us over everyone else."
            />

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <Card>
                <div className="text-xs uppercase tracking-wider text-primary font-medium mb-2">Premium without being pricey</div>
                <p className="text-sm text-muted-foreground">
                  We sit above DIY tools (Wix, Webflow templates) and freelancers — but well below
                  traditional agencies in cost. Our website itself is the proof: senior craft visible
                  in every interaction.
                </p>
              </Card>
              <Card>
                <div className="text-xs uppercase tracking-wider text-primary font-medium mb-2">Trusted, not hyped</div>
                <p className="text-sm text-muted-foreground">
                  Real Google reviews on the homepage. Named team. Multi-domain presence
                  (.eu / .cz / .sk). Transparent live pricing. Trust comes from showing, not telling.
                </p>
              </Card>
              <Card>
                <div className="text-xs uppercase tracking-wider text-primary font-medium mb-2">Modern, not trendy</div>
                <p className="text-sm text-muted-foreground">
                  Glassmorphism, gradient orbs and animated borders signal that we build for
                  what's next — not what was hot in 2018. But we never sacrifice clarity for
                  visual gimmicks.
                </p>
              </Card>
              <Card>
                <div className="text-xs uppercase tracking-wider text-primary font-medium mb-2">Expert, not mysterious</div>
                <p className="text-sm text-muted-foreground">
                  We share knowledge openly — blog, glossary, FAQ, free price calculator.
                  The more clients understand, the better they buy.
                </p>
              </Card>
            </div>
          </section>

          {/* 11. QUICK REFERENCE */}
          <section id="quickref">
            <SectionHeader
              icon={ChevronRight}
              eyebrow="11 · Cheat Sheet"
              title="One-Page Quick Reference"
              description="Print this. Pin it. Live by it."
            />

            <Card className="!p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="text-xs uppercase tracking-wider text-primary font-medium mb-2">Mission</div>
                  <p className="text-sm text-muted-foreground mb-6">Premium websites that actually convert — without the agency tax.</p>

                  <div className="text-xs uppercase tracking-wider text-primary font-medium mb-2">Voice in 5 words</div>
                  <p className="text-sm text-foreground mb-6">Confident · direct · modern · helpful · senior.</p>

                  <div className="text-xs uppercase tracking-wider text-primary font-medium mb-2">Always</div>
                  <ul className="text-sm text-muted-foreground space-y-1 mb-6">
                    <li>✓ Lead with the outcome</li>
                    <li>✓ Use real numbers</li>
                    <li>✓ Verb-led CTAs</li>
                    <li>✓ Dark theme by default</li>
                    <li>✓ HSL tokens in code</li>
                  </ul>

                  <div className="text-xs uppercase tracking-wider text-destructive font-medium mb-2">Never</div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>✗ Buzzwords or AI clichés</li>
                    <li>✗ Stock corporate photography</li>
                    <li>✗ Hard-coded colors in components</li>
                    <li>✗ Toast-only success feedback</li>
                  </ul>
                </div>

                <div>
                  <div className="text-xs uppercase tracking-wider text-primary font-medium mb-2">Colors</div>
                  <div className="grid grid-cols-4 gap-2 mb-6">
                    {[brandColors.primary, brandColors.secondary, brandColors.purple, brandColors.pink].map((c) => (
                      <div key={c.hex}>
                        <div className="h-12 rounded-lg" style={{ backgroundColor: c.hex }} />
                        <div className="font-mono text-[10px] text-muted-foreground mt-1">{c.hex}</div>
                      </div>
                    ))}
                  </div>

                  <div className="text-xs uppercase tracking-wider text-primary font-medium mb-2">Type</div>
                  <div className="mb-6">
                    <div className="font-display font-bold text-2xl">Outfit — headlines</div>
                    <div className="font-body text-base text-muted-foreground">Space Grotesk — body</div>
                  </div>

                  <div className="text-xs uppercase tracking-wider text-primary font-medium mb-2">Signature CTA</div>
                  <Button variant="hero" size="lg" className="mb-2">Get your free quote</Button>
                  <div className="text-xs text-muted-foreground">Hero gradient · Outfit semibold · rounded-lg</div>
                </div>
              </div>
            </Card>

            <div className="text-center mt-12 text-sm text-muted-foreground">
              WebOptim Brand Manual v1.0 · 2025 · Built from <span className="font-mono text-foreground">weboptim.eu / .cz / .sk</span>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default BrandManual;
