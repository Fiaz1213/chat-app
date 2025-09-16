import React from "react";
import { IoSearchSharp } from "react-icons/io5";

const SearchInput = () => {
  return (
    <form className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search.."
        className="input input-accent border-2 border-accent rounded-full"
      ></input>
      <button
        type="submit"
        className="btn btn-circle text-white bg-green-600 border-white/30"
      >
        <IoSearchSharp className="w-6 h-6 outline-none" />
      </button>
    </form>
  );
};

export default SearchInput;
