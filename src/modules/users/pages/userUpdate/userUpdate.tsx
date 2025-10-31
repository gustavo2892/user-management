import { UserForm } from "../../components/userForm/userForm";
import { useUserUpdate } from "./useUserUpdate";
import { Alert, PageTitle } from "@/shared/components";

export const UserUpdate = () => {
  const { userData, isLoading, alertInfo, handleSubmit, handleCloseAlert } = useUserUpdate();

  return (
    <>
      <PageTitle title="Atualizar Usuário" subTitle="Formulário de atualizar usuário" />
      <UserForm handleSubmit={handleSubmit} userData={userData} isLoading={isLoading} />
      <Alert alertInfo={alertInfo} handleCloseAlert={handleCloseAlert} />
    </>
  );
};