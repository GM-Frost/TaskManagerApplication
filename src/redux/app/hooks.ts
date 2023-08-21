import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "./store";
import {
  useCreateTasksMutation,
  useFetchTasksQuery,
} from "../services/tasksAPI";

// use this throughout the app instead of plain 'useDispatch' and 'useSelector'
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useFetchTasks = () => useFetchTasksQuery();
export const useCreateTask = () => useCreateTasksMutation();
