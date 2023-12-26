import React, { useState } from "react";
import { IoCreateSharp } from "react-icons/io5";

import { Transition } from "@headlessui/react";
import Cards from "./assets/Cards";
import CreateTaskModal from "./modals/CreateTaskModal";

const TaskList: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOnClose = () => {
    setShowModal(false);
  };

  const updateTasksAfterCreation = () => {
    // Implement your logic to update tasks after a new task is created
    // For example, you could refetch tasks or update state
  };

  return (
    <>
      <div className="text-center h-[150px] w-full bg-white rounded-lg p-4 border border-gray-200 shadow-md mb-1">
        <h1>Create a Task</h1>

        <button
          onClick={() => setShowModal(true)}
          type="button"
          className="mt-4 text-gray-900 bg-[#fde68a] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 mr-2 mb-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
        >
          <IoCreateSharp />
          Add Task
        </button>
        <Transition
          show={showModal}
          enter="transition-opacity duration-700"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <CreateTaskModal
            onClose={handleOnClose}
            visible={showModal}
            onTaskCreated={updateTasksAfterCreation}
          />
        </Transition>
      </div>
      <div className="flex">
        <Cards onTaskCreated={updateTasksAfterCreation} />
      </div>
    </>
  );
};

export default TaskList;
