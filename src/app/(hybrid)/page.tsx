import { storiesReader } from "@/entities/stories/model";
import { Menu } from "@/features/Menu";
import { MdxBlock } from "@/features/content/contentBlock/ui/mdxBlock";
import { Layout } from "@/shared/uikit/atoms/Layout";
import { QuestRedirect } from "@/widgets/QuestRedirect";
import { StoriesList } from "@/widgets/StoriesList";

export const revalidate = 2;

export default async function Main() {
  const storiesData = await storiesReader.get();

  const processedStoriesData = storiesData?.map((item) => ({
    ...item,
    steps: item.steps.map((step) => ({
      ...step,
      mdx: step.mdx && <MdxBlock content={step.mdx} />,
    })),
  }));

  return (
    <Layout withMenu>
      <StoriesList data={processedStoriesData} />
      <QuestRedirect />
      <Menu />
    </Layout>
  );
}
