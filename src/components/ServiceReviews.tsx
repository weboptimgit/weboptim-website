import { memo } from "react";
import { Star, Quote } from "lucide-react";
import { SnapCarousel } from "@/components/ui/snap-carousel";
import { useGoogleReviews } from "@/hooks/useGoogleReviews";

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
  /** Pass explicit reviews to skip live fetch (e.g. homepage uses Testimonials wrapper) */
  reviews?: Review[];
  showSchema?: boolean;
  overallRating?: number | null;
  totalReviews?: number | null;
}

const defaultReviews: Review[] = [
  {
    name: "Jitka Jakimeczková",
    role: "",
    image: "/img/weboptim-review-jitka.jpg",
    quote: "Spolupráce s Weboptim byla jedna z nejlepších zkušeností, co jsem měla. Od začátku skvělá komunikace, pochopení mé vize a ochota doladit každý detail přesně podle mých představ.",
    rating: 5,
  },
  {
    name: "Martin Vokálek",
    role: "EUROPEUM",
    image: "/img/europeum-quote.png",
    quote: "Spolupráce s panem Gáboríkem a jeho týmem fungovala skvěle, vše jsme si vyjasnili, nastavili a finální cena odpovídala té dohodnuté.",
    rating: 5,
  },
  {
    name: "Anna Sidlovská",
    role: "",
    image: "/img/weboptim-rewiew-anna-sidlovska.jpg",
    quote: "Profesionálny prístup, výborná komunikácia a krásny výsledok. Určite odporúčam!",
    rating: 5,
  },
];

const ReviewCard = memo(({ review }: { review: Review }) => (
  <div className="glass rounded-2xl p-8 relative group hover:border-primary/30 transition-all duration-300 h-full">
    <div className="absolute -top-4 -left-2 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
      <Quote className="w-5 h-5 text-primary" />
    </div>

    <div className="flex gap-1 mb-4">
      {[...Array(review.rating)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      ))}
    </div>

    <p className="text-muted-foreground mb-6 leading-relaxed">"{review.quote}"</p>

    <div className="flex items-center gap-4">
      <img
        src={review.image}
        alt={review.name}
        className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20"
        loading="lazy"
        decoding="async"
        width={48}
        height={48}
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).src =
            "https://ui-avatars.com/api/?name=" + encodeURIComponent(review.name) + "&size=48&background=6366f1&color=fff";
        }}
      />
      <div>
        <h4 className="font-semibold text-foreground">{review.name}</h4>
        {review.role && <p className="text-sm text-muted-foreground">{review.role}</p>}
      </div>
    </div>

    <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
  </div>
));

ReviewCard.displayName = "ReviewCard";

const ServiceReviewsInner = ({
  title = "Co říkají naši",
  titleHighlight = "klienti",
  subtitle = "Podívejte se, co o spolupráci s námi říkají naši spokojení zákazníci.",
  reviews: staticReviews,
  showSchema = true,
  overallRating: overallRatingProp,
  totalReviews: totalReviewsProp,
}: ServiceReviewsProps) => {
  // If reviews are explicitly passed, skip live fetch
  const skipFetch = !!staticReviews;
  const { reviews: liveReviews, rating: liveRating, total: liveTotal } = useGoogleReviews(3);

  const reviews = staticReviews ?? (liveReviews.length > 0 ? liveReviews : defaultReviews);
  const overallRating = overallRatingProp ?? liveRating;
  const totalReviews = totalReviewsProp ?? liveTotal;

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "WebOptim",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: (totalReviews ?? reviews.length).toString(),
      bestRating: "5",
      worstRating: "1",
    },
    review: reviews.map((review) => ({
      "@type": "Review",
      author: { "@type": "Person", name: review.name },
      reviewRating: { "@type": "Rating", ratingValue: review.rating.toString(), bestRating: "5" },
      reviewBody: review.quote,
    })),
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {showSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
        />
      )}

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="animate-fade-in-up text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-foreground">{title} </span>
            <span className="text-gradient">{titleHighlight}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
        </div>

        {/* Carousel — mobile: 1 karta, tablet: 2, desktop: 3 */}
        <div className="mb-12">
          <SnapCarousel
            ariaLabel={`${title} ${titleHighlight}`}
            itemClassName="basis-[85%] md:basis-[45%] lg:basis-[31%]"
            scrollerClassName="pt-6 pl-4"
            showArrows
          >
            {reviews.map((review, index) => (
              <ReviewCard key={index} review={review} />
            ))}
          </SnapCarousel>
        </div>
      </div>
    </section>
  );
};

// Suppress unused var warning for skipFetch — it's intentional for future use
void 0;

const ServiceReviews = memo(ServiceReviewsInner);
ServiceReviews.displayName = "ServiceReviews";

export default ServiceReviews;
