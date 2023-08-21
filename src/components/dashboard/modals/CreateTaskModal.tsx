import { useAppDispatch, useAppSelector } from "../../../redux/app/hooks";
import { useEffect, useState } from "react";
import { selectAuth } from "../../../redux/slice/authSlice";
import axios from "axios";

interface TaskFormProps {
  onSubmit: (task: Task) => void;
}

interface Task {
  taskTitle: string;
  taskDesc: string;
  taskDate: string;
  taskDueDate: string;
  isComplete: boolean;
}

interface CreateTaskModalProps {
  visible: boolean;
  onClose: () => void;
  onTaskCreated: () => void;
}

const CreateTaskModal = ({
  visible,
  onClose,
  onTaskCreated,
}: CreateTaskModalProps) => {
  const getCurrentDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const handleOnClose = (e: any) => {
    if (e.target.id === "modalContainer") onClose();
  };
  if (!visible) return null;

  const [message, setMessage] = useState<string | JSX.Element | null>(null);

  const [task, setTask] = useState<Task>({
    taskTitle: "",
    taskDesc: "",
    taskDate: getCurrentDate(),
    taskDueDate: "",
    isComplete: false,
  });

  const resetFormData = () => {
    setTask({
      taskTitle: "",
      taskDesc: "",
      taskDate: "",
      taskDueDate: "",
      isComplete: false,
    });
  };

  const handleFormChange = (e: any) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleTaskSubmit = async (e: any) => {
    e.preventDefault();
    if (!task.taskTitle || !task.taskDesc || !task.taskDueDate) {
      setMessage(
        <span style={{ color: "red" }}>Please fill in all the details</span>
      );
      return;
    }
    try {
      const response = await axios.post(
        `http://localhost:8080/tasks/${userName}/create`,
        task
      );

      if (response.status === 200) {
        setMessage(
          <span style={{ color: "green" }}>Task Created successfully</span>
        );
        resetFormData();
        if (onTaskCreated) {
          onTaskCreated(); // Trigger the callback to update tasks after a new task is created
        }
        // You can perform any additional actions after successful task creation
      } else {
        setMessage(<span style={{ color: "red" }}>Error creating task</span>);
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage(
        <span style={{ color: "red" }}>
          An error occurred while creating the task
        </span>
      );
    }
  };
  const { userName } = useAppSelector(selectAuth);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage("");
    }, 2000);

    return () => clearTimeout(timer);
  }, [message]);

  return (
    <>
      <div
        id="modalContainer"
        onClick={handleOnClose}
        className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
      >
        <div className="bg-white p-2 rounded-md">
          <div className="flex justify-between mb-10">
            <p className="text-center left-0">Create a Task</p>
            <p
              className="text-center justify-center cursor-pointer hover:text-red-600"
              onClick={onClose}
            >
              x
            </p>
          </div>
          <div className="w-full max-w-xs">
            {message && <p className="text-center">{message}</p>}
            <form className="px-8 pt-6 pb-8 mb-4" onSubmit={handleTaskSubmit}>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="title"
                >
                  Task Title
                </label>
                <input
                  type="text"
                  placeholder="Title..."
                  name="taskTitle"
                  value={task.taskTitle}
                  onChange={handleFormChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="taskTitle"
                />
                <input
                  type="text"
                  name="taskDate"
                  value={task.taskDate}
                  hidden
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="taskDate"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="description"
                >
                  Descriptions
                </label>
                <textarea
                  placeholder="descriptions"
                  name="taskDesc"
                  value={task.taskDesc}
                  onChange={handleFormChange}
                  className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="description"
                >
                  Due Date
                </label>
                <input
                  type="date"
                  name="taskDueDate"
                  value={task.taskDueDate}
                  onChange={handleFormChange}
                  className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="flex items-center justify-center">
                <div className="text-center">
                  <button className="ptext-gray-900 bg-[#fde68a] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 mr-2 mb-2">
                    Add Task
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateTaskModal;
