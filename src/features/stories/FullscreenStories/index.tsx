"use client";

import classes from "./index.module.scss";
import { Icon32Px } from "@/shared/uikit/atoms/Icon32Px";
import { useHadleKeyPress } from "@/shared/lib/useHadleKeyPress";

import util from "@/shared/styles/util.module.scss";
import cx from "clsx";
import { Dialog } from "@/shared/uikit/atoms/Dialog";
import { useItem } from "@/shared/lib/useItem";

import type { StoriesList } from "@/shared/api/content/schemas/storiesList.schema";
import { RunningProgress } from "@/shared/uikit/atoms/RunningProgress";
import { useState } from "react";
import { Media } from "../Media";
import { isReservedSize } from "@/shared/lib/isReservedSize";

const DEFAULT_DURATION = 5000;

export function FullscreenStories({
  data,
  onBack,
  onNext,
  onClose,
}: {
  data: StoriesList[number];
  onNext?: () => void;
  onBack?: () => void;
  onClose?: () => void;
}) {
  const [metainfo, setMetainfo] = useState<
    { paused: boolean; duration?: number }[]
  >(
    data.steps.map((step) => ({
      paused: Boolean(step.video || step.poster),
    })),
  );

  function stepOnLoad(index: number, duration: number | undefined) {
    setMetainfo((v) =>
      v.map((info, i) => (i === index ? { paused: false, duration } : info)),
    );
  }

  const [isPaused, setIsPaused] = useState(false);

  function toggleIsPaused() {
    setIsPaused((v) => !v);
  }

  const { item, index, back, next } = useItem(data.steps, {
    initialIndex: 0,
    onItemsStart: onBack,
    onItemsEnd: onNext,
    loop: data.loop,
  });

  useHadleKeyPress([
    { key: "Escape", onKeyDown: onClose },
    { key: "ArrowRight", onKeyDown: next },
    { key: "l", onKeyDown: next },
    { key: "ArrowLeft", onKeyDown: back },
    { key: "j", onKeyDown: back },
    { key: "k", onKeyDown: toggleIsPaused },
    { key: " ", onKeyDown: toggleIsPaused },
  ]);

  if (!item || index === null) {
    return null;
  }

  const textColor = item.textColor ?? data.textColor;
  const maxWidth = item.maxWidth ?? data.maxWidth ?? "xl";

  return (
    <Dialog isOpen onClose={onClose}>
      <RunningProgress
        className={classes.progress}
        index={index}
        count={data.steps.length}
        duration={data.steps.map(
          (step, i) =>
            step.duration ??
            data.duration ??
            metainfo[i].duration ??
            DEFAULT_DURATION,
        )}
        isPaused={isPaused || metainfo[index].paused}
        onNext={next}
        height={data.progress?.height}
        inactiveColor={data.progress?.inactiveColor}
        activeColor={data.progress?.activeColor}
      />

      <div
        className={classes.overlay}
        style={{
          background: item.overlayBackground ?? data.overlayBackground,
        }}
      >
        <div
          className={cx(
            classes.content,
            isReservedSize(maxWidth) && util[`maxWidth_${maxWidth}`],
            textColor && util[textColor],
          )}
          style={{
            margin: item.margin ?? data.margin,
            padding: item.padding ?? data.padding,
            maxWidth: !isReservedSize(maxWidth) ? maxWidth : undefined,
            background:
              item.video || item.poster
                ? undefined
                : item.background ?? data.background,
            justifyContent: item.justify ?? data.justify,
            alignItems: item.align ?? data.align,
            borderRadius: item.borderRaius ?? data.borderRaius,
          }}
        >
          {data.steps.map((currentItem, i) => (
            <Media
              key={i}
              video={currentItem.video}
              poster={currentItem.poster}
              alt={currentItem.alt ?? "Story"}
              sizes="100vw"
              isHidden={i !== index}
              isPaused={isPaused}
              objectPosition={currentItem.objectPosition ?? data.objectPosition}
              onLoad={(duration) => stepOnLoad(i, duration)}
            >
              {currentItem.mdx}
            </Media>
          ))}
        </div>
      </div>

      <div className={classes.controls}>
        <button onClick={back} tabIndex={-1} />
        <button onClick={toggleIsPaused} tabIndex={-1} />
        <button onClick={next} tabIndex={-1} />
      </div>

      <button className={classes.closeButton} onClick={onClose}>
        <Icon32Px
          name="cross"
          color={data?.crossColor}
          style={{ width: "3rem", height: "3rem" }}
        />
      </button>
    </Dialog>
  );
}
