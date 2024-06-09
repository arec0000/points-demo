import { instance } from "@/shared/api/axios";
import { z } from "zod";

export const onboardingSchema = z.object({
  countryTitle: z.string(),
  countryTitleFormated: z.string(),
});

export const profileQueryKey = ["onboarding"];

export const getOnboardingQuery = (redirect?: () => void) => ({
  queryKey: profileQueryKey,
  queryFn: async () => {
    const res = await instance.get("/mock/onboarding");
    return onboardingSchema.parse(res.data);
  },
  staletime: 1000,
});
