import React, { ChangeEvent, useRef, useLayoutEffect } from "react";

import cx from "clsx";

import classes from "./Textarea.module.scss";
import { Text } from "../Text/Text";

interface IProps {
  name?: string;
  value: string;
  multiline?: boolean;
  disabled?: boolean;
  required?: boolean;
  onChange: (value: string) => void;
  onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
  maxLines?: number;
  placeholder?: string;
}

export function Textarea({
  name,
  value,
  multiline,
  disabled,
  required,
  onChange,
  onBlur,
  placeholder,
  maxLines = Infinity,
}: IProps) {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  useLayoutEffect(() => {
    if (textareaRef && textareaRef.current && multiline) {
      textareaRef.current.style.height = "0px";
      const { scrollHeight } = textareaRef.current;

      const height = Math.min(scrollHeight, maxLines * 24);

      textareaRef.current.style.height = `${height}px`;
    }
  });

  const textareaClassName = cx(classes.textarea, {
    [classes.textarea__singleline]: !multiline,
  });

  return (
    <div className={classes.textareaWrapper}>
      <textarea
        name={name}
        className={textareaClassName}
        value={value}
        placeholder=""
        onChange={(e) => onChange(e.target.value)}
        ref={textareaRef}
        onBlur={onBlur}
        disabled={disabled}
        required={required}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !multiline) e.preventDefault();
        }}
      />
      {placeholder && (
        <Text className={classes.textarea__placeholder}>{placeholder}</Text>
      )}
    </div>
  );
}
