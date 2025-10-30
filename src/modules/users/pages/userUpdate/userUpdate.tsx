import { useParams } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";

import { UserForm } from "../../components/userForm/userForm";
import { getById, update } from '../../service/users.service';
import type { TUserDTO } from "../../users.types";

export const UserUpdate = () => {
  const { userId } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: getById.bind(null, userId ?? ''),
  });

  const mutation = useMutation({
    mutationFn: (userDTO: TUserDTO) => update(userId ?? '', userDTO),
  });

  const handleSubmit = (data: TUserDTO) => {
    mutation.mutate(data);
  }

  return <UserForm handleSubmit={handleSubmit} userData={data} isLoading={isLoading} />;
};