import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { getConsent, setConsent } from "@/lib/cookie-consent";

type Props = { privacyUrl?: string };

export default function CookieBanner({ privacyUrl = "/privacy-policy" }: Props) {
  const [open, setOpen] = useState(false);
  const [showPrefs, setShowPrefs] = useState(false);

  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const c = getConsent();
    setOpen(!c);
    setAnalytics(c?.analytics ?? false);
    setMarketing(c?.marketing ?? false);
  }, []);

  useEffect(() => {
    const onOpenPrefs = () => {
      const c = getConsent();
      setAnalytics(c?.analytics ?? analytics);
      setMarketing(c?.marketing ?? marketing);

      setOpen(true);
      setShowPrefs(true);
    };

    window.addEventListener("wo:open-cookie-settings", onOpenPrefs);
    return () => window.removeEventListener("wo:open-cookie-settings", onOpenPrefs);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!open) return null;

  const save = (a: boolean, m: boolean) => {
    setConsent({
      necessary: true,
      analytics: a,
      marketing: m,
      version: 1,
    });
    setOpen(false);
    setShowPrefs(false);
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-[9999] p-4">
      <div className="mx-auto max-w-3xl rounded-2xl border bg-background/95 backdrop-blur shadow-lg">
        <div className="p-5">
          <div className="flex flex-col gap-3">
            <div>
              <h3 className="text-base font-semibold">Cookies</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Používame cookies na fungovanie webu a (voliteľne) na analýzu návštevnosti a marketing.
                Nastavenia si môžeš kedykoľvek zmeniť.
              </p>
              <a
                className="text-sm underline text-muted-foreground hover:text-foreground mt-2 inline-block"
                href={privacyUrl}
                target={privacyUrl.startsWith("http") ? "_blank" : undefined}
                rel={privacyUrl.startsWith("http") ? "noreferrer" : undefined}
              >
                Zásady ochrany súkromia
              </a>
            </div>

            {showPrefs && (
              <div className="mt-2 rounded-xl border p-4 space-y-3">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-medium text-sm">Nutné</p>
                    <p className="text-xs text-muted-foreground">
                      Potrebné pre základné fungovanie webu.
                    </p>
                  </div>
                  <Switch checked disabled />
                </div>

                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-medium text-sm">Analytické</p>
                    <p className="text-xs text-muted-foreground">
                      Pomáhajú nám zlepšovať web (napr. Google Analytics).
                    </p>
                  </div>
                  <Switch checked={analytics} onCheckedChange={setAnalytics} />
                </div>

                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-medium text-sm">Marketingové</p>
                    <p className="text-xs text-muted-foreground">
                      Meranie kampaní a remarketing (napr. Meta Pixel).
                    </p>
                  </div>
                  <Switch checked={marketing} onCheckedChange={setMarketing} />
                </div>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-2 sm:justify-end mt-2">
              <Button variant="outline" onClick={() => save(false, false)}>
                Odmietnuť
              </Button>

              <Button
                variant="outline"
                onClick={() => {
                  setOpen(true);
                  setShowPrefs((v) => !v);
                }}
              >
                {showPrefs ? "Skryť nastavenia" : "Nastavenia"}
              </Button>

              <Button onClick={() => save(true, true)}>
                Prijať všetko
              </Button>

              {showPrefs && (
                <Button onClick={() => save(analytics, marketing)}>
                  Uložiť výber
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
