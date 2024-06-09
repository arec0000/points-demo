import cx from "clsx";

import { SubquestStates } from "./assets";

import classes from "./index.module.scss";

export function SubquestState({
  type,
  amountOfTasksToDo,
  amountOfDoneTasks,
}: {
  type: keyof typeof SubquestStates;
  amountOfDoneTasks?: number | string;
  amountOfTasksToDo?: number | string;
}) {
  const state = SubquestStates[type]({
    amountOfTasksToDo,
    amountOfDoneTasks,
  });
  return (
    <div
      className={cx(classes.subquestState, {
        [classes.subquestState_blue]: type === "actual",
      })}
    >
      {state}
    </div>
  );
}
