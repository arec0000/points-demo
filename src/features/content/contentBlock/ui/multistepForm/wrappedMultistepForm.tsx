"use client";

import { useEffect, useRef } from "react";
import { FormBlock } from "../formBlock";
import { useStep } from "@/shared/lib/useStep";
import { useTemporaryPersist } from "@/shared/lib/useTemporaryPersist";

import util from "@/shared/styles/util.module.scss";
import cx from "clsx";
import { ProgressBar } from "@/shared/uikit/atoms/ProgressBar";
import { FieldsValues } from "@/shared/lib/formFactory/types";

import { BlockData } from "../../types";
import { ajvResolver } from "@hookform/resolvers/ajv";
import { instance } from "@/shared/api/axios";
import { useMutation } from "@tanstack/react-query";
import { DoatsLoader } from "@/shared/uikit/atoms/Loader";

const INITIAL_STEP = 0;

export function WrappedMultistepForm({
  endpoint,
  steps,
  persist,
  scroll = false,
  searchParamKey,
  showProgress,
  persistKey = "formData",
  startProgress = 0,
  gap = "xl",
}: BlockData<"multistepForm">) {
  const { step, setStep, nextStep } = useStep({
    key: searchParamKey,
    scroll,
    initial: INITIAL_STEP,
  });

  const { value = [], storeValue } =
    useTemporaryPersist<FieldsValues[]>(persistKey);

  const data = useRef<FieldsValues[]>(persist ? value : []);

  useEffect(() => {
    if (step !== INITIAL_STEP && data.current[step - 1] === undefined) {
      setStep(INITIAL_STEP);
    }
  }, []);

  const { mutate, isPending } = useMutation({
    mutationFn: ({ endpoint, values }: { endpoint: string; values: object }) =>
      instance.post(endpoint, values),
  });

  const props = steps[step];

  function handleSubmit(values: FieldsValues) {
    data.current[step] = values;

    if (persist) {
      storeValue?.(data.current);
    }

    if (props.endpoint) {
      mutate({ endpoint: props.endpoint, values });
    }

    if (step === steps.length - 1) {
      mutate({ endpoint: endpoint, values: data.current });
    } else {
      nextStep();
    }
  }

  return (
    <div className={cx(util.flex, util.flexCol, util[`gap_${gap}`])}>
      {showProgress && (
        <ProgressBar progress={step + startProgress} max={steps.length} />
      )}

      <div className={util.relative}>
        <DoatsLoader visible={isPending} />
        <FormBlock<FieldsValues>
          key={step}
          {...props}
          resolver={ajvResolver(props.schema)}
          defaultValues={data.current[step] ?? props.defaultValues}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}
