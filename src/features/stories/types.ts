import { Color, Size } from "@/shared/types";

export type StoriesData = {
  steps: {
    url?: string;
    poster?: string;
    alt?: string;
    mdx?: React.ReactNode;
    duration?: number;
    background?: string;
    overlayBackground?: string;
    textColor?: Color;
    padding?: string;
    margin?: string;
    maxWidth?: Size;
    justify?: "start" | "center" | "end";
    align?: "stretch" | "start" | "center" | "end";
  }[];
  label?: string;
  labelLines?: number;
  labelColor?: Color;
  textColor?: Color;
  loop?: boolean;
  crossColor?: Color;
  posterIndex?: number;
  duration?: number;
  background?: string;
  overlayBackground?: string;
  padding?: string;
  margin?: string;
  maxWidth?: Size;
  justify?: "start" | "center" | "end";
  align?: "stretch" | "start" | "center" | "end";
}[];
