import { questReader, subquestReader, taskReader } from "../model";

export async function getQuestData(slug: string) {
  const questData = await questReader.get(slug);

  if (!questData) {
    return undefined;
  }

  return {
    title: questData.title,
    subquestGroups: await Promise.all(
      questData.subquestGroups.map(async (group) => {
        const subquests = await subquestReader.getList(group.subquests);

        const proccedSubquests = await Promise.all(
          subquests.map(async (subquest) => ({
            ...subquest,
            tasks: await taskReader.getList(subquest.tasks),
          })),
        );

        return {
          title: group.title,
          subquests: proccedSubquests,
        };
      }),
    ),
  };
}

export async function getSubquestPageData(slug: string, subslug: string) {
  const questData = await questReader.get(slug);

  const hasRequestedSubquest = questData?.subquestGroups.some((group) =>
    group.subquests.some((subquest) => subquest === subslug),
  );

  if (!hasRequestedSubquest) {
    return undefined;
  }

  const subquestData = await subquestReader.get(subslug);

  if (!subquestData) {
    return undefined;
  }

  return {
    questTitle: questData!.title,
    title: subquestData.title,
    tasks: await taskReader.getList(subquestData.tasks),
  };
}
