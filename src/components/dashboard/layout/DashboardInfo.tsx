import { FcHighPriority } from "react-icons/fc";

const DashboardInfo = () => {
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
            <div className="mt-5 bg-yellow-100 rounded-lg p-4 relative border border-none flex flex-col flex-1">
              Good Day! User
            </div>
            <div className="flex gap-2">
              <div className="mt-1 bg-green-100 rounded-lg p-4 relative border border-none flex flex-col flex-1">
                <div className="flex flex-col">
                  <h1 className="text-xl font-bold">20</h1>
                  <small>Task Completed</small>
                </div>
              </div>
              <div className="mt-1 bg-red-100 rounded-lg p-4 relative border border-none flex flex-col flex-1">
                <div className="flex flex-col">
                  <h1 className="text-xl font-bold">20</h1>
                  <small>Task Pending</small>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="mt-1 bg-purple-100 rounded-lg p-4 relative border border-none flex flex-col flex-1">
                <h1 className="text-sm font-bold">Your Daily Plan</h1>
                <small>5 of 8 Completed</small>
              </div>
            </div>
          </div>
          <div className="taskdiv flex flex-col md:w-1/2 md:h-full">
            <div className=" mb-2 md:order-last float-right">
              <span className="font-bold text-xl ">Your Task Today</span>
              <div className="flex justify-center flex-col">
                <div className="mt-5 rounded-lg p-4  border border-gray-100 flex-row">
                  <div className="flex justify-between text-sm text-gray-500">
                    <p>Number 10</p>
                    <p>10 hrs</p>
                  </div>
                  <div className="text-lg font-bold ">
                    <p>Blog & Social Posts</p>
                  </div>
                  <div className="mt-5 text-sm">
                    <p className="flex gap-2">
                      <FcHighPriority /> Deadline is today
                    </p>
                  </div>
                </div>
                <div className="mt-5 rounded-lg p-4  border border-gray-100 flex-row">
                  <div className="flex justify-between text-sm text-gray-500">
                    <p>Number 10</p>
                    <p>10 hrs</p>
                  </div>
                  <div className="text-lg font-bold ">
                    <p>Blog & Social Posts</p>
                  </div>
                  <div className="mt-5 text-sm">
                    <p className="flex gap-2">
                      <FcHighPriority /> Deadline is today
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardInfo;
