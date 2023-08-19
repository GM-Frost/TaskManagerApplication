const CreateTaskModal = ({ visible, onClose }) => {
  const handleOnClose = (e) => {
    if (e.target.id === "modalContainer") onClose();
  };
  if (!visible) return null;
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
            <p className="text-red-500 text-xs italic">
              Please choose a password.
            </p>
            <form className="px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="title"
                >
                  Task Title
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Title.."
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
                  className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline"
                  id="textDescription"
                  placeholder="descriptions"
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
                  className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="textDescription"
                  placeholder="descriptions"
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
