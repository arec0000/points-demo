import { articleReader } from "@/entities/article/model";
import type {
  ContentBlockData,
  ContentBlockType,
  ContentBlockMappers,
} from "./types";

export class ContentBlockAdapter {
  constructor(private articleRoute?: string) {
    this.articleRoute = articleRoute ?? "article-internal";
  }

  private articleReader = articleReader;

  private mappers: ContentBlockMappers = {
    mdx: async (data) => {
      return {
        type: "mdx",
        data: {
          content: data.content,
        },
      };
    },
    articleEmbed: async (data) => {
      const articleData = await this.articleReader.get(data.slug);

      if (!articleData) {
        return undefined;
      }

      return {
        type: "embed",
        data: {
          href: `/${this.articleRoute}/${data.slug}`,
          title: articleData?.title,
          tags: articleData.tags,
          thumbnail: articleData.thumbnail,
          mb: data.mb,
        },
      };
    },
    articleCarouselEmbed: async (data) => {
      const articleListData = await this.articleReader.getList(data.slugs);

      if (!articleListData.length) {
        return undefined;
      }

      return {
        type: "embedsCarousel",
        data: {
          items: articleListData.map((articleData) => ({
            href: `/${this.articleRoute}/${articleData.slug}`,
            title: articleData.title,
            thumbnail: articleData.thumbnail,
          })),
          mb: data.mb,
        },
      };
    },
    form: async (data) => {
      return { type: "form", data };
    },
    multistepForm: async (data) => {
      return {
        type: "multistepForm",
        data,
      };
    },
  };

  private mapData = <T extends ContentBlockType>(
    type: T,
    data: ContentBlockData<T>,
  ) => this.mappers[type](data);

  map = (blocks: ContentBlockData[] | undefined) => {
    if (!blocks) {
      return undefined;
    }

    return Promise.all(blocks.map((block) => this.mapData(block.type, block)));
  };
}
