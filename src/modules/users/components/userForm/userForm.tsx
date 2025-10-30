import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import { userFormSchema } from '../../schemas/userForm.schema';
import { Input } from "@/shared/components/input/input";

type FormValues = z.infer<typeof userFormSchema>;

export const UserForm = () => {
  const methods = useForm({
    resolver: zodResolver(userFormSchema),
    criteriaMode: "all",
    mode: "all",
    defaultValues: {
      name: "",
      email: "",
    },
  });

  if (methods.formState.isSubmitSuccessful) {
    return (
      <Box>
        <Typography variant="h2">Formulário enviado com sucesso!</Typography>
        <Button onClick={() => methods.reset()}>
          Clique aqui para enviar um novo cadastro
        </Button>
      </Box>
    );
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit((data: FormValues) => console.log(data))}>
        <Box marginY={10}>
          <Typography variant="h6">Dados Pessoais</Typography>

          <Box display="flex" flexDirection="column" gap={2} marginTop={3}>
            <Input name="name" label="Nome" />
            <Input name="email" label="Email" />
          </Box>
        </Box>
      </form>
    </FormProvider>
  );
}