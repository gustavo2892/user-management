import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { TUser } from "./users.types";

type TUserState = {
  users: TUser[];
};

const initialState: TUserState = {
  users: [],
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers(state, action: PayloadAction<TUser[]>) {
      state.users = action.payload;
    },
    updateUser(state, action: PayloadAction<TUser>) {
      const idx = state.users.findIndex((u) => u.id === action.payload.id);
      if (idx !== -1) {
        state.users[idx] = action.payload;
      }
    },
    removeUser(state, action: PayloadAction<TUser["id"]>) {
      state.users = state.users.filter((u) => u.id !== action.payload);
    },
  },
});

export const { setUsers, updateUser, removeUser } = usersSlice.actions;
export default usersSlice.reducer;
