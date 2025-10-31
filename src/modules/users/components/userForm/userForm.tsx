import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import { userFormSchema } from "../../schemas/userForm.schema";
import { Input } from "@/shared/components/input/input";
import { ACTIVE_STATUS, INACTIVE_STATUS, type TUserDTO } from "../../users.types";
import { Switch } from "@/shared/components/switch/switch";
import { useI18n } from "@/shared/i18n";
import type { FormValues, UserFormProps } from "./userForm.types";

export const UserForm = ({
  handleSubmit,
  isLoading = false,
  userData = undefined,
  handleCancel,
}: UserFormProps) => {
  const { translate } = useI18n();
  const methods = useForm({
    resolver: zodResolver(userFormSchema),
    criteriaMode: "all",
    mode: "all",
    defaultValues: {
      name: "",
      email: "",
      status: true,
    },
  });

  if (userData) {
    methods.setValue("name", userData.name);
    methods.setValue("email", userData.email);
    methods.setValue("status", userData.status === ACTIVE_STATUS ? true : false);
  }

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit((data: FormValues) => {
          const formattedUserData = {
            ...data,
            status: data.status ? ACTIVE_STATUS : INACTIVE_STATUS,
          } satisfies TUserDTO;
          handleSubmit(formattedUserData);
        })}
      >
        <Box marginY={2} maxWidth={400}>
          <Box display="flex" flexDirection="column" gap={2} marginTop={3}>
            <Input name="name" label={translate("users.form.name")} disabled={isLoading} />
            <Input name="email" label={translate("users.form.email")} disabled={isLoading} />
            <Switch name="status" label={translate("users.form.status")} disabled={isLoading} />
          </Box>

          <Box display="flex" flexDirection="row" gap={2} marginTop={3}>
            <Button variant="outlined" onClick={() => handleCancel()} disabled={isLoading}>
              {translate("users.form.buttons.cancel")}
            </Button>
            <Button type="submit" variant="contained" disabled={isLoading}>
              {translate("users.form.buttons.save")}
            </Button>
          </Box>
        </Box>
      </form>
    </FormProvider>
  );
};
