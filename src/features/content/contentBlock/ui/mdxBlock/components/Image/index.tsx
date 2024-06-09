import NextImage from "next/image";

import { Text } from "@/shared/uikit/atoms/Text";

import classes from "./index.module.scss";

export function Image({
  src,
  alt,
  description,
  textAlign,
}: {
  src: string;
  alt: string;
  description?: string;
  textAlign?: "start" | "center" | "end";
}) {
  return (
    <div className={classes.block}>
      <div className={classes.imageWrapper}>
        <NextImage src={src} alt={alt} fill sizes="90vw" />
      </div>
      {description !== undefined && (
        <Text color="gray70" style={{ textAlign }}>
          {description}
        </Text>
      )}
    </div>
  );
}
