"use client";

import type { Task } from "@/shared/api/content/schemas/task.schema";

import cx from "clsx";

import classes from "./index.module.scss";
import util from "@/shared/styles/util.module.scss";
import { LoadDataButton } from "@/shared/uikit/atoms/LoadDataButton";
import { useState } from "react";
import { Button } from "@/shared/uikit/atoms/Button";
import { UploadedImageInput } from "@/shared/uikit/atoms/UploadedImageInput";
import { Text } from "@/shared/uikit/atoms/Text";
import { TopNavBar } from "@/features/TopNavBar";
import { Layout } from "@/shared/uikit/atoms/Layout";
import { Breadcrumbs } from "@/shared/uikit/atoms/Breadcrumbs";
import { useRouter } from "next/navigation";
import { useIsDesktop } from "@/shared/lib/useIsDesktop";
import { Menu } from "@/features/Menu";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  getPostTaskMutation,
  getPutTaskMutation,
} from "../../entities/quest/mutations";
import { DoatsLoader } from "@/shared/uikit/atoms/Loader";
import { getTaskQuery } from "../../entities/quest/queries";

export function Task({
  type,
  blocks,
  questTitle,
  questSlug,
  taskTitle,
  taskId,
  slug,
}: {
  type: Task["type"];
  blocks: React.ReactNode[] | undefined;
  questTitle: string;
  questSlug: string;
  taskTitle: string;
  taskId: string;
  slug: string;
}) {
  const isDesktop = useIsDesktop();
  const router = useRouter();

  const [file, setFile] = useState<File | null>();

  const { data, isPending: isDataPending } = useQuery(getTaskQuery(taskId));

  const { mutate: postTask, isPending: isPostPending } = useMutation(
    getPostTaskMutation(() => router.push(`/quest/${slug}`)),
  );
  const { mutate: putTask, isPending: isPutPending } = useMutation(
    getPutTaskMutation(() => router.push(`/quest/${slug}`)),
  );

  const breadcrumbs = [
    {
      text: `Квест: ${questTitle}`,
      onClick: () => router.push(`/quest/${questSlug}`),
    },
    {
      text: taskTitle,
    },
  ];

  const title = isDesktop ? (
    <Breadcrumbs breadcrumbs={breadcrumbs} />
  ) : (
    questTitle
  );

  const button =
    type === "simple" || file || data?.file ? (
      <Button
        text={data?.file ? "Изменить" : "Готово"}
        className={cx(classes.button, isDesktop && classes.widthMenu)}
        onClick={() => {
          if (data?.file) {
            putTask({ taskId, file });
          } else {
            postTask({ taskId, file });
          }
        }}
        disabled={Boolean(data?.file && !file)}
      />
    ) : (
      <LoadDataButton
        label="Добавить фото документа"
        onChange={setFile}
        className={cx(classes.button, isDesktop && classes.widthMenu)}
      />
    );

  const isPending = isPostPending || isPutPending || isDataPending;

  return (
    <>
      {isDesktop && <Menu />}
      <TopNavBar title={title} withMenu />
      <Layout withTopNavBar withMenu={isDesktop} width="lg">
        {isPending && <DoatsLoader />}
        <div className={cx(util.flex, util.flexCol, util.grow, util.gap_lg)}>
          {blocks}

          {(file ?? data?.file) && (
            <div
              className={cx(
                util.flex,
                util.flexCol,
                util.gap_lg,
                classes.uploaded,
              )}
            >
              <Text variant="h3">Загруженный документ</Text>
              <UploadedImageInput
                imageFile={file}
                src={data?.file}
                onChange={setFile}
              />
            </div>
          )}

          {button}
        </div>
      </Layout>
    </>
  );
}
