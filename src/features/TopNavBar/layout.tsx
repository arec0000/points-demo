import classes from "./index.module.scss";

import util from "@/shared/styles/util.module.scss";
import { Size } from "@/shared/types";

import cx from "clsx";

export function TopNavBarLayout({
  children,
  className,
  mb = "sm",
}: {
  children: [React.ReactNode, React.ReactNode];
  className?: string;
  mb?: Size;
}) {
  return (
    <div className={cx(classes.topNavBarLayout, util[`mb_${mb}`], className)}>
      {children}
    </div>
  );
}
