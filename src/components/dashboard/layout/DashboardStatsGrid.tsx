import { useEffect, useState } from "react";
import { FcMindMap, FcOk, FcElectricalSensor } from "react-icons/fc";
import { useAppSelector } from "../../../redux/app/hooks";
import { selectAuth } from "../../../redux/slice/authSlice";

const DashboardStatsGrid = () => {
  const [taskCounts, setTaskCounts] = useState({
    total: 0,
    completed: 0,
    incomplete: 0,
  });
  const { userName } = useAppSelector(selectAuth);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const totalResponse = await fetch(
          `http://localhost:8080/tasks/user/${userName}`
        );
        const completedResponse = await fetch(
          `http://localhost:8080/tasks/user/${userName}/completed`
        );
        const incompleteResponse = await fetch(
          `http://localhost:8080/tasks/user/${userName}/incomplete`
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

  return (
    <>
      <div className="flex gap-4 w-full ">
        <BoxWrapper>
          <div className="rounded-full h-12 w-12 flex items-center justify-center">
            <FcMindMap className="text-5xl" />
          </div>
          <div className="pl-4">
            <span className="text-xl text-gray-500 font-light">Total Task</span>
            <div>
              <strong className="text-5xl text-gray-700 font-semibold">
                {taskCounts.total}
              </strong>
            </div>
          </div>
        </BoxWrapper>
        <BoxWrapper>
          <div className="rounded-full h-12 w-12 flex items-center justify-center">
            <FcOk className="text-5xl" />
          </div>
          <div className="pl-4">
            <span className="text-xl text-gray-500 font-light">
              Completed Task
            </span>
            <div>
              <strong className=" text-5xl text-gray-700 font-semibold">
                {taskCounts.completed}
              </strong>
            </div>
          </div>
        </BoxWrapper>
        <BoxWrapper>
          <div className="rounded-full h-12 w-12 flex items-center justify-center">
            <FcElectricalSensor className="text-5xl" />
          </div>
          <div className="pl-4">
            <span className="text-xl text-gray-500 font-light">
              Pending Task
            </span>
            <div>
              <strong className="text-5xl text-gray-700 font-semibold">
                {taskCounts.incomplete}
              </strong>
            </div>
          </div>
        </BoxWrapper>
      </div>
    </>
  );
};

export default DashboardStatsGrid;

function BoxWrapper({ children }) {
  return (
    <div className="bg-white rounded-lg p-4 flex-1 border border-gray-200 flex items-center shadow-md gap-5">
      {children}
    </div>
  );
}
