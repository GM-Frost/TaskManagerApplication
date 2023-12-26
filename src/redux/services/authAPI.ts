import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ENV } from "../../config";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${ENV.host}`,
  }),
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (body: { userName: string; password: string }) => {
        return {
          url: "/users/login",
          method: "post",
          body,
        };
      },
    }),
    registerUser: builder.mutation({
      query: (body: {
        fname: string;
        lname: string;
        email: string;
        userName: string;
        password: string;
      }) => {
        return {
          url: "/users/create",
          method: "post",
          body,
        };
      },
    }),
  }),
});

export const { useLoginUserMutation, useRegisterUserMutation } = authApi;
