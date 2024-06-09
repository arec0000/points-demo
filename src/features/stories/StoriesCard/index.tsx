import { Text } from "@/shared/uikit/atoms/Text";
import classes from "./index.module.scss";
import { Color } from "@/shared/types";

export function StoriesCard({
  url,
  poster,
  label,
  labelLines,
  labelColor,
  onClick,
}: {
  url?: string;
  poster?: string;
  label?: string;
  labelLines?: number;
  labelColor?: Color;
  onClick?: () => void;
}) {
  return (
    <button className={classes.container} onClick={onClick}>
      <video
        className={classes.storiesCard}
        src={url}
        poster={poster}
        muted
        autoPlay
        loop
      />
      {label && (
        <Text
          className={classes.label}
          color={labelColor ?? "white"}
          maxLines={labelLines}
        >
          {label}
        </Text>
      )}
    </button>
  );
}
