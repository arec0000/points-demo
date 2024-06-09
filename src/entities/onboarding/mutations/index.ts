import { instance } from "@/shared/api/axios";

export const getPostOnboardingMutation = (redirect: () => void) => ({
  mutationFn: async (countryTitle: string) => {
    return instance.post("/mock/onboarding", { countryTitle });
  },
  async onSuccess() {
    redirect();
  },
});
