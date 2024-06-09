import { Text } from "@/shared/uikit/atoms/Text";
import classes from "./index.module.scss";
import { InfoLine } from "@/shared/uikit/atoms/InfoLine";
import Link from "next/link";
import { sliceInfo } from "../../lib";

export function WayCard({
  parentSlug,
  slug,
  title,
  description,
  info,
}: {
  parentSlug: string;
  slug: string;
  title: string;
  description?: string;
  info?: {
    label: string;
    value?: string;
    cols?: 1 | 2;
    lines?: number;
    topImage?: { src: string; alt: string };
    leftImage?: { src: string; alt: string };
  }[];
}) {
  return (
    <div className={classes.container}>
      <Text variant="h3" maxLines={2}>
        {title}
      </Text>

      {description && (
        <Text variant="large" maxLines={2}>
          {description}
        </Text>
      )}

      {info?.length && (
        <ul className={classes.info}>
          {sliceInfo(info).map((item, i) => (
            <li
              key={i}
              style={
                item.cols ? { gridColumn: `span ${item.cols}` } : undefined
              }
            >
              <InfoLine
                label={item.label}
                value={item.value}
                topImage={item.topImage}
                lines={item.lines}
                leftImage={item.leftImage}
                variant="secondary"
              />
            </li>
          ))}
        </ul>
      )}

      <Link
        href={`/onboarding/country/${parentSlug}/${slug}`}
        className={classes.link}
      >
        <Text variant="button">Подробнее о ВНЖ</Text>
      </Link>
    </div>
  );
}
