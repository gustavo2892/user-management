import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./input";
import { useForm, FormProvider } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

type FormValues = {
  firstName: string;
};

const meta: Meta<typeof Input> = {
  title: "Form/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};
export default meta;

type Story = StoryObj<typeof Input>;

const FormWrapper = ({ defaultValues }: { defaultValues?: Partial<FormValues> }) => {
  const methods = useForm<FormValues>({
    defaultValues: defaultValues || { firstName: "" },
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => alert(JSON.stringify(data, null, 2));

  return (
    <FormProvider {...methods}>
      <Box
        component="form"
        onSubmit={methods.handleSubmit(onSubmit)}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          width: "300px",
        }}
      >
        <Typography variant="h6">Example Form</Typography>
        <Input name="firstName" label="Nome" />
        <Button variant="contained" type="submit">
          Send
        </Button>
      </Box>
    </FormProvider>
  );
};

/**
 * Standard story — input controlled with React Hook Form.
 */
export const Default: Story = {
  render: () => <FormWrapper />,
};

/**
 * Story with initial value filled in.
 */
export const WithDefaultValue: Story = {
  render: () => <FormWrapper defaultValues={{ firstName: "Gustavo" }} />,
};
