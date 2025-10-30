import * as z from "zod";

export const userFormSchema = z
  .object({
    name: z
      .string()
      .min(1)
      .max(50, "O máximo de caracteres é 50, por favor corrigir"),
    email: z.email().min(1),
  })
  .required();
