import { getQuestData } from "@/entities/quest/actions";
import { Quest } from "@/widgets/Quest";
import { Menu } from "@/features/Menu";
import { TopNavBar } from "@/features/TopNavBar";
import { Layout } from "@/shared/uikit/atoms/Layout";
import { notFound } from "next/navigation";

export const revalidate = 2;

export async function generateStaticParams() {
  return [{ slug: "relocate" }];
}

export default async function QuestPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const data = await getQuestData(slug);

  if (!data) {
    notFound();
  }

  return (
    <>
      <TopNavBar title={`Квест: ${data.title}`} withMenu />
      <Layout withMenu withTopNavBar width="lg">
        <Menu />
        <Quest data={data.subquestGroups} slug={slug} />
      </Layout>
    </>
  );
}
