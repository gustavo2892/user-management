import { useMutation } from "@tanstack/react-query";
import { UserForm } from "../../components/userForm/userForm";
import type { TUserDTO } from "../../users.types";
import { create } from "../../service/users.service";

export const UserCreate = () => {
  const mutation = useMutation({
    mutationFn: create,
  });

  const handleSubmit = (data: TUserDTO) => {
    mutation.mutate(data)
  }

  return <UserForm handleSubmit={handleSubmit} isLoading={mutation.isPending} />;
};