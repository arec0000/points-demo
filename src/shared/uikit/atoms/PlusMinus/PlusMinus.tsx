import cx from "clsx";
import { Icon32Px } from "../Icon32Px";

import classes from "./PlusMinus.module.scss";

interface IProps {
  name: string;
  value: number;
  onChange: (value: number) => void;
  required?: boolean;
  min?: number;
  max?: number;
  variant?: "primary" | "secondary";
}

export function PlusMinus({
  name,
  value = 0,
  onChange,
  required,
  min,
  max,
  variant = "primary",
}: IProps) {
  function inc() {
    onChange(value + 1);
  }

  function dec() {
    onChange(value - 1);
  }

  // В данном случае handleChange не нужен, но react выкидывает ошибку если передать value без него
  // можно конечно передавать defaultValue или вообще забить, но хз как поведёт себя браузер
  function handleChange() {}

  return (
    <div className={classes.counter}>
      <button
        type="button"
        className={classes.counter__button}
        onClick={dec}
        disabled={min !== undefined ? value <= min : false}
      >
        <Icon32Px name="minus" color="blue" />
      </button>

      <div
        className={cx(
          classes.counter__inputWrapper,
          classes[`counter__inputWrapper_${variant}`]
        )}
      >
        <input
          className={classes.counter__input}
          type="number"
          name={name}
          value={value}
          onChange={handleChange}
          required={required}
          min={min}
          max={max}
        />
        <span className={classes.counter__inputReplacement}>{value}</span>
      </div>

      <button
        type="button"
        className={classes.counter__button}
        onClick={inc}
        disabled={max !== undefined ? value >= max : false}
      >
        <Icon32Px name="plus" color="blue" />
      </button>
    </div>
  );
}
