import { UserForm } from "../../components/userForm/userForm";
import { useUserUpdate } from "./useUserUpdate";
import { Alert } from "@/shared/components";

export const UserUpdate = () => {
  const { userData, isLoading, alertInfo, handleSubmit, handleCloseAlert } = useUserUpdate();

  return (
    <>
      <UserForm handleSubmit={handleSubmit} userData={userData} isLoading={isLoading} />
      <Alert alertInfo={alertInfo} handleCloseAlert={handleCloseAlert} />
    </>
  );
};