import { Article } from "@/entities/article/ui/article";
import { notFound } from "next/navigation";
import { ContentBlockAdapter } from "@/features/content";
import { ARTICLES_DIR } from "@/entities/article/constants";
import { renderContentBlock } from "@/features/content/contentBlock";
import { articleReader } from "@/entities/article/model";
import type { Metadata } from "next";
import { getSlugs } from "@/shared/api/content/lib/getSlugs";
import { Suspense } from "react";
import { DoatsLoader } from "@/shared/uikit/atoms/Loader";

export const revalidate = 2;

export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const articleData = await articleReader.get(slug);

  return {
    title: articleData?.title,
    description: articleData?.description,
    keywords: articleData?.keywords,
  } satisfies Metadata;
}

export async function generateStaticParams() {
  const slugs = await getSlugs(ARTICLES_DIR);
  return slugs.map((slug) => ({ slug }));
}

export default async function ArticlePage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const articleData = await articleReader.get(slug);

  if (!articleData) {
    notFound();
  }

  const contentBlockAdapter = new ContentBlockAdapter();

  const blocksData = await contentBlockAdapter.map(articleData.blocks);

  const bloks = blocksData?.map(
    (blockData) =>
      blockData && renderContentBlock(blockData.type, blockData.data),
  );

  return (
    <Suspense fallback={<DoatsLoader />}>
      <Article data={articleData} blocks={bloks} />
    </Suspense>
  );
}
