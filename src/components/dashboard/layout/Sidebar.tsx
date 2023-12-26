import { FcSerialTasks } from "react-icons/fc";
import { SIDEBAR_LINKS } from "../lib/navigation";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { HiOutlineLogout } from "react-icons/hi";
import { useAppDispatch } from "../../../redux/app/hooks";
import { logout } from "../../../redux/slice/authSlice";

interface SidebarLinkProps {
  link: {
    path: string;
    label: string;
    icon: JSX.Element;
    key: string;
  };
}

const SideBarLink: React.FC<SidebarLinkProps> = ({ link }) => {
  const { pathname } = useLocation();

  const isActive = link.path === pathname;

  return (
    <Link
      to={link.path}
      className={`flex items-center gap-2 font-light px-3 py-2 hover:bg-[#fde68a] transition duration-300 hover:scale-110 hover:no-underline rounded-lg text-base ${
        isActive ? "bg-[#fde68a] text-red-800" : ""
      } `}
    >
      <span className="text-xl">{link.icon}</span>
      {link.label}
    </Link>
  );
};

const Sidebar = () => {
  const navigate = useNavigate();

  //handleLogout
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/welcome");
  };

  const fullyear = new Date().getFullYear();

  return (
    <>
      <div className="bg-[#ffffff] shadow-md text-black flex flex-col  w-64 p-3">
        <div className="flex items-center gap-2 px-1 py-3">
          <FcSerialTasks fontSize={24} />
          <header className="text-black-300 text-lg font-bold border-b">
            <span className="text-orange-700">Task Manager</span> App
          </header>
        </div>
        <div className="flex-1 py-8 flex flex-col gap-2">
          {SIDEBAR_LINKS.map((link) => (
            <SideBarLink key={link.key} link={link} />
          ))}
        </div>
        <button
          type="button"
          className="flex bg-black hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-md"
          onClick={() => handleLogout()}
        >
          <span className="text-xl">
            <HiOutlineLogout />
          </span>
          Logout
        </button>
        &copy; Nayan Bastola - {fullyear}
      </div>
    </>
  );
};

export default Sidebar;
