import { Alert as MUIAlert, AlertTitle, Snackbar } from '@mui/material';
import type { AlertProps } from './alert.types';

export const Alert = ({
  alertInfo,
  handleCloseAlert
}: AlertProps) => {
  return (
    <Snackbar
      open={alertInfo.open}
      autoHideDuration={6000}
      onClose={handleCloseAlert}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    >
      <MUIAlert
        onClose={handleCloseAlert}
        severity={alertInfo.severity}
        variant="filled"
        sx={{ width: '100%' }}
      >
        <AlertTitle>{alertInfo.severity === 'success' ? 'Success' : 'Error'}</AlertTitle>
        {alertInfo.message}
      </MUIAlert>
    </Snackbar>
  );
}