import Image from "next/image";
import { Text } from "@/shared/uikit/atoms/Text";
import { images } from "./assets";

import classes from "./index.module.scss";

export function FullscreenNotice({
  type,
  title,
  description,
  show = true,
  children,
}: {
  type: keyof typeof images;
  title?: string;
  description?: string;
  show?: boolean;
  children?: React.ReactNode;
}) {
  if (!show) {
    return children;
  }

  const img = images[type];

  return (
    <div className={classes.wrapper}>
      <div className={classes.image}>
        <Image src={img.src} alt={img.alt} fill />
      </div>

      <div className={classes.textWrapper}>
        {title && <Text variant="h3">{title}</Text>}
        {description && <Text variant="large">{description}</Text>}
      </div>
    </div>
  );
}
