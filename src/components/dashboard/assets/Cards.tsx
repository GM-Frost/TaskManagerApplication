import { MdEditDocument, MdOutlineDelete } from "react-icons/md";
import { GiFireDash } from "react-icons/gi";
import { useAppSelector } from "../../../redux/app/hooks";
import { selectAuth } from "../../../redux/slice/authSlice";
import { useState, useEffect } from "react";
import axios from "axios";
import { Transition } from "@headlessui/react";
import EditTaskModal from "../modals/EditTaskModal";

interface Task {
  taskID: string;
  taskTitle: string;
  taskDesc: string;
  taskDate: string;
  taskDueDate: string;
}

interface CardsProps {
  onTaskCreated: () => void; // Define the prop type for the callback
  // Define the prop type for the callback
}
const Cards = ({ onTaskCreated }: CardsProps) => {
  const { userName } = useAppSelector(selectAuth);
  const [tasks, setTasks] = useState<Task[]>([]);

  //SHOWING EDIT MODAL FOR CARD EDIT
  const [showModal, setShowModal] = useState(false);
  const handleOnClose = () => {
    setShowModal(false);
  };

  const updateTasksAfterCreation = () => {
    // refetch tasks or update state
  };

  const updateTasksAfterEdit = () => {
    // Implement your logic to update tasks after a new task is created
    // For example, you could refetch tasks or update state
  };

  useEffect(() => {
    fetch(`http://localhost:8080/tasks/user/${userName}`)
      .then((response) => response.json())
      .then((data) => setTasks(data))
      .catch((error) => console.error("Error Fetching Task", error));
    if (onTaskCreated) {
      onTaskCreated();
    }
  }, [userName, onTaskCreated]);

  const handleDeleteTask = async (taskID: string) => {
    try {
      const response = await axios.delete(
        `http://localhost:8080/tasks/${taskID}/delete`
      );

      if (response.status === 200) {
        setTasks((prevTasks) =>
          prevTasks.filter((task) => task.taskID !== taskID)
        );
      } else {
        console.log("Error deleting task");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const handleEditTask = (task: Task) => {
    setSelectedTask(task);
  };

  return (
    <>
      <div className="flex justify-center p-12">
        <div className="overflow-y-auto max-h-[calc(100vh-200px)]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {tasks.map((task, index) => (
              <div
                key={task.taskID}
                className="p-6 bg-white border border-gray-200 rounded-lg shadow"
              >
                <div className="flex justify-end text-sm text-gray-400">
                  <p>{task.taskDate}</p>
                </div>
                <GiFireDash className="text-orange-600" />
                <a href="#">
                  <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {task.taskTitle}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                  {task.taskDesc}
                </p>
                <div className="flex items-center justify-start gap-3">
                  <div className="flex items-center mr-4">
                    <input
                      id={`green-checkbox-${index}`}
                      type="checkbox"
                      value=""
                      className="cursor-pointer w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor={`green-checkbox-${index}`}
                      className="ml-2 text-xs md:text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Complete
                    </label>
                  </div>
                </div>
                <div className="mt-3 flex justify-between items-center">
                  <div className="align-center text-sm text-gray-400">
                    <p>Due : {task.taskDueDate}</p>
                  </div>
                  <div className="flex align-center items-center gap-2 mt-3">
                    <MdEditDocument
                      onClick={() => setShowModal(true)}
                      className="text-blue-400 cursor-pointer hover:text-blue-600 hover:-translate-y-1 transition ease-in-out delay-150"
                    />
                    <MdOutlineDelete
                      onClick={() => handleDeleteTask(task.taskID)}
                      className="text-red-400 cursor-pointer hover:text-red-600 hover:-translate-y-1 transition ease-in-out delay-150"
                    />
                  </div>
                </div>
                <Transition
                  show={showModal}
                  enter="transition-opacity duration-700"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="transition-opacity duration-150"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <EditTaskModal
                    onClose={handleOnClose}
                    visible={showModal}
                    onTaskEdited={updateTasksAfterCreation}
                    // Pass the selected task to EditTaskModal
                  />
                </Transition>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
