import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <div className="register flex justify-center items-center h-screen">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
            <div
              className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-norepeat bg-cover bg-center "
              style={{
                backgroundImage: ` linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(0, 0, 0, 0.75)),url(https://images.pexels.com/photos/884788/pexels-photo-884788.jpeg?auto=compress&cs=tinysrgb&w=1600)`,
              }}
            >
              <h1 className="text-white text-3xl mb-3">
                Welcome to <span className="text-[#fde68a]">Task Manager</span>
                <span className="text-orange-700">App</span>
              </h1>
              <div>
                <p className="text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deleniti, fugit ipsam nobis suscipit porro, temporibus veniam
                  aspernatur quisquam consequatur quasi unde! Quas vero
                  quibusdam debitis, distinctio excepturi culpa itaque rerum!
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 py-16 px-12">
              <h2 className="text-3xl mb-4 text-[#422444]">Register</h2>
              <p className="mb-4 text-gray-500">Create your account.</p>
              <form action="#">
                <div className="grid grid-cols-2 gap-5">
                  <input
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    className="border border-gray-400 py-1 px-2 rounded-md transition ease-in delay-100 border-opacity-50 focus:border-opacity-100 border-1 focus:border-orange-800 focus:ring-1 focus:ring-orange-800"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    value=""
                    className="border border-gray-400 py-1 px-2 rounded-md transition ease-in delay-100 border-opacity-50 focus:border-opacity-100 focus:border-orange-800 focus:ring-1 focus:ring-orange-800"
                  />
                </div>
                <div className="mt-5">
                  <input
                    type="text"
                    placeholder="Username"
                    name="userName"
                    value=""
                    className="border border-gray-400 py-1 px-2 rounded-md w-full transition ease-in delay-100 border-opacity-50 focus:border-opacity-100 border-1 focus:border-orange-800 focus:ring-1 focus:ring-orange-800"
                  />
                </div>
                <div className="mt-5">
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value=""
                    className="border border-gray-400 py-1 px-2 rounded-md w-full transition ease-in delay-100 border-opacity-50 focus:border-opacity-100 border-1 focus:border-orange-800 focus:ring-1 focus:ring-orange-800"
                  />
                </div>
                <div className="mt-5">
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value=""
                    className="border border-gray-400 py-1 px-2 rounded-md w-full transition ease-in delay-100 border-opacity-50 focus:border-opacity-100 border-1 focus:border-orange-800 focus:ring-1 focus:ring-orange-800"
                  />
                </div>

                <div className="mt-5">
                  <button
                    type="submit"
                    className="w-full transition ease-in-out delay-100 bg-black hover:bg-orange-800  py-3 text-center text-[#fde68a]"
                  >
                    Register Now
                  </button>
                </div>
                <div className="mt-5">
                  <p>
                    Already Registered?&nbsp;
                    <Link to="/login" className="text-[#551e43]">
                      Login Here
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
