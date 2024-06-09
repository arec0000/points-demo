"use client";

import { Icon32Px } from "@/shared/uikit/atoms/Icon32Px";
import { StatusIcon } from "@/shared/uikit/atoms/StatusIcon";
import { Status } from "@/shared/uikit/atoms/StatusIcon/types";
import { Text } from "@/shared/uikit/atoms/Text";

import classes from "./index.module.scss";
import { useRouter } from "next/navigation";

interface IProps {
  title: string;
  status: Status;
  onClick?: () => void;
  specificDateInfo?: string;
  specificDate?: string;
  route?: string;
}

export function TaskCard({
  title,
  specificDateInfo,
  specificDate,
  status,
  onClick,
  route,
}: IProps) {
  const router = useRouter();

  const isTaskNotAvailable = status === "notAvailable";
  const hasSpecificDate = status === "inProcessWithSpecificDate";
  const hasSpecificDateOrInfo = specificDate || specificDateInfo;

  function handleClick() {
    if (onClick) {
      onClick();
      return;
    }

    if (route) {
      router.push(route);
    }
  }

  return (
    <button
      className={classes.task}
      type="button"
      onClick={handleClick}
      disabled={isTaskNotAvailable}
    >
      <div className={classes.task__content}>
        <div className={classes.task__info}>
          <StatusIcon status={status} />

          <Text variant="large" color={isTaskNotAvailable ? "gray30" : "black"}>
            {title}
          </Text>
        </div>

        <div className={classes.task__icon}>
          <Icon32Px name="arrowForward" color="blue" />
        </div>
      </div>

      {hasSpecificDate && hasSpecificDateOrInfo && (
        <div className={classes.task__specificDate}>
          <Text variant="small" color="gray70">
            {specificDateInfo}
          </Text>

          <Text variant="small" color="black">
            {specificDate && <>({specificDate})</>}
          </Text>
        </div>
      )}
    </button>
  );
}
