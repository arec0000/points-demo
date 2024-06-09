"use client";

import { FieldsValues } from "@/shared/lib/formFactory/types";
import { MultistepFormBlock } from "@/features/content/contentBlock/ui/multistepForm";
import { ajvResolver } from "@hookform/resolvers/ajv";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { getPostOnboardingMutation } from "../../mutations";
import { Onboarding } from "@/shared/api/content/schemas/onboarding.schema";
import { WithNestedFiles } from "@/shared/api/content/lib/getWithFilesData";
import { DefaultLayout } from "@/features/Layout";

export function OnboardingForm({
  data: {
    form: {
      steps,
      gap,
      persist,
      persistKey,
      scroll,
      searchParamKey,
      showProgress,
      startProgress,
    },
  },
  countryTitle,
}: {
  data: WithNestedFiles<Onboarding, "schema">;
  countryTitle: string;
}) {
  const router = useRouter();

  const { mutate, isPending } = useMutation(
    getPostOnboardingMutation(() => router.push("/quest/relocate")),
  );

  return (
    <DefaultLayout title="Переезд" isLoading={isPending}>
      <MultistepFormBlock<FieldsValues>
        showProgress={showProgress}
        startProgress={startProgress}
        steps={steps.map((step) => ({
          ...step,
          resolver: ajvResolver(step.schema),
        }))}
        persist={persist}
        gap={gap}
        scroll={scroll}
        persistKey={persistKey}
        searchParamKey={searchParamKey}
        onSubmit={() => mutate(countryTitle)}
      />
    </DefaultLayout>
  );
}
