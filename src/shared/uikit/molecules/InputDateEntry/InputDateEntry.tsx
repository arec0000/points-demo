import cx from "clsx";

import { DatePicker } from "../../atoms/DatePicker/DatePicker";
import { Icon32Px } from "../../atoms/Icon32Px";

import classes from "./InputDateEntry.module.scss";
import { Text } from "../../atoms/Text";

interface IProps {
  disabled?: boolean;
  value?: Date | null;
  onChange?: (selectedDate: Date | null) => void;
  placeholder?: string;
}
export function InputDateEntry({
  disabled,
  value,
  onChange,
  placeholder,
}: IProps) {
  return (
    <span className={classes.wrapper}>
      <DatePicker onChange={onChange} disabled={disabled} value={value} />

      {placeholder && (
        <Text
          className={cx(classes.placeholder, value && classes.placeholder_top)}
        >
          {placeholder}
        </Text>
      )}

      <Icon32Px name="calendar" />
    </span>
  );
}
