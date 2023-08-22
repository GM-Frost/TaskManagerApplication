import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "../services/authAPI";

import authReducer, { setUser } from "../slice/authSlice";

import { setupListeners } from "@reduxjs/toolkit/query/react";

const storedUser = localStorage.getItem("user");
let preloadedState = {
  auth: storedUser ? JSON.parse(storedUser) : undefined,
};

export const store = configureStore({
  reducer: {
    auth: authReducer,

    [authApi.reducerPath]: authApi.reducer,
  },
  preloadedState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

// Hydrate the Redux state with the stored user data
if (storedUser) {
  store.dispatch(setUser(JSON.parse(storedUser)));
}

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
setupListeners(store.dispatch);
