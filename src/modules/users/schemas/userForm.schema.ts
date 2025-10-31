import * as z from "zod";

export const userFormSchema = z
  .object({
    name: z
      .string()
      .min(1, "O mínimo de caracteres é 1, por favor corrigir")
      .max(50, "O máximo de caracteres é 50, por favor corrigir"),
    email: z.email("Formato de email incorreto").min(1),
    status: z.boolean(),
  })
  .required();
