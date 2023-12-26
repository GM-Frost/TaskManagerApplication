import { useEffect, useState } from "react";
import {
  useLoginUserMutation,
  useRegisterUserMutation,
} from "../redux/services/authAPI";

import { setUser } from "../redux/slice/authSlice";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../redux/app/hooks";

const initialState = {
  fname: "",
  lname: "",
  email: "",
  userName: "",
  password: "",
};

const Welcome = () => {
  const [formValue, setFormValue] = useState(initialState);
  const { fname, lname, email, userName, password } = formValue;
  const [showRegister, setShowRegister] = useState(false);
  const [message, setMessage] = useState<string | JSX.Element | null>(null);

  //using dispatch
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const resetFormData = () => {
    setFormValue({
      fname: "",
      lname: "",
      userName: "",
      password: "",
      email: "",
    });
  };

  const [
    loginUser,
    { data: loginData, isSuccess: isLoginSuccess, isError: isLoginError },
  ] = useLoginUserMutation();

  const [
    registerUser,
    { isSuccess: isRegisterSuccess, isError: isRegisterError },
  ] = useRegisterUserMutation();

  const handleFormChange = (e: any) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    if (userName && password) {
      try {
        await loginUser({ userName, password });
      } catch (error) {
        setMessage(<span style={{ color: "red" }}>Something went wrong.</span>);
      }
    } else {
      setMessage(
        <span style={{ color: "red" }}>Please fill in all the input.</span>
      );
    }
  };

  const handleRegister = async () => {
    if (fname && lname && email && userName && password) {
      try {
        await registerUser({ fname, lname, email, userName, password });
      } catch (error) {
        setMessage(<span style={{ color: "red" }}>Something went wrong!</span>);
      }
    } else {
      setMessage(
        <span style={{ color: "red" }}>Please fill in all the input.</span>
      );
    }
  };

  useEffect(() => {
    if (isLoginSuccess) {
      setMessage(<span style={{ color: "green" }}>Login Success</span>);
      dispatch(
        setUser({
          fname: loginData.fname,
          userName: loginData.userName,
          token: loginData.token,
        })
      );
      navigate("/");
      resetFormData();
    }

    if (isRegisterSuccess) {
      setMessage(
        <span style={{ color: "green" }}>User Registered Successfully!</span>
      );
      resetFormData();
    }
  }, [isLoginSuccess, isRegisterSuccess]);

  useEffect(() => {
    if (isLoginError) {
      setMessage(<span style={{ color: "red" }}>Invalid Credentials</span>);
      resetFormData();
    }
    if (isRegisterError) {
      setMessage(<span style={{ color: "red" }}>User already exists</span>);
      resetFormData();
    }
  }, [isLoginError, isRegisterError]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage("");
    }, 3000);

    return () => clearTimeout(timer);
  }, [message]);

  return (
    <div className="register flex justify-center items-center h-screen">
      <div className="container mx-auto">
        {message && <p className="text-center">{message}</p>}
        <div
          className={`flex flex-col ${
            showRegister ? "lg:flex-row" : "lg:flex-row-reverse"
          } w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden`}
        >
          <div
            className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-norepeat bg-cover bg-center "
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(0, 0, 0, 0.75)),url(${
                showRegister
                  ? "https://images.pexels.com/photos/884788/pexels-photo-884788.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  : "https://images.pexels.com/photos/289586/pexels-photo-289586.jpeg?auto=compress&cs=tinysrgb&w=1600"
              })`,
            }}
          >
            <h1 className="text-white text-3xl mb-3">
              Welcome to <span className="text-[#fde68a]">Task Manager</span>
              <span className="text-orange-700"> App</span>
            </h1>
            <div>
              <p className="text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti, fugit ipsam nobis suscipit porro, temporibus veniam
                aspernatur quisquam consequatur quasi unde! Quas vero quibusdam
                debitis, distinctio excepturi culpa itaque rerum!
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 py-16 px-12">
            <h2 className="text-3xl mb-4 text-[#422444]">
              {!showRegister ? "Login" : "Register"}
            </h2>
            <p className="mb-4 text-gray-500">
              {!showRegister ? "Sign-in to your Account" : "Create an Account"}
            </p>

            {showRegister && (
              <>
                <div className="grid grid-cols-2 gap-5">
                  <input
                    type="text"
                    placeholder="First Name"
                    name="fname"
                    value={fname}
                    onChange={handleFormChange}
                    className="capitalize border border-gray-400 py-1 px-2 rounded-md transition ease-in delay-100 border-opacity-50 focus:border-opacity-100 border-1 focus:border-orange-800 focus:ring-1 focus:ring-orange-800"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    name="lname"
                    value={lname}
                    onChange={handleFormChange}
                    className="capitalize border border-gray-400 py-1 px-2 rounded-md transition ease-in delay-100 border-opacity-50 focus:border-opacity-100 focus:border-orange-800 focus:ring-1 focus:ring-orange-800"
                  />
                </div>
                <div className="mt-5">
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={handleFormChange}
                    className="border border-gray-400 py-1 px-2 rounded-md w-full transition ease-in delay-100 border-opacity-50 focus:border-opacity-100 border-1 focus:border-orange-800 focus:ring-1 focus:ring-orange-800"
                  />
                </div>
              </>
            )}

            <div className="mt-5">
              <input
                type="text"
                placeholder="Username"
                name="userName"
                value={userName}
                onChange={handleFormChange}
                className="border border-gray-400 py-1 px-2 rounded-md w-full transition ease-in delay-100 border-opacity-50 focus:border-opacity-100 border-1 focus:border-orange-800 focus:ring-1 focus:ring-orange-800"
              />
            </div>

            <div className="mt-5">
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={handleFormChange}
                className="border border-gray-400 py-1 px-2 rounded-md w-full transition ease-in delay-100 border-opacity-50 focus:border-opacity-100 border-1 focus:border-orange-800 focus:ring-1 focus:ring-orange-800"
              />
            </div>

            <div className="mt-5">
              {!showRegister ? (
                <button
                  onClick={() => handleLogin()}
                  type="submit"
                  className="w-full transition ease-in-out delay-100 bg-orange-800 hover:bg-black  hover:text-[#fde68a] py-3 text-center text-white"
                >
                  Login
                </button>
              ) : (
                <button
                  type="submit"
                  onClick={() => handleRegister()}
                  className="w-full transition ease-in-out delay-100 bg-black hover:bg-orange-800  py-3 text-center text-[#fde68a]"
                >
                  Register Now
                </button>
              )}
            </div>
            <div className="mt-5">
              {!showRegister ? (
                <>
                  <p>
                    Dont have an Account?&nbsp;
                    <span
                      onClick={() => setShowRegister(true)}
                      className="text-[#551e43] cursor-pointer"
                    >
                      Register Here
                    </span>
                  </p>
                  <div className="mt-5 bg-gray-100 text-center">
                    <p>
                      <span className="text-[#551e43]">Testing Account:</span>{" "}
                      demouser
                    </p>
                    <p>
                      <span className="text-[#551e43]">Password:</span> demouser
                    </p>
                  </div>
                </>
              ) : (
                <p>
                  Already Registered?&nbsp;
                  <span
                    onClick={() => setShowRegister(false)}
                    className="text-[#551e43] cursor-pointer"
                  >
                    Login Here
                  </span>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
