import { instance } from "@/shared/api/axios";

export const getGoogleSignInMutation = (redirect: (path: string) => void) => ({
  mutationFn: async (googleCode: string) =>
    instance.post("/auth/sign-in", { googleCode }),
  onSuccess: () => redirect("/"),
});
