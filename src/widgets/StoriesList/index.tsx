"use client";

import { FullscreenStories } from "@/features/stories/FullscreenStories";
import { StoriesCard } from "@/features/stories/StoriesCard";
import type { StoriesList } from "@/shared/api/content/schemas/storiesList.schema";
import { Slider } from "@/shared/uikit/atoms/Slider";

import classes from "./index.module.scss";
import { useItem } from "@/shared/lib/useItem";

export function StoriesList({ data = [] }: { data: StoriesList | undefined }) {
  const { item, next, back, clear, set } = useItem(data);

  return (
    <div>
      <Slider innerClassName={classes.slider}>
        {data.map((stories, i) => (
          <StoriesCard key={i} {...stories.card} onClick={() => set(i)} />
        ))}
      </Slider>

      {item && (
        <FullscreenStories
          data={item}
          onClose={clear}
          onNext={next}
          onBack={back}
        />
      )}
    </div>
  );
}
