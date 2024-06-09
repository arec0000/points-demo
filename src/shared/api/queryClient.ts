import { QueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry(failureCount: number, error: Error) {
        if (failureCount === 3) {
          return false;
        }

        return !(
          error instanceof AxiosError &&
          (error.response?.status === 401 || error.response?.status === 404)
        );
      },
    },
  },
});
