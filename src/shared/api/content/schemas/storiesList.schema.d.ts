/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type TextColor =
  | "auto"
  | "inherit"
  | "white"
  | "black"
  | "gray90"
  | "gray70"
  | "gray30"
  | "gray20"
  | "blue"
  | "blue30"
  | "darkBlue"
  | "darkBlue60"
  | "darkBlue40"
  | "spaceBlue"
  | "lightBlue"
  | "red"
  | "pink"
  | "purple"
  | "orange";
export type Color =
  | "auto"
  | "inherit"
  | "white"
  | "black"
  | "gray90"
  | "gray70"
  | "gray30"
  | "gray20"
  | "blue"
  | "blue30"
  | "darkBlue"
  | "darkBlue60"
  | "darkBlue40"
  | "spaceBlue"
  | "lightBlue"
  | "red"
  | "pink"
  | "purple"
  | "orange"
  | "primaryGradient";
export type Size = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
export type StoriesList = {
  steps: {
    video?: string;
    poster?: string;
    objectPosition?: {
      x: "left" | "center" | "right";
      y: "top" | "center" | "bottom";
    };
    alt?: string;
    mdx?: string;
    duration?: number;
    background?: string;
    overlayBackground?: string;
    textColor?: TextColor;
    padding?: string;
    margin?: string;
    maxWidth?: string;
    justify?: "start" | "center" | "end";
    align?: "stretch" | "start" | "center" | "end";
    borderRaius?: string;
  }[];
  card?: {
    label?: string;
    labelLines?: number;
    labelColor?: Color;
    video?: string;
    poster?: string;
    background?: string;
  };
  /**
   * Свойства прогресс бара
   */
  progress?: {
    height?: Size | "xxs";
    /**
     * Цвет неактивной части прогресса, по умолчанию серый
     */
    inactiveColor?: string;
    /**
     * Цвет активной части прогресса, по умолчанию белый
     */
    activeColor?: string;
  };
  objectPosition?: {
    x: "left" | "center" | "right";
    y: "top" | "center" | "bottom";
  };
  loop?: boolean;
  crossColor?: Color;
  textColor?: TextColor;
  duration?: number;
  background?: string;
  overlayBackground?: string;
  padding?: string;
  margin?: string;
  maxWidth?: string;
  justify?: "start" | "center" | "end";
  align?: "stretch" | "start" | "center" | "end";
  borderRaius?: string;
}[];
