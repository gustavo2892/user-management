import { useState } from "react";
import type { TAlertInfo } from "./alert.types";

export function useAlert() {
  const [alertInfo, setAlertInfo] = useState<TAlertInfo>({
    open: false,
    message: "",
    severity: "success",
  });

  const showSuccess = (message: string) =>
    setAlertInfo({
      open: true,
      message,
      severity: "success",
    });

  const showError = (message: string) =>
    setAlertInfo({
      open: true,
      message,
      severity: "error",
    });

  const closeAlert = () =>
    setAlertInfo((prev) => ({
      ...prev,
      open: false,
    }));

  return {
    alertInfo,
    showSuccess,
    showError,
    closeAlert,
  };
}