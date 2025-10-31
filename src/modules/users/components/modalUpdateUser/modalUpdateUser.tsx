import { Alert, Modal } from "@/shared/components";
import type { ModalUpdateUserProps } from "./modalUpdateUser.types";
import { UserForm } from "../userForm/userForm";
import { useModalUpdateUser } from "./userModalUpdateUser.hook";
import { useI18n } from "@/shared/i18n";

export const ModalUpdateUser = ({ user, onClose, open }: ModalUpdateUserProps) => {
  const { handleSubmit, alertInfo, handleCloseAlert } = useModalUpdateUser({
    user,
    onCloseModal: onClose,
  });
  const { translate } = useI18n();

  return (
    <>
      <Modal
        onClose={onClose}
        open={open}
        title={translate("users.title.update")}
        titleId="modal-update-user"
      >
        <UserForm
          handleSubmit={handleSubmit}
          userData={user ? user : undefined}
          handleCancel={onClose}
        />
      </Modal>
      <Alert alertInfo={alertInfo} handleCloseAlert={handleCloseAlert} />
    </>
  );
};
