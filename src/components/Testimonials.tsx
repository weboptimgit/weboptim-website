import { memo } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import ServiceReviews from "@/components/ServiceReviews";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "CEO, TechStart Inc.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face&q=60",
    quote:
      "Working with this team transformed our online presence completely. Our conversion rates increased by 200% within the first quarter.",
    rating: 5,
  },
  {
    name: "David Chen",
    role: "Founder, GreenLeaf Solutions",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face&q=60",
    quote:
      "The e-commerce platform they built for us is incredibly intuitive. Sales have doubled since launch. Highly recommend!",
    rating: 5,
  },
  {
    name: "Emma Rodriguez",
    role: "Marketing Director, Bloom Agency",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face&q=60",
    quote:
      "Exceptional design and flawless execution. They understood our vision perfectly and delivered beyond expectations.",
    rating: 5,
  },
];

const Testimonials = memo(() => {
  const { t } = useLanguage();

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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center"
        >
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
        </motion.div>
      </div>
    </>
  );
});

Testimonials.displayName = "Testimonials";

export default Testimonials;
