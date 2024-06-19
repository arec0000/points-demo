import { Size } from "../types";

export function isReservedSize(size: string | undefined): size is Size {
  return ["xs", "sm", "md", "lg", "xl", "2xl"].includes(size!);
}
