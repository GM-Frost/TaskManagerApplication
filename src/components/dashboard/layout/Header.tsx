import { Popover, Transition } from "@headlessui/react";
import { FaSearch } from "react-icons/fa";
import { IoNotificationsOutline } from "react-icons/io5";
import { useAppSelector } from "../../../redux/app/hooks";
import { selectAuth } from "../../../redux/slice/authSlice";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const { fname } = useAppSelector(selectAuth);
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-center bg-white h-auto md:h-16 px-4 rounded-xl mx-3 shadow-md relative">
        <div className="relative w-full md:w-auto mb-2 md:mb-0 md:ml-2">
          <FaSearch
            fontSize={14}
            className="text-gray-400 absolute top-1/2 -translate-y-1/2 left-3 md:left-4 lg:left-5"
          />
          <input
            type="text"
            placeholder="Search ..."
            className="text-sm focus:outline-none focus:border-gray-300 active:outline-none h-10 w-full md:w-[24rem] border border-gray-300 rounded-lg md:pl-11 pr-4"
          />
        </div>
        <div className="flex items-center gap-2 mr-2">
          <Popover className="relative">
            {({ open }) => (
              <>
                <Popover.Button
                  className={`ml-1 p-1.5 rounded-md inline-flex items-center text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-800 ${
                    open ? "bg-orange-800 text-white font-bold" : ""
                  }`}
                >
                  <IoNotificationsOutline className="cursor-pointer" />
                </Popover.Button>
                <Transition
                  enter="transition duration-300 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-300 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-300 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Popover.Panel className="absolute right-0 z-50 mt-2.5 w-80">
                    <div className="bg-white rounded-md shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5">
                      <strong className="text-gray-700 font-medium align-center items-center justify-center">
                        Notification
                      </strong>
                      <div className="mt-2 py-1 text-sm">
                        This is the Notification Area
                      </div>
                    </div>

                    <img src="/solutions.jpg" alt="" />
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
          <small>Welcome, {fname}</small>
          <img
            className="h-10 w-10 rounded-full object-cover bg-orange-200 bg-cover bg-no-repeat bg-center"
            src="https://images.pexels.com/photos/146244/pexels-photo-146244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Header;
