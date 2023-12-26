import { useState, useEffect } from "react";
import axios from "axios";
import { useAppSelector } from "../../redux/app/hooks";
import { selectAuth } from "../../redux/slice/authSlice";

import { BsCalendar2DateFill } from "react-icons/bs";
import { SiStatuspage } from "react-icons/si";
import { FaTasks } from "react-icons/fa";
import { TbProgressHelp } from "react-icons/tb";
import { MdSubtitles } from "react-icons/md";
import { ENV } from "../../config";
interface Task {
  taskID: string;
  taskTitle: string;
  taskDesc: string;
  taskDate: string;
  taskDueDate: string;
  complete: boolean;
}

const OngoingTask = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const { userName } = useAppSelector(selectAuth);

  useEffect(() => {
    const apiUrl = `${ENV.host}/tasks/user/${userName}/incomplete`;

    axios
      .get<Task[]>(apiUrl)
      .then((response) => {
        setTasks(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs bg-black  text-[#fde68a] uppercase dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 ">
                <span className="flex gap-2 cursor-default transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
                  Task Title
                  <MdSubtitles className="text-lg font-bold" />
                </span>
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="flex gap-2 cursor-default transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
                  Task Description
                  <FaTasks className="text-lg font-bold" />
                </span>
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="flex gap-2 cursor-default transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
                  Created Date
                  <BsCalendar2DateFill className="text-green-600 text-lg font-bold" />
                </span>
              </th>
              <th scope="col" className="px-6 py-3 gap-2">
                <span className="flex gap-2 cursor-default transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
                  Due Date
                  <BsCalendar2DateFill className="text-orange-600 text-lg font-bold" />
                </span>
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="flex gap-2 cursor-default transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
                  Status
                  <SiStatuspage className="text-lg font-bold" />
                </span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {tasks.map((task) => (
              <tr
                key={task.taskID}
                className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-200"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap  dark:text-white dark:bg-gray-800"
                >
                  {task.taskTitle}
                </th>
                <td
                  className="px-6 py-4 truncate"
                  style={{ maxWidth: "200px" }}
                >
                  {task.taskDesc}
                </td>
                <td className="px-6 py-4 dark:bg-gray-800 ">{task.taskDate}</td>
                <td className="px-6 py-4">{task.taskDueDate}</td>
                <td className="px-6 py-4">
                  <span className="flex gap-2">
                    In-Progress
                    <TbProgressHelp className="text-orange-500 text-lg font-bold" />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default OngoingTask;
