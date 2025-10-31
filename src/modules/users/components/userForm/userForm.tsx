import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import { userFormSchema } from '../../schemas/userForm.schema';
import { Input } from "@/shared/components/input/input";
import { STATUSES, type TUser } from "../../users.types";

type FormValues = z.infer<typeof userFormSchema>;

type UserFormProps = {
  handleSubmit: (data: FormValues) => void;
  isLoading?: boolean;
  userData?: TUser;
}

export const UserForm = ({ handleSubmit, isLoading = false, userData = undefined }: UserFormProps) => {
  const methods = useForm({
    resolver: zodResolver(userFormSchema),
    criteriaMode: "all",
    mode: "all",
    defaultValues: {
      name: "",
      email: "",
      status: STATUSES[0],
    },
  });

  if (userData) {
    methods.setValue("name", userData.name);
    methods.setValue("email", userData.email);
    methods.setValue("status", userData.status);
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit((data: FormValues) => handleSubmit(data))}>
        <Box marginY={2}>
          <Typography variant="h6">Preencha os campos</Typography>

          <Box display="flex" flexDirection="column" gap={2} marginTop={3}>
            <Input name="name" label="Nome" />
            <Input name="email" label="Email" />
            <Input name="status" label="Status" />
          </Box>

          <Box display="flex" flexDirection="column" gap={2} marginTop={3}>
            <Button type="submit" variant="contained" disabled={isLoading}>Salvar</Button>
          </Box>
        </Box>
      </form>
    </FormProvider>
  );
}