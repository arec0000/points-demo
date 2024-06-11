import { isReservedColor } from "@/shared/lib/isReservedColor";
import { type CSSProperties, createElement } from "react";
import cx from "clsx";

import classes from "@/shared/uikit/atoms/Text/Text.module.scss";

export function Text({
  children,
  style,
  as = "p",
  color = "inherit",
}: {
  children?: React.ReactNode;
  style?: CSSProperties;
  as?: string;
  color?: string;
}) {
  const isReserved = isReservedColor(color);

  return createElement(
    as,
    {
      style: {
        color: !isReserved ? color : undefined,
        ...style,
      },
      className: cx(classes.text, isReserved && classes[color]),
    },
    children,
  );
}
