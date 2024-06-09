import Image from "next/image";
import { Text } from "@/shared/uikit/atoms/Text";
import { Tag } from "@/shared/uikit/atoms/Tag";

import classes from "./index.module.scss";
import Link from "next/link";
import { Size } from "@/shared/types";

import cx from "clsx";
import util from "@/shared/styles/util.module.scss";

export function Embed({
  href,
  title,
  tags,
  thumbnail,
  mb = "sm",
}: {
  href: string;
  title: string;
  tags?: string[];
  thumbnail?: {
    src: string;
    alt: string;
  };
  mb?: Size;
}) {
  return (
    <Link href={href} className={cx(classes.wrapper, util[`mb_${mb}`])}>
      {thumbnail && (
        <div className={classes.thumbnail}>
          <Image src={thumbnail.src} alt={thumbnail.alt} fill sizes="90vw" />
        </div>
      )}

      <div className={classes.bottom}>
        <Text variant="h3">{title}</Text>

        {tags && (
          <div className={classes.tags}>
            {tags.map((tag, i) => (
              <Tag key={tag} isHighlighted={i === 0}>
                {tag}
              </Tag>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}
