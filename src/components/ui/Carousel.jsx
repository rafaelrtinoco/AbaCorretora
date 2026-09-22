import { useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { cn } from "../../lib/cn";

const BUTTON_VARIANTS = {
  light: "ring-1 ring-inset ring-brand-500 text-brand-500 hover:bg-brand-500 hover:text-white",
  dark: "ring-1 ring-inset ring-white/60 text-white hover:bg-white hover:text-navy-900",
};

/**
 * Scroll-snap carousel shared by the Home product grid and the
 * Testimonials section — both used to duplicate this exact scrollBySlide
 * logic (and Home's copy lived inside an IIFE in the middle of JSX,
 * calling useRef outside the component's top level).
 */
export function Carousel(props) {
  const {
    items,
    renderItem,
    getKey,
    slideClassName = "flex-[0_0_100%]",
    ariaLabel,
    controlsAlign = "center",
    buttonVariant = "light",
  } = props;

  const trackRef = useRef(null);

  const scrollBySlide = (direction) => {
    const track = trackRef.current;
    if (!track) return;
    const slide = track.querySelector(":scope > *");
    if (!slide) return;

    const slideWidth = slide.getBoundingClientRect().width;
    const gap = parseFloat(window.getComputedStyle(track).gap) || 16;
    const delta = direction === "next" ? slideWidth + gap : -(slideWidth + gap);
    track.scrollBy({ left: delta, behavior: "smooth" });
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowRight") scrollBySlide("next");
    if (event.key === "ArrowLeft") scrollBySlide("prev");
  };

  return (
    <div className="w-full min-w-0">
      <div className="overflow-hidden" role="region" aria-label={ariaLabel}>
        <div
          ref={trackRef}
          tabIndex={0}
          onKeyDown={handleKeyDown}
          className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {items.map((item, index) => (
            <div
              key={getKey ? getKey(item, index) : index}
              className={cn("snap-start", slideClassName)}
              aria-roledescription="slide"
            >
              {renderItem(item, index)}
            </div>
          ))}
        </div>
      </div>

      <div
        className={cn(
          "mt-4 flex items-center gap-3",
          controlsAlign === "end" ? "justify-end" : "justify-center"
        )}
      >
        <button
          type="button"
          aria-label="Slide anterior"
          onClick={() => scrollBySlide("prev")}
          className={cn(
            "rounded-lg p-2 text-lg transition-colors duration-200",
            BUTTON_VARIANTS[buttonVariant]
          )}
        >
          <FiChevronLeft />
        </button>
        <button
          type="button"
          aria-label="Próximo slide"
          onClick={() => scrollBySlide("next")}
          className={cn(
            "rounded-lg p-2 text-lg transition-colors duration-200",
            BUTTON_VARIANTS[buttonVariant]
          )}
        >
          <FiChevronRight />
        </button>
      </div>
    </div>
  );
}
