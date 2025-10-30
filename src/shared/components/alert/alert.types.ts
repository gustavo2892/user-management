export type TAlertInfo = {
  open: boolean;
  message: string;
  severity: "success" | "error" | "warning" | "info";
};

export type AlertProps = {
  alertInfo: TAlertInfo;
  handleCloseAlert: () => void;
};
