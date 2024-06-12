"use client";

import cx from "clsx";

import classes from "./Slider.module.scss";
import { Icon32Px } from "../Icon32Px";
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react";
import { useEffect, useState } from "react";

export function Slider({
  children,
  className,
  innerClassName,
  wrapperClassName,
}: {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
  wrapperClassName?: string;
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    dragFree: true,
  });

  const [isBackDisabled, setIsBackDisabled] = useState(false);
  const [isNextDisabled, setIsNextDisabled] = useState(false);

  useEffect(() => {
    if (emblaApi) {
      const checkIsDisabled = (api: NonNullable<UseEmblaCarouselType[1]>) => {
        setIsBackDisabled(!api.canScrollPrev());
        setIsNextDisabled(!api.canScrollNext());
      };

      checkIsDisabled(emblaApi);

      emblaApi.on("reInit", checkIsDisabled).on("select", checkIsDisabled);

      return () => {
        emblaApi.off("reInit", checkIsDisabled).off("select", checkIsDisabled);
      };
    }
  }, [emblaApi]);

  function scroll(step = 0) {
    const inView = emblaApi?.slidesInView();

    const current = inView?.[0];

    if (current !== undefined) {
      emblaApi?.scrollTo(current + step);
    }
  }

  return (
    <div className={cx(classes.wrapper, wrapperClassName)}>
      {!isBackDisabled && (
        <button
          className={cx(classes.button, classes.back)}
          onClick={() => scroll()}
          tabIndex={-1}
        >
          <Icon32Px name="arrowBack" color="white" />
        </button>
      )}

      <div className={cx(classes.viewport, className)} ref={emblaRef}>
        <div className={cx(classes.container, innerClassName)}>{children}</div>
      </div>

      {!isNextDisabled && (
        <button
          className={cx(classes.button, classes.next)}
          onClick={() => scroll(2)}
          tabIndex={-1}
        >
          <Icon32Px name="arrowForward" color="white" />
        </button>
      )}
    </div>
  );
}
