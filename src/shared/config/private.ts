import { z } from "zod";

const privateConfigSchema = z.object({
  CONTENT_PATH: z.string(),
  CONTENT_TOKEN: z.string().optional(),
});

export const privateConfig = privateConfigSchema.parse(process.env);
