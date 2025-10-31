import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Controller, useFormContext } from "react-hook-form";

import type { FormInputProps } from "./input.types";

export const Input = ({ name, label }: FormInputProps) => {
  const { control } = useFormContext();

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
              helperText={fieldState.error?.message}
              {...field}
            />
          </Box>
        );
      }}
    />
  );
};