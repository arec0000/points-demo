import type { Article } from "@/shared/api/content/schemas/article.schema";
import { Text } from "@/shared/uikit/atoms/Text";
import classes from "./index.module.scss";
import { Tag } from "@/shared/uikit/atoms/Tag";
import Image from "next/image";
import { Slider } from "@/shared/uikit/atoms/Slider";

export function Article({
  data,
  blocks,
}: {
  data: Article;
  blocks: React.ReactNode[] | undefined;
}) {
  return (
    <div className={classes.article}>
      {data.thumbnail && (
        <div className={classes.thumbnail}>
          <Image
            src={data.thumbnail.src}
            alt={data.thumbnail.alt}
            fill
            sizes="90vw"
          />
        </div>
      )}

      <div className={classes.meta}>
        <Text variant="small" color="blue">
          {data.author}
        </Text>
        <Text variant="small" color="blue">
          {data.publishDate}
        </Text>
      </div>

      <div className={classes.titleWrapper}>
        <Text variant="h1" className={classes.title}>
          {data.title}
        </Text>

        {data.tags && (
          <Slider>
            {data.tags.map((tag, i) => (
              <Tag key={tag} isHighlighted={i === 0}>
                {tag}
              </Tag>
            ))}
          </Slider>
        )}
      </div>

      {blocks}
    </div>
  );
}
