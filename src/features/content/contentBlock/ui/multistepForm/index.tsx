"use client";

import { useEffect, useRef } from "react";
import { FormBlock } from "../formBlock";
import { useStep } from "@/shared/lib/useStep";
import { useTemporaryPersist } from "@/shared/lib/useTemporaryPersist";

import util from "@/shared/styles/util.module.scss";
import { Size } from "@/shared/types";
import cx from "clsx";
import { ProgressBar } from "@/shared/uikit/atoms/ProgressBar";
import type { FormBlockProps } from "../formBlock/types";
import { FieldsValues } from "@/shared/lib/formFactory/types";
import { DefaultValues } from "react-hook-form";

const INITIAL_STEP = 0;

export function MultistepFormBlock<V extends FieldsValues>({
  steps,
  onSubmit,
  searchParamKey,
  scroll = false,
  showProgress,
  persist,
  persistKey = "formData",
  startProgress = 0,
  gap = "xl",
}: {
  steps: FormBlockProps<V>[];
  onSubmit: (values: V[]) => void;
  searchParamKey?: string;
  scroll?: boolean;
  showProgress?: boolean;
  persist?: boolean;
  persistKey?: string;
  startProgress?: number;
  gap?: Size;
}) {
  const { step, setStep, nextStep } = useStep({
    key: searchParamKey,
    scroll,
    initial: INITIAL_STEP,
  });

  const { value = [], storeValue } = useTemporaryPersist<V[]>(persistKey);

  const data = useRef<V[]>(persist ? value : []);

  useEffect(() => {
    if (step !== INITIAL_STEP && data.current[step - 1] === undefined) {
      setStep(INITIAL_STEP);
    }
  }, []);

  const props = steps[step];

  function handleSubmit(values: V) {
    data.current[step] = values;

    if (persist) {
      storeValue?.(data.current);
    }

    props.onSubmit?.(values);

    if (step === steps.length - 1) {
      onSubmit(data.current);
    } else {
      nextStep();
    }
  }

  return (
    <div className={cx(util.flex, util.flexCol, util[`gap_${gap}`])}>
      {showProgress && (
        <ProgressBar progress={step + startProgress} max={steps.length} />
      )}

      <FormBlock
        key={step}
        {...props}
        defaultValues={
          (data.current[step] as DefaultValues<V>) ?? props.defaultValues
        }
        onSubmit={handleSubmit}
      />
    </div>
  );
}
