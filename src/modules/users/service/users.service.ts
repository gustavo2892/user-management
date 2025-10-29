import api from "../../../api/api.service";
import { endpoints } from "../../../api/endpoints";
import type { TUser } from "../users.types";

export const getAllUsers = async (): Promise<TUser[]> => {
  const response = await api.get(endpoints.users);
  return response.data as TUser[];
};
