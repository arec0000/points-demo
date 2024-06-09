import { IS_SSR } from "../config/constants";

export function useTemporaryPersist<T>(key: string) {
  if (IS_SSR) {
    return {};
  }

  const serializedValue = sessionStorage.getItem(key);

  const value =
    serializedValue !== null && serializedValue !== undefined
      ? (JSON.parse(serializedValue) as T)
      : undefined;

  function storeValue(value: T) {
    sessionStorage.setItem(key, JSON.stringify(value));
  }

  return { value, storeValue };
}
