"use client";

import { formFactory } from "@/shared/lib/formFactory";
import type { FormBlockConfig, FormBlockExtraProps } from "./types";

import { components } from "./components";
import { layout } from "./layout";

export const FormBlock = formFactory<FormBlockConfig, FormBlockExtraProps>({
  components,
  layout,
});
