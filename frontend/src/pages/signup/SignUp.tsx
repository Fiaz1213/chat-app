import React from "react";
import Checkbox from "./Checkbox";

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-white/30 bg-clip-padding">
        <h1 className="text-3xl font-semibold text-center text-white">
          Signup
        </h1>

        <form>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Mike Howser"
              className="w-full input input-accent h-10"
            ></input>
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text">User Name</span>
            </label>
            <input
              type="text"
              placeholder="Mike"
              className="w-full input input-accent h-10"
            ></input>
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Password"
              className="w-full input input-accent h-10"
            ></input>
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full input input-accent h-10"
            ></input>
          </div>

          <div className="p-2 mt-2">
            <Checkbox />
          </div>

          <a
            href="#"
            className="text-sm hover:underline hover:text-green-600 mt-6 inline-block"
          >
            Already have an account ?
          </a>

          <div>
            <button className="btn btn-accent mt-12">Signup</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
