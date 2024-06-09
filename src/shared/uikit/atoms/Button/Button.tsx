import React, { MouseEvent } from "react";

import cx from "clsx";

import { Text } from "../Text/Text";

import classes from "./Button.module.scss";

type IProps = {
  text: React.ReactNode | string;
  variant?: "primary" | "secondary" | "danger";
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  type?: "button" | "submit";
  className?: string;
};

export function Button({
  text,
  variant = "primary",
  onClick,
  disabled,
  type = "button",
  className,
  ...IProps
}: IProps) {
  const buttonClassName = cx(classes.button, {
    [classes[variant]]: variant,
  });

  return (
    <button
      type={type}
      className={cx(buttonClassName, className)}
      onClick={onClick}
      disabled={disabled}
      {...IProps}
    >
      <Text variant="button" color="inherit">
        {text}
      </Text>
    </button>
  );
}
