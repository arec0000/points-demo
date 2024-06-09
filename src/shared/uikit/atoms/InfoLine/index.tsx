import cx from "clsx";

import { Text } from "../Text";

import classes from "./index.module.scss";
import Image from "next/image";

export function InfoLine({
  label,
  value,
  variant = "primary",
  lines = 1,
  topImage,
  leftImage,
}: {
  label: string;
  value?: string;
  variant?: "primary" | "secondary";
  lines?: number;
  topImage?: {
    src: string;
    alt: string;
  };
  leftImage?: {
    src: string;
    alt: string;
  };
}) {
  return (
    <div className={cx(classes.wrapper, classes[variant])}>
      {topImage && (
        <div className={classes.topImage}>
          <Image src={topImage.src} alt={topImage.alt} fill sizes="25vw" />
        </div>
      )}
      <div
        className={cx(
          classes.container,
          value === undefined && classes.withoutValue,
        )}
      >
        <div className={classes.labelWrapper}>
          {leftImage && (
            <div className={classes.leftImage}>
              <Image
                src={leftImage.src}
                alt={leftImage.alt}
                fill
                sizes="25vw"
              />
            </div>
          )}
          <Text
            variant={value ? "large" : "h4"}
            className={classes.text}
            style={{ WebkitLineClamp: lines }}
          >
            {label}
          </Text>
        </div>
        {value && (
          <Text
            variant="large"
            className={cx(classes.text, classes.value)}
            style={{ WebkitLineClamp: lines }}
          >
            {value}
          </Text>
        )}
      </div>
    </div>
  );
}
