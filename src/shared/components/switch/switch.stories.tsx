import type { Meta, StoryObj } from "@storybook/react";
import { useForm, FormProvider, } from "react-hook-form";
import { Box } from "@mui/material";
import { Switch } from "./switch";
import type { SwitchProps } from "./switch.types";

interface FormValues {
  [key: string]: boolean;
}

const meta: Meta<typeof Switch> = {
  title: "Form/Switch",
  component: Switch,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof Switch>;

const Template = (args: SwitchProps) => {
  const methods = useForm<FormValues>({
    defaultValues: {
      [args.name]: false,
    },
  });

  return (
    <FormProvider {...methods}>
      <Box width={300}>
        <Switch {...args} />
      </Box>
    </FormProvider>
  );
};

export const Default: Story = {
  render: Template,
  args: {
    name: "notifications",
    label: "Enable notifications",
  },
};

export const Disabled: Story = {
  render: Template,
  args: {
    name: "disabledSwitch",
    label: "Switch Disabled",
    disabled: true,
  },
};