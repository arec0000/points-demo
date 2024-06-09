import { Logo } from "@/shared/uikit/atoms/Logo";

import classes from "./index.module.scss";

export function MenuLayout({ children }: { children: React.ReactNode[] }) {
  return (
    <nav className={classes.menuLayout}>
      <div className={classes.menuLayout__logo}>
        <Logo />
      </div>
      <ul className={classes.menuLayout__list}>
        {children.map((child, i) => (
          <li key={i}>{child}</li>
        ))}
      </ul>
    </nav>
  );
}
