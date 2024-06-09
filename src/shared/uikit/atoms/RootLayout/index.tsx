import cx from "clsx";

import util from "@/shared/styles/util.module.scss";

export function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={cx(util.flex, util.flexCol, util.hFull)}>{children}</div>
  );
}
