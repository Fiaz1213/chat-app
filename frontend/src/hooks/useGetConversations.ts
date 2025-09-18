import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

import type { User } from "../types/user";

const useGetConversations = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState<User[]>([]);

  useEffect(() => {
    const getConversations = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/users");

        const data = await res.json();
        if (data.error) {
          throw new Error(data.error);
        }

        setConversations(data.filteredUsers);

        // console.log("DATA : ", data);
      } catch (error: any) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    getConversations();
  }, []);

  return { loading, conversations };
};

export default useGetConversations;
