import { useEffect, useMemo, useState } from "react";
import { X, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

type Props = {
  title: string;
  subtitle: string;
  badge: string;
  cta: string;
  href: string;

  // optional tuning
  showAfterPx?: number; // default 650
  showAfterPercent?: number; // default 0 (disabled)
  reappearAfterHours?: number; // default 24
  storageKey?: string; // default "wo:configuratorPopup:lastClosed"
};

export default function ConfiguratorPopup({
  title,
  subtitle,
  badge,
  cta,
  href,
  showAfterPx = 650,
  showAfterPercent = 0,
  reappearAfterHours = 24,
  storageKey = "wo:configuratorPopup:lastClosed",
}: Props) {
  const [shouldRender, setShouldRender] = useState(false);
  const [visible, setVisible] = useState(false);

  const ms = useMemo(() => reappearAfterHours * 60 * 60 * 1000, [reappearAfterHours]);

  useEffect(() => {
    // 1) daily gating (24h)
    try {
      const last = Number(localStorage.getItem(storageKey) || "0");
      if (last && Date.now() - last < ms) {
        setShouldRender(false);
        return;
      }
    } catch {
      // ignore
    }

    setShouldRender(true);
  }, [ms, storageKey]);

  useEffect(() => {
    if (!shouldRender) return;

    const onScroll = () => {
      const y = window.scrollY || 0;

      // percent mode (optional)
      if (showAfterPercent > 0) {
        const doc = document.documentElement;
        const max = (doc.scrollHeight || 0) - (window.innerHeight || 0);
        const p = max > 0 ? y / max : 0;
        setVisible(p >= showAfterPercent);
        return;
      }

      // px mode
      setVisible(y >= showAfterPx);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll as any);
  }, [shouldRender, showAfterPx, showAfterPercent]);

  const close = () => {
    setVisible(false);
    setShouldRender(false);
    try {
      localStorage.setItem(storageKey, String(Date.now()));
    } catch {
      // ignore
    }
  };

  if (!shouldRender || !visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-[60] pointer-events-none">
      <div className="max-w-3xl mx-auto pointer-events-auto">
        <div className="glass rounded-2xl border border-primary/20 overflow-hidden relative shadow-2xl">
          {/* jemný glow bez bluru pozadia */}
          <div className="absolute -inset-10 bg-gradient-to-r from-primary/15 via-transparent to-secondary/15 blur-2xl pointer-events-none" />

          <button
            onClick={close}
            aria-label="Close"
            className="absolute right-3 top-3 p-2 rounded-full hover:bg-white/5 transition"
          >
            <X className="w-4 h-4 text-muted-foreground" />
          </button>

          <div className="relative p-4 md:p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="pr-10">
              <div className="inline-flex items-center gap-2 text-xs font-medium text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full mb-2">
                <Sparkles className="w-4 h-4" />
                {badge}
              </div>

              <div className="text-lg font-display font-bold leading-tight">{title}</div>
              <div className="text-sm text-muted-foreground">{subtitle}</div>
            </div>

            <Button variant="hero" asChild className="shrink-0">
              <Link to={href} onClick={close}>
                {cta}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
