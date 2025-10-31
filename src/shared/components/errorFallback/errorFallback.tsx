import { Box, Button, Typography } from "@mui/material";

import type { ErrorFallbackProps } from "./errorFallback.types";
import { useI18n } from "@/shared/i18n";

export const ErrorFallback = ({ error, resetErrorBoundary }: ErrorFallbackProps) => {
  const { translate } = useI18n();

  return (
    <Box
      role="alert"
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 2,
        textAlign: "center",
        p: 3,
      }}
    >
      <Typography variant="h5" fontWeight={600}>
        {translate('shared.error.text')} 😕
      </Typography>

      <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 420 }}>
        {error.message}
      </Typography>

      <Button variant="contained" onClick={resetErrorBoundary}>
        {translate('shared.error.try.again')}
      </Button>
    </Box>
  );
}