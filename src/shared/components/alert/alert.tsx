import { Alert as MUIAlert, AlertTitle, Snackbar } from "@mui/material";
import type { AlertProps } from "./alert.types";
import { useI18n } from "@/shared/i18n";

export const Alert = ({ alertInfo, handleCloseAlert }: AlertProps) => {
  const { translate } = useI18n();

  return (
    <Snackbar
      open={alertInfo.open}
      autoHideDuration={6000}
      onClose={handleCloseAlert}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <MUIAlert
        onClose={handleCloseAlert}
        severity={alertInfo.severity}
        variant="filled"
        sx={{ width: "100%" }}
      >
        <AlertTitle>{translate(`general.alert.${alertInfo.severity}`)}</AlertTitle>
        {alertInfo.severity === "error"
          ? translate("general.error", { message: alertInfo.message })
          : translate(alertInfo.message)}
      </MUIAlert>
    </Snackbar>
  );
};
