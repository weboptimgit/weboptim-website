import { Button } from "@/components/ui/button";
import { getConsent, clearConsent } from "@/lib/cookie-consent";
import { useEffect, useState } from "react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AmbientBackground from "@/components/AmbientBackground";

export default function PrivacyPolicy() {
  const [consent, setConsent] = useState<ReturnType<typeof getConsent>>(null);

  useEffect(() => {
    setConsent(getConsent());
  }, []);

  const openCookieSettings = () => {
    window.dispatchEvent(new CustomEvent("wo:open-cookie-settings"));
  };

  const revokeConsent = () => {
    clearConsent();
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ak to používaš aj inde, kľudne nech je */}
      <AmbientBackground />

      <main className="container mx-auto px-6 pt-32 pb-24 max-w-3xl">
        <h1 className="text-3xl font-bold mb-6">Zásady ochrany súkromia</h1>

        <p className="text-muted-foreground mb-6">
          Táto webová stránka používa cookies na zabezpečenie správneho fungovania,
          analytiku návštevnosti a marketingové účely.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-3">Používané cookies</h2>

        <ul className="space-y-2 text-muted-foreground mb-8">
          <li>
            <strong>Nutné:</strong> vždy aktívne – zabezpečujú základnú funkčnosť webu
          </li>
          <li>
            <strong>Analytické:</strong> Google Analytics / Google Tag Manager
          </li>
          <li>
            <strong>Marketingové:</strong> remarketing, reklamné platformy
          </li>
        </ul>

        <h2 className="text-xl font-semibold mb-3">Tvoje nastavenia</h2>

        <div className="rounded-xl border p-4 mb-6 space-y-1 text-sm">
          <p>Nutné: ✅ vždy aktívne</p>
          <p>Analytické: {consent?.analytics ? "✅ povolené" : "❌ zakázané"}</p>
          <p>Marketingové: {consent?.marketing ? "✅ povolené" : "❌ zakázané"}</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Button onClick={openCookieSettings}>Zmeniť nastavenia cookies</Button>
          <Button variant="outline" onClick={revokeConsent}>
            Odvolať súhlas
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
}
