"use client";

import { Text } from "@/shared/uikit/atoms/Text";
import Link from "next/link";

import classes from "./index.module.scss";
import { useQuery } from "@tanstack/react-query";
import { getOnboardingQuery } from "@/entities/onboarding/queries";
import { DoatsLoader } from "@/shared/uikit/atoms/Loader";

export function QuestRedirect() {
  const { data, isPending } = useQuery(getOnboardingQuery());

  if (data) {
    return (
      <div className={classes.container}>
        <Text color="white" variant="h1">
          Переезд в {data.countryTitleFormated}
        </Text>

        <Link href="/quest/relocate" className={classes.link}>
          <Text variant="button">Перейти</Text>
        </Link>
      </div>
    );
  }

  return (
    <div className={classes.container}>
      {isPending && <DoatsLoader />}
      <div className={classes.textWrapper}>
        <Text color="white" variant="h1">
          Выберите страну для переезда
        </Text>
        <Text color="white" variant="large" className={classes.description}>
          Расскажем по пунктам, как&nbsp;безопасно переехать
          в&nbsp;новое&nbsp;место
        </Text>
      </div>

      <Link href="/onboarding/country" className={classes.link}>
        <Text variant="button">Начать</Text>
      </Link>
    </div>
  );
}
