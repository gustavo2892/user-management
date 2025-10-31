import { Dialog, DialogTitle, DialogContent, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { type ReactNode } from "react";

export type ModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  titleId: string;
};

export const Modal = ({ open, onClose, title, children, titleId }: ModalProps) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby={titleId}
      fullWidth
      maxWidth="sm"
    >
      <DialogTitle
        id={titleId}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          pr: 1,
        }}
      >
        {title}

        <IconButton
          aria-label="Fechar"
          onClick={onClose}
          edge="end"
          size="small"
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      </DialogTitle>

      <DialogContent dividers aria-describedby="app-modal-desc">
        {children}
      </DialogContent>
    </Dialog>
  );
}