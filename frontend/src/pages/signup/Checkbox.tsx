import React from "react";

type ChecboxProps = {
  onCheckboxChange: (gender: string) => void;
  selectedGender: string;
};

const Checkbox: React.FC<ChecboxProps> = ({
  onCheckboxChange,
  selectedGender,
}) => {
  return (
    <div className="flex">
      <div className="flex-1">
        <label
          className={`label gap-2 cursor-pointer ${
            selectedGender === "male" ? "selected" : ""
          }`}
        >
          <span className="label-text">Male</span>
          <input
            type="checkbox"
            className="checkbox checkbox-accent border-b-green-600"
            checked={selectedGender === "male"}
            onChange={() => {
              onCheckboxChange("male");
            }}
          ></input>
        </label>
      </div>
      <div className="flex-2">
        <label
          className={`label gap-2 cursor-pointer ${
            selectedGender === "female" ? "selected" : ""
          }`}
        >
          <span className="label-text">Female</span>
          <input
            type="checkbox"
            className="checkbox checkbox-accent border-b-green-600"
            checked={selectedGender === "female"}
            onChange={() => {
              onCheckboxChange("female");
            }}
          ></input>
        </label>
      </div>
    </div>
  );
};

export default Checkbox;
