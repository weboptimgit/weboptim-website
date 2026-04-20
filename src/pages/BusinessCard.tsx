import { Phone, Mail, MapPin, Globe, Printer } from "lucide-react";
import logoFull from "@/assets/logo-weboptim-full.svg";
import logoMark from "@/assets/logo-weboptim.svg";
import SEO from "@/components/SEO";

/**
 * Hidden page — not linked anywhere, excluded from sitemap & indexing.
 * Access via /business-card. Use browser Print → Save as PDF for printing.
 *
 * Card format: 85 × 55 mm (standard EU business card).
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

      {/* Print styles */}
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
          }
        }
      `}</style>

      <main className="min-h-screen bg-muted/30 py-12 px-4">
        {/* Toolbar — hidden on print */}
        <div className="no-print max-w-4xl mx-auto mb-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Business Cards</h1>
            <p className="text-sm text-muted-foreground">
              Print at 100% scale, format 85×55 mm. Use "Save as PDF" in print dialog.
            </p>
          </div>
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition shadow-lg"
          >
            <Printer className="w-4 h-4" />
            Print / Save as PDF
          </button>
        </div>

        {/* Cards */}
        <div className="max-w-4xl mx-auto space-y-12">
          {cards.map((card) => (
            <div key={card.email} className="space-y-8">
              {/* FRONT */}
              <div className="print-page flex justify-center">
                <CardFront card={card} />
              </div>

              {/* BACK */}
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

const CardFront = ({ card }: { card: CardData }) => {
  return (
    <div
      className="business-card relative overflow-hidden bg-background rounded-lg shadow-2xl"
      style={CARD_STYLE}
    >
      {/* Subtle gradient accent */}
      <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-primary to-primary/60" />
      <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-primary/5" />
      <div className="absolute bottom-0 right-0 w-20 h-20 rounded-tl-full bg-primary/5" />

      <div className="relative h-full flex flex-col justify-between p-5 pl-6">
        {/* Top: name + role */}
        <div>
          <h2 className="text-[15pt] font-bold text-foreground leading-tight tracking-tight">
            {card.name}
          </h2>
          <p className="text-[8.5pt] uppercase tracking-[0.18em] text-primary font-semibold mt-1">
            {card.position}
          </p>
        </div>

        {/* Bottom: contacts */}
        <div className="space-y-1 text-[7.5pt] text-foreground/85 leading-snug">
          <div className="flex items-center gap-1.5">
            <Phone className="w-2.5 h-2.5 text-primary flex-shrink-0" strokeWidth={2.5} />
            <span>{card.phone}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Mail className="w-2.5 h-2.5 text-primary flex-shrink-0" strokeWidth={2.5} />
            <span>{card.email}</span>
          </div>
          <div className="flex items-start gap-1.5">
            <MapPin className="w-2.5 h-2.5 text-primary flex-shrink-0 mt-0.5" strokeWidth={2.5} />
            <span>
              {card.addressLines.map((line, i) => (
                <span key={i} className="block">{line}</span>
              ))}
            </span>
          </div>
          <div className="flex items-center gap-1.5 pt-0.5">
            <Globe className="w-2.5 h-2.5 text-primary flex-shrink-0" strokeWidth={2.5} />
            <span className="font-semibold">{card.website}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const CardBack = () => {
  return (
    <div
      className="business-card relative overflow-hidden rounded-lg shadow-2xl"
      style={{
        ...CARD_STYLE,
        background:
          "linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--primary) / 0.8) 100%)",
      }}
    >
      {/* Decorative shapes */}
      <div className="absolute -top-16 -left-16 w-40 h-40 rounded-full bg-white/10" />
      <div className="absolute -bottom-20 -right-20 w-48 h-48 rounded-full bg-white/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-white/5" />

      <div className="relative h-full flex flex-col items-center justify-center p-6 text-center">
        <img
          src={logoFull}
          alt="WebOptim"
          className="h-10 brightness-0 invert mb-2"
        />
        <p className="text-[7pt] uppercase tracking-[0.3em] text-white/90 font-medium mt-1">
          Web · SEO · PPC · Digital
        </p>
        <div className="mt-3 px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm">
          <span className="text-[7pt] text-white font-semibold">weboptim.cz</span>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
