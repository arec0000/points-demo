import cx from "clsx";

import classes from "./RadioButton.module.scss";

type IProps = {
  name: string;
  value: string;
  checked: boolean;
  onChange: (value: string) => void;
  disabled?: boolean;
  required?: boolean;
  variant?: "primary" | "secondary";
};

export function RadioButton({
  name,
  value,
  checked,
  onChange,
  disabled,
  required,
  variant = "primary",
}: IProps) {
  return (
    <input
      className={cx(classes.input, classes[`input_${variant}`])}
      type="radio"
      name={name}
      value={value}
      checked={checked}
      onChange={(e) => onChange(e.target.value)}
      disabled={disabled}
      required={required}
    />
  );
}
