import { Alert, Modal } from '@/shared/components';
import { UserForm } from '../userForm/userForm';
import { useModalCreateUser } from './userModalCreateUser.hook';
import { useI18n } from '@/shared/i18n';
import type { ModalCreateUserProps } from './modalCreateUser.types';

export const ModalCreateUser = ({ onClose, open }: ModalCreateUserProps) => {
  const { handleSubmit, alertInfo, handleCloseAlert } = useModalCreateUser({ onCloseModal: onClose });
  const { translate } = useI18n();

  return (
    <>
      <Modal onClose={onClose} open={open} title={translate('users.title.create')} titleId="modal-create-user">
        <UserForm
          handleSubmit={handleSubmit}
          handleCancel={onClose}
        />
      </Modal>
      <Alert alertInfo={alertInfo} handleCloseAlert={handleCloseAlert} />
    </>
  )
}