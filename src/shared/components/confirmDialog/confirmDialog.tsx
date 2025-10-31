import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "@mui/material"
import type { ConfirmDialogProps } from "./confirmDialog.types"
import { useEffect } from "react"
import { useI18n } from "@/shared/i18n"

export const ConfirmDialog = ({
  openDialog,
  handleCloseDialog,
  handleConfirmDelete,
  textConfirm,
  titleConfirm
}: ConfirmDialogProps) => {
  const { translate } = useI18n();
  const dialogTitleId = "confirm-dialog-title"
  const dialogDescriptionId = "confirm-dialog-description"

  useEffect(() => {
    if (!openDialog) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault()
        handleCloseDialog()
      }

      if (event.key === "Enter") {
        event.preventDefault()
        handleConfirmDelete()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [openDialog, handleCloseDialog, handleConfirmDelete])

  return (
    <Dialog
      open={openDialog}
      onClose={handleCloseDialog}
      aria-labelledby={dialogTitleId}
      aria-describedby={dialogDescriptionId}
    >
      <DialogTitle id={dialogTitleId}>{translate(titleConfirm)}</DialogTitle>
      <DialogContent>
        <DialogContentText id={dialogDescriptionId}>
          {translate(textConfirm)}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseDialog} color="primary">
          {translate('shared.error.dialog.cancel')}
        </Button>
        <Button onClick={handleConfirmDelete} color="error" autoFocus>
          {translate('shared.error.dialog.confirm')}
        </Button>
      </DialogActions>
    </Dialog>
  )
}