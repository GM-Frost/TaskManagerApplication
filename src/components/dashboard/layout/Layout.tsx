import Header from "./Header";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { Footer } from "flowbite-react";

const Layout = () => {
  return (
    <>
      <div className="flex flex-row h-screen w-screen overflow-hidden">
        <Sidebar />
        <div className="flex-1">
          <Header />
          <div className="p-4">{<Outlet />}</div>
        </div>
      </div>
    </>
  );
};

export default Layout;
