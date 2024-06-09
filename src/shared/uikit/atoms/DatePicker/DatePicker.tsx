import { MantineProvider } from "@mantine/core";
import { DateInput, DateInputProps } from "@mantine/dates";

import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import classes from "./DatePicker.module.scss";

interface IProps {
  value?: Date | null;
  onChange?: (selectedDate: Date | null) => void;
  disabled?: boolean;
  placeholder?: string;
}

export function DatePicker({ value, onChange, disabled, placeholder }: IProps) {
  return (
    <MantineProvider>
      <DateInput
        value={value}
        onChange={onChange}
        valueFormat="DD.MM.YYYY"
        placeholder={placeholder}
        classNames={{
          input: classes.input,
        }}
        aria-label="date entry"
        styles={{
          input: {
            padding: 0,
            background: disabled ? "#cfcfcf" : "",
            fontFamily: "inter, sans-serif",
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "24px",
          },
        }}
      />
    </MantineProvider>
  );
}
