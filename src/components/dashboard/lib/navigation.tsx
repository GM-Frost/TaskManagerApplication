import { HiOutlineViewGrid } from "react-icons/hi";
import { BsPatchCheckFill } from "react-icons/bs";
import { FaListCheck, FaBarsProgress } from "react-icons/fa6";

export const SIDEBAR_LINKS = [
  {
    key: "dashboard",
    label: "Dashboard",
    path: "/",
    icon: <HiOutlineViewGrid />,
  },
  {
    key: "tasks",
    label: "Task List",
    path: "/allTasks",
    icon: <FaListCheck />,
  },
  {
    key: "completedTasks",
    label: "Completed Tasks",
    path: "/completed",
    icon: <BsPatchCheckFill />,
  },
  {
    key: "ongoingTasks",
    label: "Ongoing Tasks",
    path: "/ongoing",
    icon: <FaBarsProgress />,
  },
];
