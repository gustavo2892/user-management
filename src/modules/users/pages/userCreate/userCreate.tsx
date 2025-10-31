import { UserForm } from "../../components/userForm/userForm";
import { useUserCreate } from "./userCreate.hook";
import { Alert, PageTitle } from "@/shared/components";

export const UserCreate = () => {
  const { alertInfo, handleCloseAlert, handleSubmit, isLoading } = useUserCreate();

  return (
    <>
      <PageTitle title="Criar Usuário" subTitle="Formulário de criar usuário" />
      <UserForm handleSubmit={handleSubmit} isLoading={isLoading} />
      <Alert alertInfo={alertInfo} handleCloseAlert={handleCloseAlert} />
    </>
  );
};