import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-white/30 bg-clip-padding">
        <h1 className="text-3xl font-semibold text-center text-white">Login</h1>

        <form>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              className="w-full input input-accent h-10"
            ></input>
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-accent h-10"
            ></input>
          </div>

          <a
            href="#"
            className="text-sm hover:underline hover:text-green-600 mt-6 inline-block"
          >
            {"Don't"} have an account ?
          </a>

          <div>
            <button className="btn btn-accent mt-12">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
