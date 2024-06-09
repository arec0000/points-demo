import { getQuestData, getSubquestPageData } from "@/entities/quest/actions";
import { Subquest } from "@/widgets/Subquest";
import { Menu } from "@/features/Menu";
import { TopNavBar } from "@/features/TopNavBar";
import { Layout } from "@/shared/uikit/atoms/Layout";
import { notFound } from "next/navigation";

export const revalidate = 2;

export async function generateStaticParams() {
  const questData = await getQuestData("relocate");

  const res: { slug: string; subslug: string }[] = [];

  questData?.subquestGroups.forEach((group) => {
    group.subquests.forEach((subquest) => {
      res.push({ slug: "relocate", subslug: subquest.slug });
    });
  });

  return res;
}

export default async function SubquestPage({
  params: { slug, subslug },
}: {
  params: { slug: string; subslug: string };
}) {
  const data = await getSubquestPageData(slug, subslug);

  if (!data) {
    notFound();
  }

  return (
    <Layout withMenu withTopNavBar width="lg">
      <TopNavBar title={data.questTitle} />
      <Menu />
      <Subquest slug={slug} data={data} />
    </Layout>
  );
}
