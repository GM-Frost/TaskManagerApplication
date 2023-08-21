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
}

interface EditTaskModalProps {
  visible: boolean;
  onClose: () => void;
  onTaskEdited: () => void;
  task: Task | null;
}

const EditTaskModal = ({
  visible,
  onClose,
  onTaskEdited,
  task, // Task prop passed from parent component
}: EditTaskModalProps) => {
  const [message, setMessage] = useState<string | JSX.Element | null>(null);
  const [editedTask, setEditedTask] = useState<Task | null>(null);

  useEffect(() => {
    // When the task prop changes, update the editedTask state
    setEditedTask(task);
  }, [task]);

  const handleOnClose = (e: React.MouseEvent) => {
    if (e.target.id === "modalContainer") onClose();
  };

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setEditedTask((prevTask) => ({
      ...prevTask!,
      [name]: value,
    }));
  };

  const handleTaskEdit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !editedTask?.taskTitle ||
      !editedTask?.taskDesc ||
      !editedTask?.taskDueDate
    ) {
      setMessage(
        <span style={{ color: "red" }}>Please fill in all the details</span>
      );
      return;
    }

    try {
      const response = await axios.put(
        `http://localhost:8080/tasks/${editedTask.taskID}/update`,
        editedTask
      );

      if (response.status === 200) {
        setMessage(
          <span style={{ color: "green" }}>Task Edited successfully</span>
        );
        if (onTaskEdited) {
          onTaskEdited(); // Trigger the callback to update tasks after editing
        }
      } else {
        setMessage(<span style={{ color: "red" }}>Error editing task</span>);
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage(
        <span style={{ color: "red" }}>
          An error occurred while editing the task
        </span>
      );
    }
  };

  return (
    <>
      <div
        id="modalContainer"
        onClick={handleOnClose}
        className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
      >
        <div className="bg-white p-2 rounded-md">
          <div className="flex justify-between mb-10">
            <p className="text-center left-0">Edit the Task</p>
            <p
              className="text-center justify-center cursor-pointer hover:text-red-600"
              onClick={onClose}
            >
              x
            </p>
          </div>
          <div className="w-full max-w-xs">
            {message && <p className="text-center">{message}</p>}
            <form className="px-8 pt-6 pb-8 mb-4" onSubmit={handleTaskEdit}>
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
                  value={editedTask?.taskTitle}
                  onChange={handleFormChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="taskTitle"
                />
                <input
                  type="text"
                  name="taskDate"
                  value={editedTask?.taskDate}
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
                  value={editedTask?.taskDesc}
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
                  value={editedTask?.taskDueDate}
                  onChange={handleFormChange}
                  className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="flex items-center justify-center">
                <div className="text-center">
                  <button className="ptext-gray-900 bg-[#fde68a] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 mr-2 mb-2">
                    Edit Task
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

export default EditTaskModal;
