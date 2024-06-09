import { useEffect } from "react";

export function useHadleKeyPress(
  params: { key: string; onKeyDown?: () => void; onKeyUp?: () => void }[],
) {
  useEffect(() => {
    function keyDownHandler(e: KeyboardEvent) {
      params.forEach(({ key, onKeyDown }) => {
        if (e.key === key) {
          onKeyDown?.();
        }
      });
    }

    function keyUpHandler(e: KeyboardEvent) {
      params.forEach(({ key, onKeyUp }) => {
        if (e.key === key) {
          onKeyUp?.();
        }
      });
    }

    window.addEventListener("keydown", keyDownHandler);
    window.addEventListener("keyup", keyUpHandler);

    return () => {
      window.removeEventListener("keydown", keyDownHandler);
      window.removeEventListener("keyup", keyUpHandler);
    };
  }, []);
}
