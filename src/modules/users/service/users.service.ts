import api from "@/shared/api/api.service";
import { endpoints } from "@/shared/api/endpoints";
import type { TUser, TUserDTO } from "../users.types";

export const list = () => {
  const response = api.get<TUser[]>(endpoints.users).then((res) => res.data);

  return response;
};

export const getById = (id: TUser["id"]) => {
  const response = api.get<TUser>(`${endpoints.users}/${id}`).then((res) => res.data);

  return response;
};

export const create = (data: TUserDTO) => {
  // This ID would not be used in a real project, as the database would create the ID.
  const id = Math.random().toString(36).substring(2, 9);
  const response = api.post<TUser>(endpoints.users, { id, ...data }).then((res) => res.data);

  return response;
};

export const update = (id: TUser["id"], data: TUserDTO) => {
  const response = api.put<TUser>(`${endpoints.users}/${id}`, data).then((res) => res.data);

  return response;
};

export const remove = (id: TUser["id"]) => {
  const response = api.delete<never>(`${endpoints.users}/${id}`).then((res) => res.data);

  return response;
};
