"use client";

import { useState } from "react";

import cx from "clsx";

import { Icon32Px } from "@/shared/uikit/atoms/Icon32Px";
import { Text } from "@/shared/uikit/atoms/Text";

import classes from "./index.module.scss";
import { useRouter } from "next/navigation";

export function SubquestCard({
  title,
  state,
  onClick,
  className,
  disabled,
  tasks,
  route,
  arrow = true,
}: {
  title: string;
  state: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  tasks?: React.ReactNode[] | boolean;
  route?: string;
  arrow?: boolean;
}) {
  const router = useRouter();

  const [isOpened, setIsOpened] = useState(false);

  function handleClick() {
    if (tasks) {
      setIsOpened((current) => !current);
    } else {
      if (route) {
        router.push(route);
        return;
      }

      onClick?.();
    }
  }

  return (
    <div className={classes.wrapper}>
      <button
        className={cx(classes.subquest, className)}
        type="button"
        onClick={handleClick}
        disabled={disabled}
      >
        <div className={classes.subquest__content}>
          {state}

          <Text as="h2" variant="large">
            {title}
          </Text>
        </div>

        {arrow && (
          <div
            className={cx(classes.subquest__icon, {
              [classes.subquest__icon_closed]: tasks && !isOpened,
              [classes.subquest__icon_opened]: tasks && isOpened,
            })}
          >
            <Icon32Px name="arrowForward" color="blue" />
          </div>
        )}
      </button>

      {(isOpened || arrow === false) && tasks}
    </div>
  );
}
