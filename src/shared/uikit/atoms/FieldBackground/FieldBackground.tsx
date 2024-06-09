import cx from "clsx";

import classes from "./FieldBackground.module.scss";
import { Notification } from "../Notification";

interface IProps {
  field: React.ReactNode;
  details?: React.ReactNode;
  variant?: "field" | "subfield";
  fieldClassName?: string;
  spaceBetween?: boolean;
  withoutLabel?: boolean;
  errorMessage?: string;
}

export function FieldBackground({
  field,
  details,
  variant = "field",
  fieldClassName,
  spaceBetween,
  withoutLabel,
  errorMessage,
}: IProps) {
  return (
    <div className={classes.wrapper}>
      <div className={cx(classes.fieldBackground, classes[variant])}>
        {withoutLabel ? (
          <span
            className={cx(
              classes.fieldBackground__main,
              spaceBetween && classes.fieldBackground__main_spaceBetween,
              fieldClassName
            )}
          >
            {field}
          </span>
        ) : (
          <label
            className={cx(
              classes.fieldBackground__main,
              spaceBetween && classes.fieldBackground__main_spaceBetween,
              fieldClassName
            )}
          >
            {field}
          </label>
        )}

        {details ? (
          <div className={classes.fieldBackground__details}>{details}</div>
        ) : null}
      </div>

      {errorMessage && <Notification iconColor="red" text={errorMessage} />}
    </div>
  );
}
