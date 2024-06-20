import { Text } from "@/shared/uikit/atoms/Text";
import classes from "./index.module.scss";
import { Color } from "@/shared/types";

export function StoriesCard({
  video,
  poster,
  background,
  label,
  labelLines,
  labelColor,
  onClick,
}: {
  video?: string;
  poster?: string;
  background?: string;
  label?: string;
  labelLines?: number;
  labelColor?: Color;
  onClick?: () => void;
}) {
  return (
    <button
      className={classes.container}
      onClick={onClick}
      style={{ background }}
    >
      <video
        className={classes.storiesCard}
        src={video}
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
