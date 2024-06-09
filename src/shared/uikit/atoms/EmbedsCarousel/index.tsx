import { Slider } from "@/shared/uikit/atoms/Slider";
import { Text } from "@/shared/uikit/atoms/Text";
import Image from "next/image";
import Link from "next/link";

import classes from "./index.module.scss";

import util from "@/shared/styles/util.module.scss";
import { Size } from "@/shared/types";

export function EmbedsCarousel({
  items,
  mb = "sm",
}: {
  items: {
    title: string;
    href: string;
    thumbnail?: {
      src: string;
      alt: string;
    };
  }[];
  mb?: Size;
}) {
  return (
    <Slider wrapperClassName={util[`mb_${mb}`]}>
      {items.map((item, i) => (
        <Link key={i} href={item.href} className={classes.card}>
          {item.thumbnail && (
            <div className={classes.thumbnail}>
              <Image
                src={item.thumbnail.src}
                alt={item.thumbnail.alt}
                fill
                sizes="40vw"
              />
            </div>
          )}

          <Text className={classes.text}>{item.title}</Text>
        </Link>
      ))}
    </Slider>
  );
}
