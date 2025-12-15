import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

type Props = {
  title: string;
  subtitle: string;
  badge: string;
  cta: string;
  href: string;
};

export default function ConfiguratorCtaBox({
  title,
  subtitle,
  badge,
  cta,
  href,
}: Props) {
  return (
    <div className="glass rounded-2xl p-6 border border-primary/20 relative overflow-hidden">
      <div className="absolute -inset-10 bg-gradient-to-r from-primary/15 via-transparent to-secondary/15 blur-2xl" />

      <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-medium text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full mb-3">
            <Sparkles className="w-4 h-4" />
            {badge}
          </div>

          <h3 className="text-xl font-display font-bold mb-1">{title}</h3>
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        </div>

      <Button variant="hero" asChild className="shrink-0">
        <Link to={href}>
          {cta}
          <ArrowRight className="w-4 h-4 ml-2" />
        </Link>
      </Button>
      </div>
    </div>
  );
}
