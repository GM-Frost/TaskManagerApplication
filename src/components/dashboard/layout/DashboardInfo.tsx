import { FcHighPriority } from "react-icons/fc";
import { useAppSelector } from "../../../redux/app/hooks";
import { selectAuth } from "../../../redux/slice/authSlice";
import { useEffect, useState } from "react";
import { ENV } from "../../../config";

interface Task {
  taskTitle: string;
  taskDesc: string;
  taskDueDate: string;
}

const DashboardInfo = () => {
  const { fname } = useAppSelector(selectAuth);
  const { userName } = useAppSelector(selectAuth);

  const [taskCounts, setTaskCounts] = useState({
    total: 0,
    completed: 0,
    incomplete: 0,
  });

  const [tasksForToday, setTasksForToday] = useState<Task[]>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const totalResponse = await fetch(`${ENV.host}/tasks/user/${userName}`);
        const completedResponse = await fetch(
          `${ENV.host}/tasks/user/${userName}/completed`
        );
        const incompleteResponse = await fetch(
          `${ENV.host}/tasks/user/${userName}/incomplete`
        );

        const totalData = await totalResponse.json();
        const completedData = await completedResponse.json();
        const incompleteData = await incompleteResponse.json();

        const taskCounts = {
          total: totalData.length,
          completed: completedData.length,
          incomplete: incompleteData.length,
        };

        setTaskCounts(taskCounts);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, [userName]);

  useEffect(() => {
    const fetchTasksForToday = async () => {
      try {
        const response = await fetch(`${ENV.host}/tasks/user/${userName}`);
        const data = await response.json();

        // Get today's date in the format "YYYY-MM-DD"
        const todayDate = new Date().toISOString().split("T")[0];

        // Filter tasks that have the same taskDueDate as today
        const tasksToday = data.filter(
          (task: any) => task.taskDueDate === todayDate
        );

        setTasksForToday(tasksToday);
      } catch (error) {
        console.error("Error fetching tasks for today:", error);
      }
    };

    fetchTasksForToday();
  }, [userName]);

  return (
    <>
      <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-md flex flex-col flex-1">
        <div className="flex flex-col items-center justify-center text-xl font-bold h-full">
          <q className="border-gray-200 text-center">
            Elevate your productivity with Task Manager. Achieve more,
            effortlessly.
          </q>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-2 mt-10 p-4 ">
          <div className="statsdiv flex flex-col md:w-1/2 md:h-full">
            <h1 className="text-xl font-bold">Stats</h1>
            <div className="mt-5 bg-yellow-100 rounded-lg p-4 relative border border-none flex flex-col flex-1 text-lg">
              Good Day! {fname}
            </div>
            <div className="flex gap-2">
              <div className="mt-1 bg-green-100 rounded-lg p-4 relative border border-none flex flex-col flex-1">
                <div className="flex flex-col gap-2">
                  <h1 className="text-xl font-bold">{taskCounts.completed}</h1>
                  <span className="text-sm">Task Completed</span>
                </div>
              </div>
              <div className="mt-1 bg-red-100 rounded-lg p-4 relative border border-none flex flex-col flex-1">
                <div className="flex flex-col gap-2">
                  <h1 className="text-xl font-bold">{taskCounts.incomplete}</h1>
                  <span className="text-sm">Task Pending</span>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="mt-1 gap-2 bg-purple-100 rounded-lg p-4 relative border border-none flex flex-col flex-1">
                <h1 className="text-sm font-bold">Your Daily Plan</h1>
                <span className="text-sm">
                  {taskCounts.completed} of {taskCounts.total} Completed
                </span>
              </div>
            </div>
          </div>
          <div className="taskdiv flex flex-col md:w-1/2 md:h-full">
            <div className=" mb-2 md:order-last float-right">
              <span className="font-bold text-xl ">Your Task Today</span>
              <div className="flex justify-center flex-col">
                {tasksForToday.length > 0 ? (
                  tasksForToday.map((task, index) => (
                    <div
                      key={index}
                      className="mt-5 rounded-lg p-4  border border-gray-100 flex-row"
                    >
                      <div className="flex justify-between text-sm text-gray-500">
                        <p>{task.taskTitle}</p>
                        <p>{task.taskDueDate}</p>
                      </div>
                      <div
                        className="px-6 py-4 truncate"
                        style={{ maxWidth: "200px" }}
                      >
                        <p>{task.taskDesc}</p>
                      </div>
                      <div className="mt-5 text-sm">
                        <p className="flex gap-2">
                          <FcHighPriority /> Deadline is today
                        </p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>No tasks for today</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardInfo;
