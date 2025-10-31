import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { list, remove } from "../../service/users.service";
import type { TUser } from "../../users.types";
import { setUsers } from "../../users.slice";
import type { RootState } from "@/shared/redux/store";
import { useAlert } from "@/shared/components";

export const useUsersList = () => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const { alertInfo, showSuccess, showError, closeAlert } = useAlert();
  const [openModalUpdate, setOpenModalUpdate] = useState(false);
  const [openModalCreate, setOpenModalCreate] = useState(false);
  const [userUpdate, setUserUpdate] = useState<TUser | null>(null);

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

  const handleOpenModalUpdate = (row: TUser) => {
    setUserUpdate(row);
    setOpenModalUpdate(true);
  };

  const handleCloseModalUpdate = () => {
    setOpenModalUpdate(false);
    setUserUpdate(null);
  };

  const handleOpenModalCreate = () => {
    setOpenModalCreate(true);
  };

  const handleCloseModalCreate = () => {
    setOpenModalCreate(false);
  };

  return {
    users,
    alertInfo,
    handleDelete,
    handleCloseAlert: closeAlert,
    handleOpenModalUpdate,
    handleCloseModalUpdate,
    openModalUpdate,
    userUpdate,
    handleOpenModalCreate,
    handleCloseModalCreate,
    openModalCreate,
  };
};
