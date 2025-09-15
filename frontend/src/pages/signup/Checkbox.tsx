import React from "react";

const Checkbox = () => {
  return (
    <div className="flex">
      <div className="flex-1">
        <label className={`label gap-2 cursor-pointer`}>
          <span className="label-text">Male</span>
          <input
            type="checkbox"
            className="checkbox checkbox-accent border-b-green-600"
          ></input>
        </label>
      </div>
      <div className="flex-2">
        <label className={`label gap-2 cursor-pointer`}>
          <span className="label-text">Female</span>
          <input
            type="checkbox"
            className="checkbox checkbox-accent border-b-green-600"
          ></input>
        </label>
      </div>
    </div>
  );
};

export default Checkbox;
