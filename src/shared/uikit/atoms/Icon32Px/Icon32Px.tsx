import cx from "clsx";

import { icons, gradients } from "./assets";

import type { Icon32PxName } from "./types";

import classes from "./Icon32Px.module.scss";
import type { Color } from "@/shared/types";

interface IProps {
  name: Icon32PxName;
  color?: Color;
  style?: React.CSSProperties;
}

export function Icon32Px({ name, color = "gray90", style }: IProps) {
  const gradient = getGradient(color);
  return (
    <div className={cx(classes.icon, classes[color])} style={style}>
      {icons[name](gradient)}
    </div>
  );
}

function getGradient(color: string) {
  const gradient = {
    primaryGradient: gradients.primary,
  }[color];

  if (gradient) {
    return gradient();
  }

  return undefined;
}
