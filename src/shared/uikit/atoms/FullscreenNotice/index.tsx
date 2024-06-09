import { Text } from "../Text";
import { icons } from "./assets";

import classes from "./index.module.scss";

export function FullscreenNotice({
  type,
  title,
  description,
  show = true,
  children,
}: {
  type: keyof typeof icons;
  title?: string;
  description?: string;
  show?: boolean;
  children?: React.ReactNode;
}) {
  if (!show) {
    return children;
  }

  const Icon = icons[type];

  return (
    <div className={classes.wrapper}>
      <div className={classes.icon}>
        <Icon />
      </div>

      <div className={classes.textWrapper}>
        {title && <Text variant="h3">{title}</Text>}
        {description && <Text variant="large">{description}</Text>}
      </div>
    </div>
  );
}
