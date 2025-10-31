import type { ModalProps } from "@/shared/components";

export type ModalCreateUserProps = Omit<ModalProps, "title" | "children" | "titleId">;

export type UseModalCreateUserProps = {
  onCloseModal: () => void;
};
