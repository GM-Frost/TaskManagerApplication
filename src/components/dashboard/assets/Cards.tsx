import { MdEditDocument, MdOutlineDelete } from "react-icons/md";
import { GiFireDash } from "react-icons/gi";
const Cards = () => {
  return (
    <>
      <div className="flex justify-center p-12">
        <div className="overflow-y-auto max-h-[calc(100vh-200px)]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {Array.from({ length: 10 }).map((_, index) => (
              <div
                key={index}
                className="p-6 bg-white border border-gray-200 rounded-lg shadow"
              >
                <div className="flex justify-end text-sm text-gray-400">
                  <p>2h ago </p>
                </div>
                <GiFireDash className="text-orange-600" />
                <a href="#">
                  <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    Need a help in Claim?
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                  Go to this step by step guideline process on how to certify
                  for your weekly benefits:
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
                    <p>Due : </p>
                  </div>
                  <div className="flex align-center items-center gap-3 mt-3">
                    <MdEditDocument className="text-blue-400 cursor-pointer hover:text-blue-600 hover:-translate-y-1 transition ease-in-out delay-150" />
                    <MdOutlineDelete className="text-red-400 cursor-pointer hover:text-red-600 hover:-translate-y-1 transition ease-in-out delay-150" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
