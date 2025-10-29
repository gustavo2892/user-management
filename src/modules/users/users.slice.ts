import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { IUser } from "./users.types";

interface IUserState {
  users: IUser[];
}

const initialState: IUserState = {
  users: [],
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    create: (state, action: PayloadAction<IUser>) => {
      // TODO Add create user
      state.users = [action.payload];
    },
    update: (state, action: PayloadAction<IUser>) => {
      // TODO Add update user
      state.users = [action.payload];
    },
    remove: (state, action: PayloadAction<IUser>) => {
      // TODO Add remove user
      state.users = [action.payload];
    },
  },
});

export const { create, update, remove } = usersSlice.actions;
export default usersSlice.reducer;
