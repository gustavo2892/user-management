import { useParams, useNavigate } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { getById, update } from "../../service/users.service";
import type { TUserDTO } from "../../users.types";
import { useAlert } from "@/shared/components";
import { endpoints } from "@/shared/api/endpoints";

export const useUserUpdate = () => {
  const { userId } = useParams();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { alertInfo, showSuccess, showError, closeAlert } = useAlert();

  const { data, isLoading } = useQuery({
    queryKey: ["users", userId],
    queryFn: () => getById(userId ?? ""),
    enabled: !!userId,
  });

  const mutation = useMutation({
    mutationFn: (userDTO: TUserDTO) => update(userId ?? "", userDTO),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      showSuccess("user.show.create.update");

      navigate(`${endpoints.users}`);
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
    userData: data,
    isLoading,
    handleSubmit,
    alertInfo,
    handleCloseAlert: closeAlert,
  };
}