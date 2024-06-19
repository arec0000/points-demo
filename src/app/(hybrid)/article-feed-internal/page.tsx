import { articleDashboardReader } from "@/entities/article/model";
import { Menu } from "@/features/Menu";
import { ContentBlockAdapter } from "@/features/content";
import { renderContentBlock } from "@/features/content/contentBlock";
import { FullscreenNotice } from '@/features/FullscreenNotice';
import { Layout } from "@/shared/uikit/atoms/Layout";
import { Metadata } from "next";

export const revalidate = 2;

export const metadata: Metadata = {
  title: "Points Media",
};

export default async function ArticleFeedInternalPage() {
  const data = await articleDashboardReader.get();

  if (!data) {
    return (
      <FullscreenNotice
        type="error"
        title="Ошибка, данные страницы не найдены"
      />
    );
  }

  const contentBlockAdapter = new ContentBlockAdapter();

  const blocksData = await contentBlockAdapter.map(data.blocks);

  return (
    <Layout withMenu>
      <Menu />
      <div>
        {blocksData?.map(
          (blockData) =>
            blockData && renderContentBlock(blockData.type, blockData.data),
        )}
      </div>
    </Layout>
  );
}
