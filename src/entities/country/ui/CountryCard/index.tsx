import Image from "next/image";
import Link from "next/link";

import { Text } from "@/shared/uikit/atoms/Text";
import { Icon32Px } from "@/shared/uikit/atoms/Icon32Px";
import { InfoLine } from "@/shared/uikit/atoms/InfoLine";

import classes from "./index.module.scss";

export function CountryCard({
  slug,
  title,
  thumbnail,
  info,
}: {
  slug: string;
  title: string;
  thumbnail?: { src: string; alt: string };
  info?: { label: string; value: string }[];
}) {
  return (
    <Link href={`/onboarding/country/${slug}`} className={classes.container}>
      <div className={classes.titleWrapper}>
        <Text className={classes.title} variant="h3">
          {title}
        </Text>
        <Icon32Px name="arrowForward" />
      </div>

      {(thumbnail || info?.length) && (
        <div className={classes.content}>
          {thumbnail && (
            <div className={classes.thumbnail}>
              <Image
                src={thumbnail.src}
                alt={thumbnail.alt}
                fill
                sizes="80vw"
              />
            </div>
          )}

          {info?.length && (
            <ul className={classes.info}>
              {info.slice(0, 3).map(({ label, value }, i) => (
                <li key={i}>
                  <InfoLine label={label} value={value} variant="secondary" />
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </Link>
  );
}
