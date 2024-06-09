"use client";

import { FullscreenStories } from "@/features/stories/FullscreenStories";
import { StoriesCard } from "@/features/stories/StoriesCard";
import type { StoriesList } from "@/shared/api/content/schemas/storiesList.schema";
import { Slider } from "@/shared/uikit/atoms/Slider";
import { useState } from "react";

import classes from "./index.module.scss";
import { StoriesData } from "@/features/stories/types";

export function StoriesList({ data = [] }: { data: StoriesData | undefined }) {
  const [index, setIndex] = useState<number | null>(null);

  function next() {
    setIndex((i) => {
      if (i !== null) {
        return i < data.length - 1 ? i + 1 : null;
      }

      return null;
    });
  }

  function back() {
    setIndex((i) => (i ? i - 1 : null));
  }

  function close() {
    setIndex(null);
  }

  return (
    <div>
      <Slider innerClassName={classes.slider}>
        {data.map((stories, i) => (
          <StoriesCard
            key={i}
            url={stories.steps[stories.posterIndex ?? 0].url}
            poster={stories.steps[stories.posterIndex ?? 0].poster}
            label={stories.label}
            labelLines={stories.labelLines}
            labelColor={stories.labelColor}
            onClick={() => setIndex(i)}
          />
        ))}
      </Slider>
      {index !== null && (
        <FullscreenStories
          data={data[index]}
          onClose={close}
          onNext={next}
          onBack={back}
        />
      )}
    </div>
  );
}
