import { DoatsLoader } from "@/shared/uikit/atoms/Loader";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export function Media({
  video,
  poster,
  alt,
  sizes,
  children,
  isHidden,
  isPaused,
  onLoad,
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
  onLoad?: () => void;
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

  function handleLoad() {
    setIsLoading(false);
    onLoad?.();
  }

  if (video) {
    return (
      <>
        {isLoading && !isHidden && <DoatsLoader withoutBlur />}

        <video
          src={video}
          ref={videoRef}
          poster={poster}
          autoPlay={isPaused ? false : autoPlay}
          muted={isMuted}
          onLoadedData={handleLoad}
          style={{ opacity: isLoading || isHidden ? 0 : undefined }}
        />

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
          style={{ opacity: isLoading || isHidden ? 0 : undefined }}
        />

        {!isLoading && !isHidden && children}
      </>
    );
  }

  return !isHidden && children;
}
