import cx from "clsx";
import classes from "./Layout.module.scss";
import util from "@/shared/styles/util.module.scss";
import { Size } from "@/shared/types";

export function Layout({
  children,
  withMenu,
  withTopNavBar,
  withFixedButton = true,
  width = "md",
  gap = "md",
}: {
  children: React.ReactNode;
  withMenu?: boolean;
  withTopNavBar?: boolean;
  withFixedButton?: boolean;
  width?: "sm" | "md" | "lg";
  gap?: Size;
}) {
  return (
    <div
      className={cx(
        classes.layout,
        classes[`width_${width}`],
        util[`gap_${gap}`],
        withMenu && classes.withMenu,
        withTopNavBar && classes.withTopNavBar,
        withFixedButton && classes.withFixedButton,
      )}
    >
      {children}
    </div>
  );
}
