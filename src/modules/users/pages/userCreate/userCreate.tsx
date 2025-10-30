import { UserForm } from "../../components/userForm/userForm";
import { useUserCreate } from "./userCreate.hook";
import { Alert } from "@/shared/components";

export const UserCreate = () => {
  const { alertInfo, handleCloseAlert, handleSubmit, isLoading } = useUserCreate();

  return (
    <>
      <UserForm handleSubmit={handleSubmit} isLoading={isLoading} />
      <Alert alertInfo={alertInfo} handleCloseAlert={handleCloseAlert} />
    </>
  );
};