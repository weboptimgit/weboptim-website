import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type SnapCarouselProps = {
  children: React.ReactNode;
  className?: string;
  scrollerClassName?: string;
  itemClassName?: string;
  showDots?: boolean;
  showArrows?: boolean;
  ariaLabel?: string;
};

export function SnapCarousel({
  children,
  className,
  scrollerClassName,
  itemClassName,
  showDots = true,
  showArrows = false,
  ariaLabel = "Carousel",
}: SnapCarouselProps) {
  const scrollerRef = React.useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(true);

  const count = React.Children.count(children);

  // Update scroll state on scroll
  const updateScrollState = React.useCallback(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const { scrollLeft, scrollWidth, clientWidth } = scroller;
    setCanScrollPrev(scrollLeft > 4);
    setCanScrollNext(scrollLeft + clientWidth < scrollWidth - 4);

    // Find first fully/mostly visible item
    const items = Array.from(scroller.querySelectorAll<HTMLElement>("[data-snap-item]"));
    let closestIdx = 0;
    let minDist = Infinity;
    items.forEach((item, i) => {
      const dist = Math.abs(item.offsetLeft - scroller.offsetLeft - scrollLeft);
      if (dist < minDist) {
        minDist = dist;
        closestIdx = i;
      }
    });
    setActiveIndex(closestIdx);
  }, []);

  React.useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    updateScrollState();
    scroller.addEventListener("scroll", updateScrollState, { passive: true });
    return () => scroller.removeEventListener("scroll", updateScrollState);
  }, [updateScrollState, count]);

  const scrollTo = React.useCallback((index: number) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const items = scroller.querySelectorAll<HTMLElement>("[data-snap-item]");
    const target = items.item(index);
    if (!target) return;
    scroller.scrollTo({
      left: target.offsetLeft - scroller.offsetLeft,
      behavior: "smooth",
    });
  }, []);

  const scrollPrev = React.useCallback(() => {
    scrollTo(Math.max(0, activeIndex - 1));
  }, [activeIndex, scrollTo]);

  const scrollNext = React.useCallback(() => {
    scrollTo(Math.min(count - 1, activeIndex + 1));
  }, [activeIndex, count, scrollTo]);

  return (
    <div
      className={cn("w-full relative", className)}
      role="region"
      aria-roledescription="carousel"
      aria-label={ariaLabel}
    >
      {/* Desktop arrows */}
      {showArrows && count > 1 && (
        <>
          <button
            type="button"
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            className={cn(
              "hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 z-10",
              "w-10 h-10 rounded-full items-center justify-center",
              "bg-background border border-border shadow-md",
              "text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-200",
              "disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:text-muted-foreground disabled:hover:border-border",
            )}
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={scrollNext}
            disabled={!canScrollNext}
            className={cn(
              "hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-10",
              "w-10 h-10 rounded-full items-center justify-center",
              "bg-background border border-border shadow-md",
              "text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-200",
              "disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:text-muted-foreground disabled:hover:border-border",
            )}
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </>
      )}

      <div
        ref={scrollerRef}
        className={cn(
          "flex snap-x snap-mandatory overflow-x-auto overscroll-x-contain gap-3 px-2 -mx-2",
          "[-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
          scrollerClassName,
        )}
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {React.Children.map(children, (child, index) => (
          <div
            data-snap-item
            className={cn(
              "snap-start shrink-0 min-w-0",
              itemClassName ?? "basis-[85%]",
            )}
            aria-roledescription="slide"
            aria-label={`Slide ${index + 1} of ${count}`}
          >
            {child}
          </div>
        ))}
      </div>

      {showDots && count > 1 && (
        <div className="mt-4 flex justify-center gap-2">
          {Array.from({ length: count }).map((_, i) => {
            const isActive = i === activeIndex;
            return (
              <button
                key={i}
                type="button"
                onClick={() => scrollTo(i)}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  isActive ? "bg-primary w-6" : "bg-muted-foreground/30 hover:bg-muted-foreground/50 w-2",
                )}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={isActive ? "true" : undefined}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
