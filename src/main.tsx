import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import {
  createBrowserRouter,
  Outlet,
  Route,
  Router,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Register from "./pages/Register.tsx";
import Login from "./pages/Login.tsx";
import Home from "./pages/Home.tsx";
import Dashboard from "./components/dashboard/Dashboard.tsx";
import TaskList from "./components/dashboard/TaskList.tsx";
import CompletedTask from "./components/dashboard/CompletedTask.tsx";
import OngoingTask from "./components/dashboard/OngoingTask.tsx";

const router = createBrowserRouter([
  {
    path: "/register",
    element: (
      <>
        <Register />
      </>
    ),
  },
  {
    path: "/login",
    element: (
      <>
        <Login />
      </>
    ),
  },
  {
    path: "/",
    element: <Home />,
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
    <RouterProvider router={router} />
  </React.StrictMode>
);
