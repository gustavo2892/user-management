import type { userFormSchema } from "../../schemas/userForm.schema";
import * as z from "zod";
import type { TUser, TUserDTO } from "../../users.types";

export type FormValues = z.infer<typeof userFormSchema>;

export type UserFormProps = {
  handleSubmit: (data: TUserDTO) => void;
  isLoading?: boolean;
  userData?: TUser;
  handleCancel: () => void;
};
