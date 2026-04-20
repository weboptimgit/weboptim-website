import { Phone, Mail, MapPin, Globe, Printer, Sparkles } from "lucide-react";
import logoFull from "@/assets/logo-weboptim-full.svg";
import SEO from "@/components/SEO";

/**
 * Hidden page — not linked anywhere, excluded from sitemap & indexing.
 * Access via /business-card. Use browser Print → Save as PDF for printing.
 *
 * Card format: 85 × 55 mm (standard EU business card).
 * Design inspired by website hero section: dark bg, gradient orbs,
 * glassmorphism, cyan-to-purple gradient typography.
 */

type CardData = {
  name: string;
  position: string;
  phone: string;
  email: string;
  addressLines: string[];
  website: string;
};

const cards: CardData[] = [
  {
    name: "Peter Gáborík",
    position: "CEO",
    phone: "+420 776 029 280",
    email: "gaborik@weboptim.cz",
    addressLines: ["Příčná 1892/4, Nové Město", "110 00 Praha 1"],
    website: "weboptim.cz",
  },
];

const BusinessCard = () => {
  const handlePrint = () => window.print();

  return (
    <>
      <SEO
        title="Business Card"
        description="Internal business card page"
        noindex
      />

      {/* Print styles — preserve dark colors with print-color-adjust */}
      <style>{`
        @page {
          size: 85mm 55mm;
          margin: 0;
        }
        @media print {
          html, body {
            margin: 0 !important;
            padding: 0 !important;
            background: white !important;
          }
          .no-print { display: none !important; }
          .print-page {
            page-break-after: always;
            margin: 0 !important;
            padding: 0 !important;
          }
          .print-page:last-child { page-break-after: auto; }
          .business-card {
            box-shadow: none !important;
            border-radius: 0 !important;
            margin: 0 !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          .business-card * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
        }
      `}</style>

      <main className="min-h-screen bg-background py-12 px-4 relative overflow-hidden">
        {/* Ambient gradient orbs (only on screen) */}
        <div className="no-print absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-primary/20 to-accent/10 blur-[100px]" />
          <div className="absolute -bottom-1/4 -right-1/4 w-[700px] h-[700px] rounded-full bg-gradient-to-tl from-purple/15 to-primary/10 blur-[120px]" />
        </div>

        {/* Toolbar */}
        <div className="no-print relative z-10 max-w-4xl mx-auto mb-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-display font-bold text-foreground">
              Business <span className="text-gradient">Cards</span>
            </h1>
            <p className="text-sm text-muted-foreground mt-1">
              Print at 100% scale, format 85×55 mm. Use "Save as PDF" in print dialog.
            </p>
          </div>
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-primary text-primary-foreground font-semibold hover:opacity-90 transition shadow-lg shadow-primary/30"
          >
            <Printer className="w-4 h-4" />
            Print / Save as PDF
          </button>
        </div>

        {/* Cards */}
        <div className="relative z-10 max-w-4xl mx-auto space-y-12">
          {cards.map((card) => (
            <div key={card.email} className="space-y-8">
              <div className="print-page flex justify-center">
                <CardFront card={card} />
              </div>
              <div className="print-page flex justify-center">
                <CardBack />
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

const CARD_STYLE: React.CSSProperties = {
  width: "85mm",
  height: "55mm",
};

/* ---------- FRONT ---------- */
const CardFront = ({ card }: { card: CardData }) => {
  return (
    <div
      className="business-card relative overflow-hidden rounded-lg shadow-2xl shadow-primary/20"
      style={{
        ...CARD_STYLE,
        background: "hsl(230 35% 7%)",
      }}
    >
      {/* Gradient orbs — hero style */}
      <div
        className="absolute -top-12 -left-12 w-40 h-40 rounded-full"
        style={{
          background:
            "radial-gradient(circle, hsl(193 88% 61% / 0.35), transparent 70%)",
          filter: "blur(20px)",
        }}
      />
      <div
        className="absolute -bottom-16 -right-12 w-44 h-44 rounded-full"
        style={{
          background:
            "radial-gradient(circle, hsl(270 60% 60% / 0.25), transparent 70%)",
          filter: "blur(20px)",
        }}
      />

      {/* Subtle grid texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(193 88% 61%) 1px, transparent 1px), linear-gradient(90deg, hsl(193 88% 61%) 1px, transparent 1px)",
          backgroundSize: "12px 12px",
        }}
      />

      {/* Glass border */}
      <div className="absolute inset-0 rounded-lg border border-white/10" />

      <div className="relative h-full flex flex-col justify-between p-5">
        {/* Top: badge + name */}
        <div>
          <div
            className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full backdrop-blur-sm border border-white/10 mb-2"
            style={{ background: "hsl(230 35% 12% / 0.6)" }}
          >
            <Sparkles className="w-2 h-2" style={{ color: "hsl(193 88% 61%)" }} />
            <span className="text-[5.5pt] uppercase tracking-[0.2em] text-white/70 font-medium">
              WebOptim
            </span>
          </div>

          <h2
            className="text-[14pt] font-display font-bold leading-tight tracking-tight"
            style={{
              backgroundImage:
                "linear-gradient(135deg, hsl(193 88% 61%), hsl(220 80% 70%), hsl(270 60% 70%))",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            {card.name}
          </h2>
          <p
            className="text-[7.5pt] uppercase tracking-[0.25em] font-semibold mt-0.5"
            style={{ color: "hsl(193 88% 61%)" }}
          >
            {card.position}
          </p>
        </div>

        {/* Bottom: contacts */}
        <div className="space-y-1 text-[7pt] leading-snug" style={{ color: "hsl(210 40% 92%)" }}>
          <ContactRow icon={Phone} text={card.phone} />
          <ContactRow icon={Mail} text={card.email} />
          <ContactRow
            icon={MapPin}
            text={
              <>
                {card.addressLines.map((line, i) => (
                  <span key={i} className="block">{line}</span>
                ))}
              </>
            }
            align="start"
          />
          <ContactRow icon={Globe} text={card.website} bold />
        </div>
      </div>
    </div>
  );
};

const ContactRow = ({
  icon: Icon,
  text,
  bold,
  align = "center",
}: {
  icon: any;
  text: React.ReactNode;
  bold?: boolean;
  align?: "center" | "start";
}) => (
  <div className={`flex gap-1.5 ${align === "start" ? "items-start" : "items-center"}`}>
    <Icon
      className={`w-2.5 h-2.5 flex-shrink-0 ${align === "start" ? "mt-[2px]" : ""}`}
      style={{ color: "hsl(193 88% 61%)" }}
      strokeWidth={2.5}
    />
    <span className={bold ? "font-semibold" : ""}>{text}</span>
  </div>
);

/* ---------- BACK ---------- */
const CardBack = () => {
  return (
    <div
      className="business-card relative overflow-hidden rounded-lg shadow-2xl shadow-primary/20"
      style={{
        ...CARD_STYLE,
        background: "hsl(230 35% 7%)",
      }}
    >
      {/* Animated-style gradient orbs */}
      <div
        className="absolute -top-20 -right-16 w-56 h-56 rounded-full"
        style={{
          background:
            "radial-gradient(circle, hsl(193 88% 61% / 0.4), transparent 70%)",
          filter: "blur(25px)",
        }}
      />
      <div
        className="absolute -bottom-20 -left-16 w-56 h-56 rounded-full"
        style={{
          background:
            "radial-gradient(circle, hsl(270 60% 60% / 0.35), transparent 70%)",
          filter: "blur(25px)",
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full"
        style={{
          background:
            "radial-gradient(circle, hsl(220 80% 60% / 0.2), transparent 70%)",
          filter: "blur(15px)",
        }}
      />

      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(193 88% 61%) 1px, transparent 1px), linear-gradient(90deg, hsl(193 88% 61%) 1px, transparent 1px)",
          backgroundSize: "12px 12px",
        }}
      />

      <div className="absolute inset-0 rounded-lg border border-white/10" />

      <div className="relative h-full flex flex-col items-center justify-center p-6 text-center">
        {/* Logo with glow */}
        <div className="relative">
          <div
            className="absolute inset-0 -m-4 rounded-full"
            style={{
              background:
                "radial-gradient(circle, hsl(193 88% 61% / 0.3), transparent 70%)",
              filter: "blur(15px)",
            }}
          />
          <img
            src={logoFull}
            alt="WebOptim"
            className="relative h-9 brightness-0 invert"
          />
        </div>

        {/* Tagline with gradient */}
        <p
          className="text-[7pt] uppercase tracking-[0.35em] font-medium mt-3"
          style={{
            backgroundImage:
              "linear-gradient(90deg, hsl(193 88% 61%), hsl(270 60% 70%))",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          Web · SEO · PPC · Digital
        </p>

        {/* Sparkle accent */}
        <div className="flex items-center gap-1 mt-2">
          <span style={{ color: "hsl(193 88% 61%)" }} className="text-[6pt]">✦</span>
          <span
            className="text-[6.5pt] font-semibold tracking-wider"
            style={{ color: "hsl(210 40% 92%)" }}
          >
            weboptim.cz
          </span>
          <span style={{ color: "hsl(193 88% 61%)" }} className="text-[6pt]">✦</span>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
