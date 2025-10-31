import type { ModalProps } from "@/shared/components";
import type { TUser } from "../../users.types";

export type ModalUpdateUserProps = Omit<ModalProps, "title" | "children" | "titleId"> & {
  user: TUser | null;
};

export type UseModalUpdateUserProps = {
  user: TUser | null;
  onCloseModal: () => void;
};
