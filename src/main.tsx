import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home.tsx";
import Dashboard from "./components/dashboard/Dashboard.tsx";
import TaskList from "./components/dashboard/TaskList.tsx";
import CompletedTask from "./components/dashboard/CompletedTask.tsx";
import OngoingTask from "./components/dashboard/OngoingTask.tsx";
import { Provider } from "react-redux";
import Welcome from "./pages/Welcome.tsx";
import { store } from "./redux/app/store.ts";

import { AppProvider } from "./AppContext.tsx";
import PrivateRoute from "./components/dashboard/redirect/PrivateRoute.tsx";

const router = createBrowserRouter([
  {
    path: "/welcome",
    element: (
      <>
        <Welcome />
      </>
    ),
  },
  {
    path: "/",
    element: (
      <PrivateRoute>
        <Home />
      </PrivateRoute>
    ),
    children: [
      { index: true, element: <Dashboard /> },
      { path: "allTasks", element: <TaskList /> },
      { path: "completed", element: <CompletedTask /> },
      { path: "ongoing", element: <OngoingTask /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <AppProvider>
        <RouterProvider router={router} />
      </AppProvider>
    </Provider>
  </React.StrictMode>
);
