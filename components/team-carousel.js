import React, { useState, useEffect, useCallback, useRef, createRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ModalTeam } from "./modal-team";

const TeamCarousel = ({ slides }) => {
  const [viewportRef, embla] = useEmblaCarousel({
    axis: "y",
    skipSnaps: false,
    loop: true,
    inViewThreshold: 0.85,
    speed: 4,
    slidesToScroll: 4
  });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);
    onSelect();
  }, [embla, onSelect]);

  let mmodalEl1 = useRef();

  return (
    <div className="embla">
      <div className="embla__viewport" ref={viewportRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__inner mb-8">
                <button className="group block hover:border-0 focus:border-0 hover:outline-none focus:outline-none mb-6 lg:mb-10 relative overflow-hidden" onClick={() => modalEl1.open()}>
                  <img className="h-full w-full inset-0 absolute z-10 mix-blend-overlay will-change opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity ease-in-out duration-500" src="/images/team-overlay.jpg" alt="Supergraphic Overlay" />

                  <img className="opacity-100 hover:opacity-100 transition-opacity duration-500 ease-in-out block w-full object-center object-cover will-change" src={slide.avatar.asset.url} alt={slide.name} />

                  <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity ease-in-out duration-500"></div>

                  <h3 className="absolute bottom-0 left-0 text-off-white z-20 text-[28px] 2xl:text-[34px] uppercase italic w-full text-left leading-[0.9] -translate-x-full group-hover:-translate-x-1 transition-transform ease-in-out duration-500" dangerouslySetInnerHTML={{ __html: slide.name}}></h3>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        className="embla__button embla__button--prev"
        onClick={scrollPrev}
        disabled={!prevBtnEnabled}
      >
        <span>↑</span>
      </button>

      <button
        className="embla__button embla__button--next"
        onClick={scrollNext}
        disabled={!nextBtnEnabled}
      >
        <span>↓</span>
      </button>
    </div>
  );
};

export default TeamCarousel;
