import { MutableRefObject, useEffect, useRef, useState } from "react";

export function useItem<T>(
  items: T[],
  options?: {
    initialIndex?: number;
    onItemsStart?: () => void;
    onItemsEnd?: () => void;
  },
) {
  const [index, setIndex] = useState<number | null>(
    options?.initialIndex ?? null,
  );

  const prev: MutableRefObject<number | null> = useRef(null);

  useEffect(() => {
    if (index === null) {
      if (prev.current === 0) {
        options?.onItemsStart?.();
      }

      if (prev.current === items.length - 1) {
        options?.onItemsEnd?.();
      }
    }

    prev.current = index;
  }, [index]);

  function next() {
    setIndex((i) => {
      if (i !== null) {
        return i < items.length - 1 ? i + 1 : null;
      }

      return 0;
    });
  }

  function back() {
    setIndex((i) => (i ? i - 1 : null));
  }

  function set(i: number | null) {
    setIndex(i);
  }

  function clear() {
    setIndex(null);
  }

  const item = index !== null ? items[index] : undefined;

  return {
    item,
    index,
    next,
    back,
    set,
    clear,
  };
}
