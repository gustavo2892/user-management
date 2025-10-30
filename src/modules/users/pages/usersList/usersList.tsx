import { Table, Alert } from '@/shared/components';
import type { TUser } from "../../users.types";
import { columns } from "./usersList.constants";
import { useUsersList } from "./usersList.hook";

export const UsersList = () => {
  const { alertInfo, users, handleDelete, handleNavigate, handleCloseAlert } = useUsersList();

  return <div style={{ maxWidth: 900, margin: "auto", padding: 20 }}>
    <h1>Usuários</h1>
    <Table<TUser>
      data={users}
      columns={columns}
      onDelete={handleDelete}
      onNavigate={handleNavigate}
    />
    <Alert alertInfo={alertInfo} handleCloseAlert={handleCloseAlert} />
  </div>;
};