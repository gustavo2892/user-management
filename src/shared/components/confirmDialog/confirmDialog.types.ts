export type ConfirmDialogProps = {
  openDialog: boolean;
  handleCloseDialog: () => void;
  handleConfirmDelete: () => void;
  textConfirm: string;
  titleConfirm: string;
};
