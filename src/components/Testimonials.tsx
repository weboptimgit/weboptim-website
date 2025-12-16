import { memo } from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

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

const TestimonialCard = memo(
  ({
    testimonial,
    index,
  }: {
    testimonial: (typeof testimonials)[0];
    index: number;
  }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="glass rounded-2xl p-8 relative group hover:border-primary/30 transition-all duration-300">
        {/* Quote Icon */}
        <div className="absolute -top-4 -left-2 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
          <Quote className="w-5 h-5 text-primary" />
        </div>

        {/* Stars */}
        <div className="flex gap-1 mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>

        {/* Quote */}
        <p className="text-muted-foreground mb-6 leading-relaxed">
          "{testimonial.quote}"
        </p>

        {/* Author */}
        <div className="flex items-center gap-4">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            loading="lazy"
            decoding="async"
            width={48}
            height={48}
            className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20"
          />
          <div>
            <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
          </div>
        </div>

        {/* Hover glow effect */}
        <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>
    </motion.div>
  )
);

TestimonialCard.displayName = "TestimonialCard";

const Testimonials = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background glow - static */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header (Blog-style motion) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-foreground">{t("testimonials.title.before")} </span>
            <span className="text-gradient">{t("testimonials.title.highlight")}</span>
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("testimonials.subtitle")}
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>

        {/* Google Reviews Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mt-12"
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
    </section>
  );
};

export default Testimonials;
