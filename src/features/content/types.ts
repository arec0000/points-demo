import type { ContentBlock } from "@/shared/api/content/schemas/block.schema";
import type { BlockData, BlockType } from "./contentBlock/types";

type DataByType = {
  [D in ContentBlock as D["type"]]: D;
};

type TypeMap = {
  mdx: BlockType<"mdx">;
  articleEmbed: BlockType<"embed">;
  articleCarouselEmbed: BlockType<"embedsCarousel">;
  form: BlockType<"form">;
  multistepForm: BlockType<"multistepForm">;
};

export type ContentBlockType<
  T extends ContentBlock["type"] = ContentBlock["type"],
> = T;

export type ContentBlockData<T extends ContentBlockType = ContentBlockType> =
  DataByType[T];

export type ContentBlockMappers = {
  [T in ContentBlockType]: (data: ContentBlockData<T>) => Promise<
    | {
        type: TypeMap[T];
        data: BlockData<TypeMap[T]>;
      }
    | undefined
  >;
};
