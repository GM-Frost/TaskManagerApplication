//to store in local storage

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

export interface AuthState {
  fname: string | null;
  userName: string | null;
  token: string | null;
}
const initialState: AuthState = {
  fname: null,
  userName: null,
  token: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (
      state,
      action: PayloadAction<{
        fname: string;
        userName: string;
        token: string;
      }>
    ) => {
      localStorage.setItem(
        "user",
        JSON.stringify({
          fname: action.payload.fname,
          userName: action.payload.userName,
          token: action.payload.token,
        })
      );
      return {
        ...state,
        fname: action.payload.fname,
        userName: action.payload.userName,
        token: action.payload.token,
      };
    },

    //for logout
    logout: (state) => {
      localStorage.clear();
      state.fname = null;
      state.userName = null;
      state.token = null;
    },
  },
});

//create selector to select state
export const selectAuth = (state: RootState) => state.auth;

//export actions
export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
