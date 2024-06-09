"use client";

import { CSSProperties, ChangeEvent, useRef } from "react";

import cx from "clsx";

import { Text } from "../Text";

import classes from "./LoadDataButton.module.scss";

type IProps = {
  label: string;
  onChange: (selectedFiles: File | null) => void;
  className?: string;
};

export function LoadDataButton({ label, onChange, className }: IProps) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const selectedFiles = Array.from(e.target.files).filter((file) => {
      const fileName = file.name.toLowerCase();
      return (
        fileName.endsWith(".jpg") ||
        fileName.endsWith(".png") ||
        fileName.endsWith(".svg")
      );
    });

    onChange(selectedFiles[0]);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };
  const fileInputStyles: CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    opacity: 0,
  };

  return (
    <div>
      <label className={cx(classes.file__label, className)}>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleInputChange}
          className={classes.input}
          multiple={false}
          accept=".jpg, .png, .svg"
          style={fileInputStyles}
        />
        <Text variant="button" color="inherit">
          {label}
        </Text>
      </label>
    </div>
  );
}
