import type { Color } from "@/shared/types";

import { icons } from "./assets";

export type Icon24PxColor = Extract<
  Color,
  | "inherit"
  | "black"
  | "gray90"
  | "gray70"
  | "gray30"
  | "gray20"
  | "blue"
  | "red"
  | "primaryGradient"
>;

export type Icon24PxName = keyof typeof icons;
