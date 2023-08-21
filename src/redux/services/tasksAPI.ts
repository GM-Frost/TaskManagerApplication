import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Task } from "../slice/tasksSlice";

export const tasksApi = createApi({
  reducerPath: "tasksApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8081",
  }),
  endpoints: (builder) => ({
    createTasks: builder.mutation({
      query: (body: Task[]) => {
        return {
          url: "/tasks/create",
          method: "post",
          body,
        };
      },
    }),
    fetchTasks: builder.query<Task[], void>({
      query: () => "/tasks/showtasks",
    }),
  }),
});

export const { useCreateTasksMutation, useFetchTasksQuery } = tasksApi;
