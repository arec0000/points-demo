"use client";

import Stories from "react-insta-stories";

import classes from "./index.module.scss";
import { Icon32Px } from "@/shared/uikit/atoms/Icon32Px";
import { useHadleKeyPress } from "@/shared/lib/useHadleKeyPress";
import type { Story } from "react-insta-stories/dist/interfaces";
import { StoriesData } from "../types";

import util from "@/shared/styles/util.module.scss";
import cx from "clsx";
import Image from "next/image";

export function FullscreenStories({
  data,
  onBack,
  onNext,
  onClose,
}: {
  data: StoriesData[number] | undefined;
  onNext?: () => void;
  onBack?: () => void;
  onClose?: () => void;
}) {
  useHadleKeyPress([
    { key: "Escape", onKeyDown: onClose },
    { key: "ArrowRight", onKeyDown: onNext },
    { key: "l", onKeyDown: onNext },
    { key: "ArrowLeft", onKeyDown: onBack },
    { key: "j", onKeyDown: onBack },
  ]);

  const stories = data?.steps.map(
    (step) =>
      ({
        duration: step.duration ?? data.duration,
        content: () => {
          const textColor = step.textColor ?? data.textColor;
          return (
            <div
              className={classes.overlay}
              style={{
                background: step.overlayBackground ?? data.overlayBackground,
              }}
            >
              <div
                className={cx(classes.content, textColor && util[textColor])}
                style={{
                  margin: step.margin ?? data.margin,
                  padding: step.padding ?? data.padding,
                  background:
                    step.url || step.poster
                      ? undefined
                      : step.background ?? data.background,
                  justifyContent: step.justify ?? data.justify,
                  alignItems: step.align ?? data.align,
                }}
              >
                {step.url ? (
                  <video src={step.url} poster={step.poster} autoPlay muted />
                ) : (
                  step.poster && (
                    <Image
                      src={step.poster}
                      alt={step.alt ?? "Stories"}
                      fill
                      sizes="100vw"
                    />
                  )
                )}
                {step.mdx}
              </div>
            </div>
          );
        },
      }) satisfies Story,
  );

  return (
    <div className={classes.container}>
      <Stories
        stories={stories ?? []}
        defaultInterval={10000}
        width="100%"
        height="100%"
        onAllStoriesEnd={data?.loop ? undefined : onClose}
        onPrevious={onBack}
        onNext={onNext}
        loop={data?.loop}
      />
      <button className={classes.closeButton} onClick={onClose}>
        <Icon32Px
          name="cross"
          color={data?.crossColor}
          style={{ width: "3rem", height: "3rem" }}
        />
      </button>
    </div>
  );
}
