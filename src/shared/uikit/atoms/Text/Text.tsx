import React, { ComponentProps } from "react";

import cx from "clsx";

import type { TextVariant, TextElement } from "./types";

import classes from "./Text.module.scss";
import { Color } from "@/shared/types";

interface IProps<E extends TextElement = "span"> {
  children: React.ReactNode;
  variant?: TextVariant;
  as?: E;
  className?: string;
  maxLines?: number;
  color?: Color;
}

type TextProps<E extends TextElement> = IProps<E> &
  Omit<ComponentProps<E>, keyof IProps<E>>;

export function Text<E extends TextElement = "span">({
  variant = "pill",
  color = "black",
  as,
  children,
  className,
  maxLines,
  ...props
}: TextProps<E>) {
  const inlineStyle =
    (maxLines && {
      WebkitLineClamp: maxLines,
      WebkitBoxOrient: "vertical",
      display: "-webkit-box",
      overflow: "hidden",
      ...props.style,
    }) ||
    props.style;

  return React.createElement(
    as ?? "span",
    {
      ...props,
      style: inlineStyle,
      className: cx(classes.text, classes[variant], classes[color], className),
    },
    children,
  );
}
