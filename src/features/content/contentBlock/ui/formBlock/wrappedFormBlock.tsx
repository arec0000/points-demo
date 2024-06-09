"use client";

import { ajvResolver } from "@hookform/resolvers/ajv";

import type { BlockData } from "../../types";
import { FormBlock } from ".";
import { useMutation } from "@tanstack/react-query";
import { DoatsLoader } from "@/shared/uikit/atoms/Loader";

import util from "@/shared/styles/util.module.scss";
import { instance } from "@/shared/api/axios";
import { FieldsValues } from "@/shared/lib/formFactory/types";

export function WrappedFormBlock({ data }: { data: BlockData<"form"> }) {
  const { endpoint, schema, ...props } = data;

  const { mutate, isPending } = useMutation({
    mutationFn: (values: object) => instance.post(endpoint, values),
  });

  return (
    <div className={util.relative}>
      <DoatsLoader visible={isPending} />
      <FormBlock<FieldsValues>
        resolver={ajvResolver(schema)}
        onSubmit={mutate}
        {...props}
      />
    </div>
  );
}
