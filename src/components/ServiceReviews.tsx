import { memo } from "react";
import { Star, Quote } from "lucide-react";
import { SnapCarousel } from "@/components/ui/snap-carousel";
import { useIsMobile } from "@/hooks/use-mobile";

interface Review {
  name: string;
  role: string;
  image: string;
  quote: string;
  rating: number;
}

interface ServiceReviewsProps {
  title?: string;
  titleHighlight?: string;
  subtitle?: string;
  reviews?: Review[];
  showSchema?: boolean;
  overallRating?: number | null;
  totalReviews?: number | null;
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

const ReviewCard = memo(({ review }: { review: Review }) => (
  <div className="glass rounded-2xl p-8 relative group hover:border-primary/30 transition-all duration-300 h-full">
    {/* Quote Icon */}
    <div className="absolute -top-4 -left-2 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
      <Quote className="w-5 h-5 text-primary" />
    </div>

    {/* Stars */}
    <div className="flex gap-1 mb-4">
      {[...Array(review.rating)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      ))}
    </div>

    {/* Quote */}
    <p className="text-muted-foreground mb-6 leading-relaxed">"{review.quote}"</p>

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
        <h4 className="font-semibold text-foreground">{review.name}</h4>
        {review.role && <p className="text-sm text-muted-foreground">{review.role}</p>}
      </div>
    </div>

    {/* Hover glow effect */}
    <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
  </div>
));

ReviewCard.displayName = "ReviewCard";

const ServiceReviews = ({
  title = "Co říkají naši",
  titleHighlight = "klienti",
  subtitle = "Podívejte se, co o spolupráci s námi říkají naši spokojení zákazníci.",
  reviews = defaultReviews,
  showSchema = true,
  overallRating,
  totalReviews,
}: ServiceReviewsProps) => {
  const isMobile = useIsMobile();

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

  return (
    <section className="py-24 relative overflow-hidden">
      {/* JSON-LD Schema */}
      {showSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
        />
      )}

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="animate-fade-in-up text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-foreground">{title} </span>
            <span className="text-gradient">{titleHighlight}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
        </div>

        {/* Mobile Carousel */}
        {isMobile ? (
          <div className="mb-12">
            <SnapCarousel
              ariaLabel={`${title} ${titleHighlight}`}
              itemClassName="basis-[85%]"
              scrollerClassName="pt-6 pl-4"
            >
              {reviews.map((review, index) => (
                <ReviewCard key={index} review={review} />
              ))}
            </SnapCarousel>
          </div>
        ) : (
          /* Desktop Grid */
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ReviewCard review={review} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ServiceReviews;