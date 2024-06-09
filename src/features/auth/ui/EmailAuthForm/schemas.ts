import { z } from "zod";

export const emailAuthSchema = z.object({
  email: z
    .string({
      required_error: "Введите email",
    })
    .email("Введите корректный email"),
});
