"use client";

import { Task as TaskData } from "@/shared/api/content/schemas/task.schema";
import { SubquestCard } from "../../entities/quest/ui/SubquestCard";
import { SubquestState } from "@/entities/quest/ui/SubquestState";
import { useRouter } from "next/navigation";
import { useIsDesktop } from "@/shared/lib/useIsDesktop";
import { TaskCard } from "../../entities/quest/ui/TaskCard";
import { getTaskListQuery } from "../../entities/quest/queries";
import { useQuery } from "@tanstack/react-query";
import { DoatsLoader } from "@/shared/uikit/atoms/Loader";

export function Subquest({
  slug,
  data,
}: {
  slug: string;
  data: {
    title: string;
    tasks: (
      | (TaskData & {
          slug: string;
        })
      | undefined
    )[];
  };
}) {
  const router = useRouter();
  const isDesktop = useIsDesktop();

  const { data: taskListData, isPending: isTaskListPending } =
    useQuery(getTaskListQuery());

  const completedTasks = new Set(taskListData?.map((item) => item.id));

  let completedCount = 0;

  const tasks = data.tasks.map((task) => {
    if (task) {
      const isCompleted = completedTasks.has(task.id);

      if (isCompleted) {
        completedCount += 1;
      }

      return { ...task, isCompleted };
    }
  });

  if (isDesktop) {
    router.push(`/quest/${slug}`);
  }

  if (isTaskListPending) {
    return <DoatsLoader />;
  }

  return (
    <SubquestCard
      title={data.title}
      arrow={false}
      state={
        <SubquestState
          type="actual"
          amountOfDoneTasks={completedCount}
          amountOfTasksToDo={data.tasks.length}
        />
      }
      tasks={tasks.map(
        (task, i) =>
          task && (
            <TaskCard
              key={i}
              title={task.title}
              status={task.isCompleted ? "finished" : "available"}
              route={`/quest/${slug}/task/${task.slug}`}
            />
          ),
      )}
    />
  );
}
