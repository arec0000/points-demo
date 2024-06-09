"use client";

import cx from "clsx";

import { Text } from "../Text";

import classes from "./index.module.scss";
import { useState } from "react";
import { Size } from "@/shared/types";

import util from "@/shared/styles/util.module.scss";

export function Tabs<T extends string>({
  options,
  tabs,
  initial,
  gap = "lg",
}: {
  options: { label: string; value: T }[];
  tabs: Record<T, React.ReactNode>;
  initial?: T;
  gap?: Size;
}) {
  const [tab, setTab] = useState<T | undefined>(initial);

  function handleChange(value: T) {
    setTab(value);
  }

  return (
    <div className={cx(util.flex, util.flexCol, util[`gap_${gap}`])}>
      <ul className={classes.container}>
        {options.map((option) => (
          <li key={option.value} className={classes.itemWrapper}>
            <button
              className={cx(
                classes.item,
                option.value === tab && classes.active,
              )}
              onClick={() => handleChange(option.value)}
            >
              <Text
                color={option.value === tab ? "white" : "black"}
                variant="h4"
              >
                {option.label}
              </Text>
            </button>
          </li>
        ))}
      </ul>

      {tab && tabs[tab]}
    </div>
  );
}
