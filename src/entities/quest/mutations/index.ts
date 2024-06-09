import { instance } from "@/shared/api/axios";

export const getPostTaskMutation = (redirect?: () => void) => ({
  mutationFn: async (data: { taskId: string; file?: File | null }) => {
    const formData = new FormData();

    if (data.file) {
      formData.set("image", data.file);
    }

    formData.set("taskId", data.taskId);

    return instance.post("/mock/task", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  },
  async onSuccess() {
    redirect?.();
  },
});

export const getPutTaskMutation = (redirect?: () => void) => ({
  mutationFn: async (data: { taskId: string; file?: File | null }) => {
    const formData = new FormData();

    if (data.file) {
      formData.set("image", data.file);
    }

    formData.set("taskId", data.taskId);

    return instance.put("/mock/task", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  },
  async onSuccess() {
    redirect?.();
  },
});
