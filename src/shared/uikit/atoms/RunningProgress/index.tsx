import cx from "clsx";

import util from "@/shared/styles/util.module.scss";

import classes from "./index.module.scss";
import { Size } from "@/shared/types";
import { isReservedColor } from "@/shared/lib/isReservedColor";

export function RunningProgress({
  height = "xxs",
  onNext,
  className,
  ...props
}: {
  count: number;
  duration: number[];
  index: number;
  height?: Size | "xxs";
  inactiveColor?: string;
  activeColor?: string;
  isPaused?: boolean;
  onNext?: () => void;
  className?: string;
}) {
  return (
    <div
      className={cx(classes.container, className, util[`height_${height}`])}
      onAnimationEnd={onNext}
    >
      {renderSteps(props)}
    </div>
  );
}

function renderSteps({
  count,
  index,
  duration,
  isPaused,
  inactiveColor = "gray70",
  activeColor = "white",
}: {
  count: number;
  index: number;
  duration: number[];
  isPaused?: boolean;
  inactiveColor?: string;
  activeColor?: string;
}) {
  const steps: React.ReactNode[] = [];

  const isInactiveReserved = isReservedColor(inactiveColor);
  const isActiveReserved = isReservedColor(activeColor);

  for (let i = 0; i < count; i += 1) {
    steps.push(
      <div
        key={i}
        className={cx(classes.step, isInactiveReserved && util[inactiveColor])}
        style={{
          color: isInactiveReserved ? undefined : inactiveColor,
        }}
      >
        <div
          className={cx(
            classes.filling,
            isActiveReserved && util[activeColor],
            i < index && classes.passed,
            i === index && classes.active,
            isPaused && classes.paused,
          )}
          style={{
            animationDuration: `${duration[i]}ms`,
            color: isActiveReserved ? undefined : activeColor,
          }}
        />
      </div>,
    );
  }

  return steps;
}
