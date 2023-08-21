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
  isComplete: boolean;
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

  const updateTasksAfterEdit = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/tasks/user/${userName}`
      );
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.error("Error updating tasks after edit:", error);
    }
  };

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

  const openEditModal = (task: Task) => {
    setSelectedTask(task);
    setShowModal(true);
  };

  const handleCheckboxChange = async (taskID: string, isChecked: boolean) => {
    try {
      await axios.put(`http://localhost:8080/tasks/${taskID}/update/status`, {
        complete: isChecked,
      });
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.taskID === taskID ? { ...task, isComplete: isChecked } : task
        )
      );
    } catch (error) {
      console.error("Error updating task status:", error);
    }
  };

  // useEffect(() => {
  //   fetch(`http://localhost:8080/tasks/user/${userName}`)
  //     .then((response) => response.json())
  //     .then((data) => setTasks(data))
  //     .catch((error) => console.error("Error Fetching Task", error));
  //   if (onTaskCreated) {
  //     onTaskCreated();
  //   }
  // }, [userName, onTaskCreated]);

  useEffect(() => {
    fetch(`http://localhost:8080/tasks/user/${userName}`)
      .then((response) => response.json())
      .then((data) => {
        // Set initial isComplete values based on fetched data
        const tasksWithInitialCompletion = data.map((task: any) => ({
          ...task,
          isComplete: task.complete, // Assuming the API response has a property named 'complete' for completion status
        }));
        setTasks(tasksWithInitialCompletion);
      })
      .catch((error) => console.error("Error Fetching Task", error));
    if (onTaskCreated) {
      onTaskCreated();
    }
  }, [userName, onTaskCreated]);

  return (
    <>
      <div className="container my-12 mx-auto px-4 md:px-12">
        <div className="overflow-y-auto max-h-[calc(100vh-300px)] flex flex-wrap -mx-1 lg:-mx-4">
          {tasks.map((task, index) => (
            <div
              key={task.taskID}
              className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"
            >
              <article className="bg-white  overflow-hidden rounded-lg shadow-lg">
                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                  <GiFireDash className="text-orange-600" />
                  <h1 className="text-lg">{task.taskTitle}</h1>
                  <p className="text-grey-darker text-sm">{task.taskDate}</p>
                </header>
                <p className="p-4 text-start mb-3 font-normal text-gray-500 dark:text-gray-400">
                  {task.taskDesc}
                </p>

                <div className="flex items-center justify-start mb-2">
                  <div className="flex items-center ml-4">
                    <input
                      id={`green-checkbox-${index}`}
                      type="checkbox"
                      checked={task.isComplete}
                      onChange={(e) =>
                        handleCheckboxChange(task.taskID, e.target.checked)
                      }
                      className="cursor-pointer w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label className="ml-2 text-xs md:text-sm font-medium text-gray-900 dark:text-gray-300">
                      Complete
                    </label>
                  </div>
                </div>
                <hr />
                <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                  <div className="align-center text-sm text-gray-400">
                    <p>Due : {task.taskDueDate}</p>
                  </div>

                  <div className="flex align-center items-center gap-2 mt-3">
                    <MdEditDocument
                      onClick={() => openEditModal(task)}
                      className="font-bold text-blue-400 cursor-pointer hover:text-blue-600 hover:-translate-y-1 transition ease-in-out delay-150"
                    />
                    <MdOutlineDelete
                      onClick={() => handleDeleteTask(task.taskID)}
                      className="font-bold text-red-400 cursor-pointer hover:text-red-600 hover:-translate-y-1 transition ease-in-out delay-150"
                    />
                  </div>
                </footer>
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
                    visible={showModal} // Change to the visibility state as needed
                    onClose={handleOnClose} // Provide your onClose function
                    onTaskEdited={updateTasksAfterEdit} // Provide your onTaskEdited function
                    task={selectedTask} // Pass the task details here
                  />
                </Transition>
              </article>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Cards;
