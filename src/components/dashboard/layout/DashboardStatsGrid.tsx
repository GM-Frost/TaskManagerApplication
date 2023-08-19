import { FcMindMap, FcOk, FcElectricalSensor } from "react-icons/fc";

const DashboardStatsGrid = () => {
  return (
    <>
      <div className="flex gap-4 w-full ">
        <BoxWrapper>
          <div className="rounded-full h-12 w-12 flex items-center justify-center">
            <FcMindMap className="text-3xl" />
          </div>
          <div className="pl-4">
            <span className="text-sm text-gray-500 font-light">Total Task</span>
            <div>
              <strong className="text-xl text-gray-700 font-semibold">
                1324
              </strong>
            </div>
          </div>
        </BoxWrapper>
        <BoxWrapper>
          <div className="rounded-full h-12 w-12 flex items-center justify-center">
            <FcOk className="text-3xl" />
          </div>
          <div className="pl-4">
            <span className="text-sm text-gray-500 font-light">
              Completed Task
            </span>
            <div>
              <strong className="text-xl text-gray-700 font-semibold">
                1324
              </strong>
            </div>
          </div>
        </BoxWrapper>
        <BoxWrapper>
          <div className="rounded-full h-12 w-12 flex items-center justify-center">
            <FcElectricalSensor className="text-3xl" />
          </div>
          <div className="pl-4">
            <span className="text-sm text-gray-500 font-light">
              Pending Task
            </span>
            <div>
              <strong className="text-xl text-gray-700 font-semibold">
                1324
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
    <div className="bg-white rounded-lg p-4 flex-1 border border-gray-200 flex items-center shadow-md">
      {children}
    </div>
  );
}
