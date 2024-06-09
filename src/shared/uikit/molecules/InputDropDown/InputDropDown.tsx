import { useState, useRef, useEffect } from "react";

import cx from "clsx";

import { Icon32Px } from "../../atoms/Icon32Px";

import classes from "./InputDropDown.module.scss";
import { Text } from "../../atoms/Text";

interface IProps {
  disabled?: boolean;
  value?: string;
  onChange?: (value?: string) => void;
  options: {
    label: string;
    value: string;
  }[];
  placeholder?: string;
}

export function InputDropDown({
  value,
  onChange,
  disabled,
  options,
  placeholder,
}: IProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const inputHasValue = value !== "";

  const handleSelect = (v: string) => {
    onChange?.(v);
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const label =
    options.find((option) => option.value === value)?.label ?? placeholder;

  const isPlaceholder = label === placeholder;

  return (
    <span className={classes.wrapper}>
      <div
        ref={dropdownRef}
        className={cx(classes.container, {
          [classes.container_withValue]: inputHasValue,
          [classes.container_disabled]: disabled,
        })}
      >
        <button
          className={classes.dropdown__button}
          onClick={() => {
            setIsOpen(true);
          }}
          type="button"
        >
          <Text color={isPlaceholder ? "gray30" : undefined}>{label}</Text>
        </button>
        {isOpen && (
          <div className={classes.dropdown}>
            <ul className={classes.dropdown__list}>
              {options.map((item) => (
                <li
                  value={item.label}
                  key={item.value}
                  className={classes.dropdown__item}
                >
                  <button
                    className={classes.dropdown__button}
                    type="button"
                    onClick={(e) => {
                      handleSelect(item.value);
                    }}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className={classes.icon}>
        {isOpen ? <Icon32Px name="dropDownUp" /> : <Icon32Px name="dropDown" />}
      </div>
    </span>
  );
}
