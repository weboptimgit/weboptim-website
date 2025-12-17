import * as React from "react";

import { cn } from "@/lib/utils";

type SnapCarouselProps = {
  children: React.ReactNode;
  /** Outer wrapper */
  className?: string;
  /** Scroll container (the horizontally scrollable element) */
  scrollerClassName?: string;
  /** Wrapper applied to each item */
  itemClassName?: string;
  /** Show pagination dots under the carousel */
  showDots?: boolean;
  /** Accessible label for the region */
  ariaLabel?: string;
};

export function SnapCarousel({
  children,
  className,
  scrollerClassName,
  itemClassName,
  showDots = true,
  ariaLabel = "Carousel",
}: SnapCarouselProps) {
  const scrollerRef = React.useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = React.useState(0);

  const count = React.Children.count(children);

  React.useEffect(() => {
    if (!showDots) return;

    const scroller = scrollerRef.current;
    if (!scroller) return;

    const items = Array.from(
      scroller.querySelectorAll<HTMLElement>("[data-snap-item]"),
    );
    if (items.length <= 1) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the most visible intersecting slide
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0));

        if (!visible[0]) return;
        const idx = items.indexOf(visible[0].target as HTMLElement);
        if (idx >= 0) setActiveIndex(idx);
      },
      {
        root: scroller,
        threshold: [0.6],
      },
    );

    for (const el of items) observer.observe(el);

    return () => observer.disconnect();
  }, [count, showDots]);

  const scrollTo = React.useCallback((index: number) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const items = scroller.querySelectorAll<HTMLElement>("[data-snap-item]");
    const target = items.item(index);
    target?.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
  }, []);

  return (
    <div
      className={cn("w-full", className)}
      role="region"
      aria-roledescription="carousel"
      aria-label={ariaLabel}
    >
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
