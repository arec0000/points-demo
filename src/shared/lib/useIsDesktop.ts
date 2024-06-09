"use client";

import { useEffect, useRef, useState } from "react";

const QUERY = "(min-width: 768px)";

export function useIsDesktop() {
  const [isMatches, setMatches] = useState(() => {
    if (typeof window !== "undefined" && "matchMedia" in window) {
      return window.matchMedia(QUERY).matches;
    }

    return false;
  });

  const queryRef = useRef<MediaQueryList>();

  useEffect(() => {
    if ("matchMedia" in window) {
      queryRef.current = window.matchMedia(QUERY);

      setMatches(queryRef.current.matches);

      return attachMediaListener(queryRef.current, (event) =>
        setMatches(event.matches),
      );
    }

    return undefined;
  }, []);

  return isMatches;
}

function attachMediaListener(
  query: MediaQueryList,
  callback: (event: { matches: boolean; media: string }) => void,
) {
  try {
    query.addEventListener("change", callback);
    return () => query.removeEventListener("change", callback);
  } catch (e) {
    query.addListener(callback);
    return () => query.removeListener(callback);
  }
}
