import { Table, Alert, PageTitle } from '@/shared/components';
import type { TUser } from "../../users.types";
import { columns } from "./usersList.constants";
import { useUsersList } from "./usersList.hook";
import { useI18n } from '@/shared/i18n';
import { ModalUpdateUser } from '../../components/modalUpdateUser/modalUpdateUser';
import { ModalCreateUser } from "../../components/modalCreateUser/modalCreateUser";
import { HeaderCreateUser } from '../../components/headerCreateUser/headerCreateUser';

export const UsersList = () => {
  const {
    alertInfo,
    users,
    handleDelete,
    handleOpenModalUpdate,
    handleCloseAlert,
    handleCloseModalUpdate,
    openModalUpdate,
    userUpdate,
    handleOpenModalCreate,
    handleCloseModalCreate,
    openModalCreate
  } = useUsersList();
  const { translate } = useI18n();

  return (
    <>
      <PageTitle title={translate('users.title.list')} />
      <HeaderCreateUser handleOpenModalCreate={handleOpenModalCreate} />
      <Table<TUser>
        data={users}
        columns={columns}
        onDelete={handleDelete}
        onUpdate={handleOpenModalUpdate}
      />
      <Alert alertInfo={alertInfo} handleCloseAlert={handleCloseAlert} />
      <ModalUpdateUser onClose={handleCloseModalUpdate} open={openModalUpdate} user={userUpdate} />
      <ModalCreateUser onClose={handleCloseModalCreate} open={openModalCreate} />
    </>
  );
};