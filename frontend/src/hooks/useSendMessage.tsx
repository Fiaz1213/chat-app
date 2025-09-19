import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

import useConversation from "../zustand/useConversation";

const useSendMessage = () => {
  const [loading, setLoading] = useState(false);

  const { messages, setMessages, selectedConversation } = useConversation();

  const sendMessage = async (message: string) => {
    setLoading(true);

    try {
      //selectedConversation is actually the user data coming from DB...
      const res = await fetch(
        `/api/messages/send/${selectedConversation?._id}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message }),
        }
      );

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }

      //Update state in Zustand Store
      setMessages([...messages, data]);

      //   console.log("DATA : ", data);
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, sendMessage };
};

export default useSendMessage;
