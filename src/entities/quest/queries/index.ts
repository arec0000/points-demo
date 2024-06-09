import { instance } from "@/shared/api/axios";
import { z } from "zod";

export const taskSchema = z.object({
  id: z.string(),
  userId: z.number(),
  file: z.string().nullable(),
});

export type TaskData = z.infer<typeof taskSchema>;

export const taskQueryKey = ["task"];

export const getTaskQuery = (id: string) => ({
  queryKey: taskQueryKey,
  queryFn: async () => {
    const res = await instance.get(`/mock/task/${id}`);
    return taskSchema.parse(res.data);
  },
  staletime: 1000,
});

export const taskListQueryKey = ["taskList"];

export const getTaskListQuery = () => ({
  queryKey: taskListQueryKey,
  queryFn: async () => {
    const res = await instance.get(`/mock/tasks`);
    return taskSchema.array().parse(res.data);
  },
  staletime: 1000,
});
