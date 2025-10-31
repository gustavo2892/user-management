import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { list, remove } from "../../service/users.service";
import type { TUser } from "../../users.types";
import { setUsers } from "../../users.slice";
import type { RootState } from "@/shared/redux/store";
import { useAlert } from "@/shared/components";
import { endpoints } from "@/shared/api/endpoints";

export const useUsersList = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { alertInfo, showSuccess, showError, closeAlert } = useAlert();

  const { data } = useQuery({
    queryKey: ["users"],
    queryFn: list,
  });

  const users = useSelector((state: RootState) => state.users.users);

  useEffect(() => {
    if (data) dispatch(setUsers(data));
  }, [data, dispatch]);

  const mutation = useMutation({
    mutationFn: (user: TUser) => remove(user.id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      showSuccess("user.show.create.delete");
    },
    onError: (error: unknown) => {
      const message = error instanceof Error ? error.message : String(error);
      showError(message);
    },
  });

  const handleDelete = (user: TUser) => mutation.mutate(user);

  const handleNavigate = (user: TUser) => {
    navigate(`${endpoints.users}/${user.id}`);
  };

  return {
    users,
    alertInfo,
    handleDelete,
    handleNavigate,
    handleCloseAlert: closeAlert,
  };
}