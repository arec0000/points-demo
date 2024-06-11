import { Color } from "../types";

export function isReservedColor(color: string): color is Color {
  return [
    "auto",
    "inherit",
    "white",
    "black",
    "gray90",
    "gray70",
    "gray30",
    "gray20",
    "blue",
    "blue30",
    "darkBlue",
    "darkBlue60",
    "darkBlue40",
    "spaceBlue",
    "lightBlue",
    "red",
    "pink",
    "purple",
    "orange",
    "primaryGradient",
  ].includes(color);
}
