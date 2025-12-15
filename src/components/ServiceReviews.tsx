import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

interface Review {
  name: string;
  role: string;
  image: string;
  quote: string;
  rating: number;
}

interface ServiceReviewsProps {
  title?: string;
  subtitle?: string;
  reviews?: Review[];
}

const defaultReviews: Review[] = [
  {
    name: "Martin Novák",
    role: "CEO, TechStart s.r.o.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    quote:
      "Spolupráce s WebOptim předčila naše očekávání. Konverzní poměr vzrostl o 200% během prvního čtvrtletí.",
    rating: 5,
  },
  {
    name: "Jana Svobodová",
    role: "Marketingová ředitelka, GreenLeaf",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    quote:
      "E-shop, který nám vytvořili, je neuvěřitelně intuitivní. Prodeje se od spuštění zdvojnásobily!",
    rating: 5,
  },
  {
    name: "Petr Horák",
    role: "Zakladatel, Bloom Agency",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    quote:
      "Výjimečný design a bezchybné provedení. Dokonale pochopili naši vizi a dodali víc, než jsme čekali.",
    rating: 5,
  },
];

const ServiceReviews = ({
  title = "Co říkají naši klienti",
  subtitle = "Podívejte se, co o spolupráci s námi říkají naši spokojení zákazníci.",
  reviews = defaultReviews,
}: ServiceReviewsProps) => {
  // JSON-LD schema for reviews
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "WebOptim",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: reviews.length.toString(),
      bestRating: "5",
      worstRating: "1",
    },
    review: reviews.map((review) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: review.name,
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: review.rating.toString(),
        bestRating: "5",
      },
      reviewBody: review.quote,
    })),
  };

  const titleParts = title.trim().split(" ");
  const titleBefore = titleParts.slice(0, -1).join(" ");
  const titleLast = titleParts.slice(-1)[0] ?? "";

  return (
    <section className="py-20 px-6 bg-muted/20 relative overflow-hidden">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header (Blog/Portfolio fixed pattern) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            {titleBefore}{" "}
            <span className="text-primary">{titleLast}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
        </motion.div>

        {/* Cards grid (Blog/Portfolio fixed pattern: motion wrapper outside, static card inside) */}
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="glass-strong rounded-2xl p-8 relative group hover:border-primary/30 transition-all duration-300 border border-border/50">
                {/* Quote Icon */}
                <div className="absolute -top-4 -left-2 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <Quote className="w-5 h-5 text-primary" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{review.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20"
                    loading="lazy"
                    decoding="async"
                    width={48}
                    height={48}
                  />
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {review.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">{review.role}</p>
                  </div>
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceReviews;
