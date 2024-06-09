"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export function useStep(
  options: {
    key?: string;
    scroll?: boolean;
    initial?: number;
  } = {}
) {
  const { key = "step", scroll, initial = 0 } = options;

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const step = Number(searchParams.get(key)) || initial;

  function setStep(newStep: number) {
    const newSearchParams = new URLSearchParams(searchParams);

    newSearchParams.set(key, String(newStep));

    router.push(`${pathname}?${newSearchParams}`, { scroll });
  }

  function nextStep() {
    setStep(step + 1);
  }

  return { step, setStep, nextStep };
}
