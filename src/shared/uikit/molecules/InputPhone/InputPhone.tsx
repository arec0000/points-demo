import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import flags from "react-phone-number-input/flags";

import classes from "./InputPhone.module.scss";
import { Text } from "../../atoms/Text";

interface IProps {
  value?: string;
  onChange?: (value?: string) => void;
  disabled?: boolean;
  label?: string;
}

export function InputPhone({ disabled, value, onChange, label }: IProps) {
  return (
    <span className={classes.inputWrapper}>
      {label && <Text className={classes.input__placeholder}>{label}</Text>}

      <PhoneInput
        international
        defaultCountry="RU"
        flags={flags}
        value={value}
        onChange={(v) => {
          onChange?.(v?.toString());
        }}
        className={classes.phoneInput}
        disabled={disabled}
        style={{
          alignItems: "center",
          "--PhoneInputCountryFlag-backgroundColor--loading": "transparent",
          "--PhoneInputCountryFlag-borderWidth": "2px",
          "--PhoneInputCountryFlag-borderColor": "#050556",
          "--PhoneInputCountryFlag-borderColor--focus": "#3851d2",
        }}
      />
    </span>
  );
}
