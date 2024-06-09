import { instance } from "@/shared/api/axios";

export const getGoogleSignInMutation = (redirect: (path: string) => void) => ({
  mutationFn: async (googleCode: string) =>
    instance.post("/auth/sign-in", { googleCode }),
  onSuccess: () => redirect("/"),
});

export const getDevSignInMutation = (redirect: (path: string) => void) => ({
  mutationFn: async ({ email }: { email: string }) =>
    instance.post("/auth/sign-in", { email }),
  onSuccess: () => redirect("/"),
});
