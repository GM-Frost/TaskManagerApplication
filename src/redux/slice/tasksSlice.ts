import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

export interface Task {
  taskID: string;
  taskTitle: string;
  taskDescription: string;
  taskDate: string;
  taskDueDate: string;
  userId: string;
}
export interface TasksState {
  tasks: Task[];
}

const initialState: TasksState = {
  tasks: [],
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    setTasks: (state, action: PayloadAction<Task[]>) => {
      localStorage.setItem(
        "tasks",
        JSON.stringify({
          taskID: action.payload,
          taskTitle: action.payload,
          taskDescription: action.payload,
          taskDate: action.payload,
          taskDueDate: action.payload,
          userId: action.payload,
        })
      );

      return {
        ...state,
        taskID: action.payload,
        taskTitle: action.payload,
        taskDescription: action.payload,
        taskDate: action.payload,
        taskDueDate: action.payload,
        userId: action.payload,
      };
    },
    // Add other actions as needed
  },
});
//create selector to select state
export const selectTasks = (state: RootState) => state.tasks.tasks;

//export actions
export const { setTasks } = tasksSlice.actions;
export default tasksSlice.reducer;
