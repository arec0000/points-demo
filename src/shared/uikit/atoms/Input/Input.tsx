import cx from "clsx";

import classes from "./Input.module.scss";
import { Text } from "../Text";

interface IProps {
  id?: string;
  type?: "text" | "email" | "password";
  className?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  name?: string;
}

export function Input({
  id,
  type = "text",
  className,
  placeholder = "",
  value = "",
  onChange,
  disabled,
  name,
}: IProps) {
  return (
    <span className={classes.inputWrapper}>
      <input
        className={cx(classes.input, className)}
        id={id}
        type={type}
        value={value}
        onChange={onChange ? (e) => onChange(e.target.value) : undefined}
        disabled={disabled}
        name={name}
        placeholder=""
      />
      {placeholder && (
        <Text className={classes.input__placeholder}>{placeholder}</Text>
      )}
    </span>
  );
}
