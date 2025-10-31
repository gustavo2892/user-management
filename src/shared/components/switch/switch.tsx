import { Controller, useFormContext } from "react-hook-form";
import { Switch as MUISwitch, FormControlLabel, FormHelperText, Box } from "@mui/material";

import type { SwitchProps } from "./switch.types";

export const Switch = ({ name, label, disabled = false }: SwitchProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => {
        return (
          <Box display="flex" flexDirection="column">
            <FormControlLabel
              control={
                <MUISwitch
                  checked={Boolean(field.value)}
                  onChange={(e) => field.onChange(e.target.checked)}
                  disabled={disabled}
                  color="primary"
                />
              }
              label={label}
            />

            {fieldState.error && (
              <FormHelperText error>{fieldState.error.message}</FormHelperText>
            )}
          </Box>
        );
      }}
    />
  );
};