import React, { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";

import Checkbox from "./Checkbox";
import useSignup from "../../hooks/useSignup";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { loading, signup } = useSignup();

  const handleCheckBox = (gender: string) => {
    setInputs({ ...inputs, gender });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log(inputs);

    await signup(inputs);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-white/30 bg-clip-padding">
        <h1 className="text-3xl font-semibold text-center text-white">Signup</h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Mike Howser"
              className="w-full input input-accent h-10"
              value={inputs.fullName}
              onChange={(e) => {
                setInputs({ ...inputs, fullName: e.target.value });
              }}
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
              value={inputs.username}
              onChange={(e) => {
                setInputs({ ...inputs, username: e.target.value });
              }}
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
              value={inputs.password}
              onChange={(e) => {
                setInputs({ ...inputs, password: e.target.value });
              }}
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
              value={inputs.confirmPassword}
              onChange={(e) => {
                setInputs({ ...inputs, confirmPassword: e.target.value });
              }}
            ></input>
          </div>

          <div className="p-2 mt-2">
            <Checkbox onCheckboxChange={handleCheckBox} selectedGender={inputs.gender} />
          </div>

          <Link to="/login" className="text-sm hover:underline hover:text-green-300 mt-6 inline-block">
            Already have an account ?
          </Link>

          <div>
            <button className="btn btn-accent mt-12">Signup</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
