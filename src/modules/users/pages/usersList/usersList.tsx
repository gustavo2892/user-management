import { Table, Alert, PageTitle } from '@/shared/components';
import type { TUser } from "../../users.types";
import { columns } from "./usersList.constants";
import { useUsersList } from "./usersList.hook";
import { useI18n } from '@/shared/i18n';

export const UsersList = () => {
  const { alertInfo, users, handleDelete, handleNavigate, handleCloseAlert } = useUsersList();
  const { translate } = useI18n();

  return (
    <>
      <PageTitle title={translate('users.titleList')} subTitle='Listagem de usuários' />
      <Table<TUser>
        data={users}
        columns={columns}
        onDelete={handleDelete}
        onNavigate={handleNavigate}
      />
      <Alert alertInfo={alertInfo} handleCloseAlert={handleCloseAlert} />
    </>
  );
};