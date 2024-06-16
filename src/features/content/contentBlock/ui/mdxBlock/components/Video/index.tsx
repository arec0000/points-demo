"use client";

import { Text } from "@/shared/uikit/atoms/Text";
import YouTube from "react-youtube";

import classes from "./index.module.scss";

export function Video({
  url,
  videoId,
  description,
  textAlign,
}: {
  url: string;
  videoId: string;
  description?: string;
  textAlign?: "start" | "center" | "end";
}) {
  let id: string | null = videoId;

  if (!id) {
    try {
      id = new URL(url).searchParams.get("v");
    } catch (err) {
      return null;
    }
  }

  if (!id) {
    return null;
  }

  return (
    <div className={classes.block}>
      <YouTube videoId={id} iframeClassName={classes.video} />
      {description !== undefined && (
        <Text color="gray70" style={{ textAlign }}>
          {description}
        </Text>
      )}
    </div>
  );
}
