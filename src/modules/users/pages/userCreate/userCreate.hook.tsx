import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { create } from "../../service/users.service";
import type { TUserDTO } from "../../users.types";
import { useAlert } from "@/shared/components";
import { endpoints } from "@/shared/api/endpoints";

export const useUserCreate = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { alertInfo, showSuccess, showError, closeAlert } = useAlert();

  const mutation = useMutation({
    mutationFn: (data: TUserDTO) => create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      showSuccess("Usuário criado com sucesso!");
      navigate(`${endpoints.users}`);
    },
    onError: (error: unknown) => {
      const message = error instanceof Error ? error.message : String(error);
      showError(`Erro ao criar usuário: ${message}`);
    },
  });

  const handleSubmit = (data: TUserDTO) => mutation.mutate(data);

  return {
    handleSubmit,
    isLoading: mutation.isPending,
    alertInfo,
    handleCloseAlert: closeAlert,
  };
}