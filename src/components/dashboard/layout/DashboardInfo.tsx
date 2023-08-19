import React from "react";

const DashboardInfo = () => {
  return (
    <>
      <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-md flex flex-col flex-1">
        <div className="flex flex-col items-center justify-center text-xl font-bold">
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
            <div className="text-xl font-bold mb-2 md:order-last float-right">
              Your Task Today
            </div>
            <div className="flex flex-col"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardInfo;
