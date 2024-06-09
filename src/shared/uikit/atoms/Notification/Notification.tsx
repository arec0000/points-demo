import cx from "clsx";
import { Icon24Px, Icon24PxColor } from "../Icon24Px";
import { Text } from "../Text";

import classes from "./Notification.module.scss";

interface IProps {
  iconColor: Icon24PxColor;
  text?: string;
  className?: string;
}

export function Notification({ text, iconColor, className }: IProps) {
  return (
    <div className={cx(classes.notification, className)}>
      <Icon24Px name="info" color={iconColor} />
      <Text className={classes.text} variant="middle">
        {text}
      </Text>
    </div>
  );
}
