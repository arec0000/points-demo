"use client";

import cx from "clsx";

import { Text } from "@/shared/uikit/atoms/Text";
import { SubquestCard } from "@/entities/quest/ui/SubquestCard";
import { SubquestState } from "@/entities/quest/ui/SubquestState";
import type { Task as TaskData } from "@/shared/api/content/schemas/task.schema";

import util from "@/shared/styles/util.module.scss";
import { TaskCard } from "../../entities/quest/ui/TaskCard";
import { useIsDesktop } from "@/shared/lib/useIsDesktop";
import { ProgressPoints } from "@/shared/uikit/atoms/ProgressPoints/ProgressPoints";
import { useRouter } from "next/navigation";
import { DoatsLoader } from "@/shared/uikit/atoms/Loader";
import { getOnboardingQuery } from "@/entities/onboarding/queries";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { AxiosError } from "axios";
import { getTaskListQuery } from "../../entities/quest/queries";

export function Quest({
  slug,
  data,
}: {
  slug: string;
  data: {
    title: string;
    subquests: {
      slug: string;
      title: string;
      tasks: (TaskData & {
        slug: string;
      })[];
    }[];
  }[];
}) {
  const isDesktop = useIsDesktop();

  const router = useRouter();

  const { isPending: isOnboardingPending, error } =
    useQuery(getOnboardingQuery());

  const { data: taskListData, isPending: isTaskListPending } =
    useQuery(getTaskListQuery());

  const completedTasks = new Set(taskListData?.map((item) => item.id));

  const isPending = isOnboardingPending || isTaskListPending;

  useEffect(() => {
    if (error instanceof AxiosError && error.response?.status === 404) {
      router.push("/onboarding/country");
    }
  }, [error]);

  if (isPending) {
    return <DoatsLoader />;
  }

  const processed = data.map((group) => ({
    ...group,
    subquests: group.subquests.map((subquest) => {
      let completedTasksCount = 0;

      const tasks = subquest.tasks.map((task) => {
        const isCompleted = completedTasks.has(task.id);

        if (isCompleted) {
          completedTasksCount += 1;
        }

        return {
          ...task,
          isCompleted,
        };
      });

      return { ...subquest, tasks, completedTasksCount };
    }),
  }));

  const steps: { title: string; count: number; progress?: number }[] = [];

  processed.forEach((group) => {
    group.subquests.forEach((subquest) => {
      steps.push({
        title: subquest.title,
        progress: subquest.completedTasksCount,
        count: subquest.tasks.length,
      });
    });
  });

  return (
    <div className={cx(util.flex, util.flexCol, util.gap_2xl)}>
      {isDesktop && <ProgressPoints steps={steps} />}
      <div className={cx(util.flex, util.flexCol, util.gap_xl)}>
        {processed.map((group, i) => (
          <div key={i} className={cx(util.flex, util.flexCol, util.gap_lg)}>
            <Text variant="h2">{group.title}</Text>

            <div className={cx(util.flex, util.flexCol, util.gap_sm)}>
              {group.subquests.map((subquest, i) => (
                <SubquestCard
                  key={i}
                  title={subquest.title}
                  state={
                    <SubquestState
                      type="actual"
                      amountOfDoneTasks={subquest.completedTasksCount}
                      amountOfTasksToDo={subquest.tasks.length}
                    />
                  }
                  route={`/quest/${slug}/subquest/${subquest.slug}`}
                  tasks={
                    isDesktop &&
                    subquest.tasks.map(
                      (task, i) =>
                        task && (
                          <TaskCard
                            key={i}
                            title={task.title}
                            status={task.isCompleted ? "finished" : "available"}
                            route={`/quest/${slug}/task/${task.slug}`}
                          />
                        ),
                    )
                  }
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
