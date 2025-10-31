import { useI18n } from "@/shared/i18n";
import { UserForm } from "../../components/userForm/userForm";
import { useUserUpdate } from "./useUserUpdate";
import { Alert, PageTitle } from "@/shared/components";

export const UserUpdate = () => {
  const { userData, isLoading, alertInfo, handleSubmit, handleCloseAlert } = useUserUpdate();
  const { translate } = useI18n();

  return (
    <>
      <PageTitle title={translate('users.title.update')} />
      <UserForm handleSubmit={handleSubmit} userData={userData} isLoading={isLoading} />
      <Alert alertInfo={alertInfo} handleCloseAlert={handleCloseAlert} />
    </>
  );
};