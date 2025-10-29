import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { TUser } from "./users.types";

interface IUserState {
  users: TUser[];
}

const initialState: IUserState = {
  users: [],
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    create: (state, action: PayloadAction<TUser>) => {
      // TODO Add create user
      state.users = [action.payload];
    },
    update: (state, action: PayloadAction<TUser>) => {
      // TODO Add update user
      state.users = [action.payload];
    },
    remove: (state, action: PayloadAction<TUser>) => {
      // TODO Add remove user
      state.users = [action.payload];
    },
  },
});

export const { create, update, remove } = usersSlice.actions;
export default usersSlice.reducer;
