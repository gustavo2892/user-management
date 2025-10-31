import { useI18n } from "@/shared/i18n";
import { UserForm } from "../../components/userForm/userForm";
import { useUserCreate } from "./userCreate.hook";
import { Alert, PageTitle } from "@/shared/components";

export const UserCreate = () => {
  const { alertInfo, handleCloseAlert, handleSubmit, isLoading } = useUserCreate();
  const { translate } = useI18n();

  return (
    <>
      <PageTitle title={translate('users.title.create')} />
      <UserForm handleSubmit={handleSubmit} isLoading={isLoading} />
      <Alert alertInfo={alertInfo} handleCloseAlert={handleCloseAlert} />
    </>
  );
};