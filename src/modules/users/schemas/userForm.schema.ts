import * as z from "zod";

export const userFormSchema = z
  .object({
    name: z.string().min(1, "general.minLengthOf").max(50, "general.maxLengthOf"),
    email: z.email("general.wrongEmailFormat").min(1),
    status: z.boolean(),
  })
  .required();
