import { useMutation, useQueryClient } from "@tanstack/react-query";

import { create } from "../../service/users.service";
import type { TUserDTO } from "../../users.types";
import { useAlert } from "@/shared/components";
import type { UseModalCreateUserProps } from "./modalCreateUser.types";

export const useModalCreateUser = ({ onCloseModal }: UseModalCreateUserProps) => {
  const queryClient = useQueryClient();
  const { alertInfo, showSuccess, showError, closeAlert } = useAlert();

  const mutation = useMutation({
    mutationFn: (data: TUserDTO) => create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      showSuccess("user.show.create.success");
      onCloseModal();
    },
    onError: (error: unknown) => {
      const message = error instanceof Error ? error.message : String(error);
      showError(message);
    },
  });

  const handleSubmit = (data: TUserDTO) => mutation.mutate(data);

  return {
    handleSubmit,
    isLoading: mutation.isPending,
    alertInfo,
    handleCloseAlert: closeAlert,
  };
};
