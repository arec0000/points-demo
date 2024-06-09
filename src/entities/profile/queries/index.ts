import { instance } from "@/shared/api/axios";
import { z } from "zod";

export const profileSchema = z.object({
  id: z.number(),
  email: z.string(),
  name: z.string().nullable(),
  avatar: z.string().nullable(),
});

export type Profile = z.infer<typeof profileSchema>;

export const profileQueryKey = ["profile"];

export const getProfileQuery = () => ({
  queryKey: profileQueryKey,
  queryFn: async () => {
    const res = await instance.get("/profile/data");
    return profileSchema.parse(res.data);
  },
  staletime: 1000,
});
