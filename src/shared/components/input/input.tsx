import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Controller, useFormContext } from "react-hook-form";

import type { FormInputProps } from "./input.types";
import { useI18n } from "@/shared/i18n";

export const Input = ({ name, label, disabled = false }: FormInputProps) => {
  const { control } = useFormContext();
  const { translate } = useI18n();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => {
        return (
          <Box display="flex" flexDirection="column">
            <TextField
              label={label}
              error={Boolean(fieldState.error)}
              helperText={translate(fieldState.error?.message ?? "")}
              disabled={disabled}
              {...field}
            />
          </Box>
        );
      }}
    />
  );
};
