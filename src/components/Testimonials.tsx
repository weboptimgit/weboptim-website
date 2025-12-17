import { memo, useMemo } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import ServiceReviews from "@/components/ServiceReviews";

const Testimonials = memo(() => {
  const { t } = useLanguage();

  const testimonials = useMemo(() => [
    {
      name: t("testimonials.1.name"),
      role: t("testimonials.1.role"),
      image: "/img/europeum-quote.png",
      quote: t("testimonials.1.quote"),
      rating: 5,
    },
    {
      name: t("testimonials.2.name"),
      role: t("testimonials.2.role"),
      image: "/img/weboptim-review-jitka.jpg",
      quote: t("testimonials.2.quote"),
      rating: 5,
    },
    {
      name: t("testimonials.3.name"),
      role: t("testimonials.3.role"),
      image: "/img/weboptim-rewiew-anna-sidlovska.jpg",
      quote: t("testimonials.3.quote"),
      rating: 5,
    },
  ], [t]);

  return (
    <>
      <ServiceReviews
        title={t("testimonials.title.before")}
        titleHighlight={t("testimonials.title.highlight")}
        subtitle={t("testimonials.subtitle")}
        reviews={testimonials}
        showSchema={false}
      />
      
      {/* Google Reviews Link */}
      <div className="container mx-auto px-6 -mt-16 mb-16 relative z-10">
        <div className="animate-fade-in-up delay-300 text-center">
          <a
            href="https://search.google.com/local/reviews?placeid=ChIJzcbs0zaVC0cRcanhELRst6E"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass border border-primary/20 hover:border-primary/40 hover:bg-primary/10 transition-all duration-300 text-muted-foreground hover:text-foreground"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            {t("testimonials.googleLink")}
          </a>
        </div>
      </div>
    </>
  );
});

Testimonials.displayName = "Testimonials";

export default Testimonials;