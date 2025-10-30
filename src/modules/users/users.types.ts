export const ACTIVE_STATUS = "active";
export const INACTIVE_STATUS = "inactive";

export const STATUSES = [ACTIVE_STATUS, INACTIVE_STATUS] as const;

export type TUser = {
  id: string;
  name: string;
  email: string;
  status: TStatus;
};

export type TUserDTO = Omit<TUser, "id">;

export type TStatus = (typeof STATUSES)[number];
