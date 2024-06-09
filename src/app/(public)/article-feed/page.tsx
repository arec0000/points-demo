import type { Metadata } from "next";

import { articleDashboardReader } from "@/entities/article/model";
import { ContentBlockAdapter } from "@/features/content";
import { renderContentBlock } from "@/features/content/contentBlock";
import { FullscreenNotice } from "@/shared/uikit/atoms/FullscreenNotice";

export const revalidate = 2;

export const metadata: Metadata = {
  title: "Points Media",
};

export default async function ArticleFeedPage() {
  const data = await articleDashboardReader.get();

  if (!data) {
    return (
      <FullscreenNotice
        type="error"
        title="Ошибка, данные страницы не найдены"
      />
    );
  }

  const contentBlockAdapter = new ContentBlockAdapter("article");

  const blocksData = await contentBlockAdapter.map(data.blocks);

  return (
    <div>
      {blocksData?.map(
        (blockData) =>
          blockData && renderContentBlock(blockData.type, blockData.data),
      )}
    </div>
  );
}
