import { getQuestData } from "@/entities/quest/actions";
import { questReader, taskReader } from "@/entities/quest/model";
import { Task } from "@/widgets/Task";
import { ContentBlockAdapter } from "@/features/content";
import { renderContentBlock } from "@/features/content/contentBlock";
import { notFound } from "next/navigation";

export const revalidate = 2;

export async function generateStaticParams() {
  const questData = await getQuestData("relocate");

  const res: { slug: string; subslug: string }[] = [];

  questData?.subquestGroups.forEach((group) => {
    group.subquests.forEach((subquest) => {
      subquest.tasks.forEach((task) => {
        res.push({ slug: "relocate", subslug: task.slug });
      });
    });
  });

  return res;
}

export default async function TaskPage({
  params: { slug, subslug },
}: {
  params: { slug: string; subslug: string };
}) {
  const questData = await questReader.get(slug);
  const taskData = await taskReader.get(subslug);

  if (!questData || !taskData) {
    notFound();
  }

  const contentBlockAdapter = new ContentBlockAdapter();

  const blocksData = await contentBlockAdapter.map(taskData.blocks);

  const bloks = blocksData?.map(
    (blockData) =>
      blockData && renderContentBlock(blockData.type, blockData.data),
  );

  return (
    <Task
      slug={slug}
      type={taskData.type}
      blocks={bloks}
      questTitle={questData.title}
      questSlug={slug}
      taskTitle={taskData.title}
      taskId={taskData.id}
    />
  );
}
