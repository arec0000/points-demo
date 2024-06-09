import { Text } from "../Text";
import classes from "./index.module.scss";
import cx from "clsx";

export function Tag({
  children,
  isHighlighted,
}: {
  children: React.ReactNode;
  isHighlighted?: boolean;
}) {
  return (
    <Text
      variant="small"
      className={cx(classes.tag, isHighlighted && classes.highlighted)}
      color={isHighlighted ? "white" : undefined}
    >
      {children}
    </Text>
  );
}
