import { DoatsLoader } from "@/shared/uikit/atoms/Loader";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import classes from "./index.module.scss";

const PLACEMENT_BY_POSITION: Record<string, string> = {
  left: "start",
  right: "end",
  top: "start",
  bottom: "end",
  center: "center",
};

export function Media({
  video,
  poster,
  alt,
  sizes,
  children,
  isHidden,
  isPaused,
  onLoad,
  objectPosition = { x: "center", y: "center" },
  isMuted = true,
  autoPlay = true,
}: {
  alt: string;
  video?: string;
  poster?: string;
  sizes?: string;
  children?: React.ReactNode;
  isHidden?: boolean;
  isPaused?: boolean;
  onLoad?: (duration?: number) => void;
  objectPosition?: { x: string; y: string };
  isMuted?: boolean;
  autoPlay?: boolean;
}) {
  const [isLoading, setIsLoading] = useState(true);

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!videoRef.current) {
      return;
    }

    if (isPaused) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  }, [isPaused]);

  useEffect(() => {
    if (!isHidden && videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  }, [isHidden]);

  function handleLoad() {
    setIsLoading(false);
    onLoad?.(
      videoRef.current?.duration !== undefined
        ? videoRef.current.duration * 1000
        : undefined,
    );
  }

  if (video) {
    return (
      <>
        {isLoading && !isHidden && <DoatsLoader withoutBlur />}

        <div
          className={classes.videoWrapper}
          style={{
            opacity: isLoading || isHidden ? 0 : undefined,
            justifyContent: PLACEMENT_BY_POSITION[objectPosition.x],
            alignItems: PLACEMENT_BY_POSITION[objectPosition.y],
          }}
        >
          <video
            className={classes.video}
            src={video}
            ref={videoRef}
            poster={poster}
            autoPlay={isPaused ? false : autoPlay}
            muted={isMuted}
            onLoadedData={handleLoad}
          />
        </div>

        {!isLoading && !isHidden && children}
      </>
    );
  } else if (poster) {
    return (
      <>
        {isLoading && !isHidden && <DoatsLoader withoutBlur />}

        <Image
          src={poster}
          alt={alt}
          fill
          sizes={sizes}
          onLoad={handleLoad}
          className={classes.img}
          style={{
            opacity: isLoading || isHidden ? 0 : undefined,
            objectPosition: `${objectPosition.x} ${objectPosition.y}`,
          }}
        />

        {!isLoading && !isHidden && children}
      </>
    );
  }

  return !isHidden && children;
}
