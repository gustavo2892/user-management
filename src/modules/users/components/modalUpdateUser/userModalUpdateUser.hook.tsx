import { useMutation, useQueryClient } from "@tanstack/react-query";

import { update } from "../../service/users.service";
import type { TUserDTO } from "../../users.types";
import { useAlert } from "@/shared/components";
import type { UseModalUpdateUserProps } from "./modalUpdateUser.types";

export const useModalUpdateUser = ({ user, onCloseModal }: UseModalUpdateUserProps) => {
  const queryClient = useQueryClient();
  const { alertInfo, showSuccess, showError, closeAlert } = useAlert();

  const mutation = useMutation({
    mutationFn: (userDTO: TUserDTO) => update(user?.id ?? "", userDTO),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      showSuccess("user.show.create.update");
      onCloseModal();
    },
    onError: (error: unknown) => {
      const message = error instanceof Error ? error.message : String(error);
      showError(message);
    },
  });

  const handleSubmit = (data: TUserDTO) => {
    mutation.mutate(data);
  };

  return {
    userData: user,
    isLoading: mutation.isPending,
    handleSubmit,
    alertInfo,
    handleCloseAlert: closeAlert,
  };
};
