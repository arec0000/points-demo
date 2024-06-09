import { instance } from "@/shared/api/axios";
import type { QueryClient } from "@tanstack/react-query";
import { profileQueryKey } from "../queries";

export const getLogoutMutation = (redirect: () => void) => ({
  mutationFn: async () => {
    const res = await instance.post("/auth/logout");
    if (res.status === 202) {
      redirect();
    }
  },
});

export const getUpdateProfileMutation = (client: QueryClient) => ({
  mutationFn: async (data: { email: string; name: string }) =>
    instance.put("/profile/credentials", data),
  onSuccess() {
    client.invalidateQueries({ queryKey: profileQueryKey });
  },
});

export const getUpdateAvatarMutation = (
  client: QueryClient,
  clearFile: () => void,
) => ({
  mutationFn: async (data: File) => {
    const formData = new FormData();

    formData.set("image", data);

    return instance.put("/profile/avatar", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  },
  async onSuccess() {
    await client.invalidateQueries({ queryKey: profileQueryKey });
    clearFile();
  },
});
