import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Logout = () => {
  const [sign, setSign] = useState("Sign In");
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center h-[90vh] bg-gray-500 bg-bg-image ">
      <div className=" max-h-[450px] w-[350px] bg-transparent outline-white border-2 rounded-sm text-white">
        <div className=" p-7">
          <h1 className=" text-center text-2xl font-mono font-semibold">
            {sign}
          </h1>

          <div className=" flex items-center flex-col gap-3">
            {sign === "Sign In" ? (
              <div>
                <h2 className=" text-white text-2xl "> Name :</h2>
                <input
                  type="text"
                  placeholder="Enter your name: "
                  className=" bg-transparent outline-white border-2 text-white text-2xl w-[100%] p-1 rounded"
                />
              </div>
            ) : (
              <></>
            )}

            <div>
              <h2 className=" text-white text-2xl "> Email :</h2>
              <input
                type="text"
                placeholder="Email "
                className=" bg-transparent outline-white border-2 text-white text-2xl w-[100%] p-1 rounded"
              />
            </div>
            <div>
              <h2 className=" text-white text-2xl "> Pasword :</h2>
              <input
                type="password"
                placeholder="Password "
                className=" bg-transparent outline-white border-2 text-white text-2xl w-[100%] p-1 rounded"
                required
              />
            </div>
          </div>
          <button
            type="button"
            className=" bg-red-700 w-[100%]  px-1 py-2 rounded-sm font-bold text-xl mt-4"
            onClick={() => {
              navigate("/");
            }}
          >
            {sign}
          </button>

          {sign === "Sign In" ? (
            <p>
              Already have an Account ?
              <span
                className=" text-2xl cursor-pointer"
                onClick={() => {
                  setSign("Sign Up");
                }}
              >
                Sign Up
              </span>
            </p>
          ) : (
            <p>
              Create an Account ?
              <span
                className=" text-2xl cursor-pointer"
                onClick={() => {
                  setSign("Sign In");
                }}
              >
                Sign In
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Logout;
