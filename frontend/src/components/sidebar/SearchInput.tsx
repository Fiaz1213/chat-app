import React, { useState, type FormEvent } from "react";
import { IoSearchSharp } from "react-icons/io5";
import toast from "react-hot-toast";

import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversations";

const SearchInput = () => {
  const [search, setSearch] = useState("");

  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversations();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!search) return;
    if (search.length < 3) {
      return toast.error("Search must be atleat 3 characters long");
    }

    const conversation = conversations.find((c) =>
      c.fullName.toLocaleLowerCase().includes(search.toLowerCase())
    );
    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else {
      toast.error("No user found!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search.."
        className="input input-accent border-2 border-accent rounded-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
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
