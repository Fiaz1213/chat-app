import React, { useEffect } from "react";

import { TiMessages } from "react-icons/ti";

import Messages from "./Messages";
import MessageInput from "./MessageInput";

import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../zustand/useConversation";

const MessageContainer = () => {
  const { authUser } = useAuthContext();

  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    //cleanup on unmount of component
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <div className="md:min-w-[450px] flex flex-col">
      {!selectedConversation ? (
        <NoChatSelected username={authUser?.fullName} />
      ) : (
        <>
          <div className="bg-slate-500 px-4 py-2 mb-2">
            <span className="label">To:</span>
            <span className="text-white font-bold">
              {" "}
              {selectedConversation.fullName}
            </span>
          </div>

          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};

type NoChatSelectedProps = {
  username?: string;
};

const NoChatSelected: React.FC<NoChatSelectedProps> = ({ username }) => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-white font-semibold flex flex-col items-center gap-2">
        <p>Welcome {username ?? "Guest"}</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};

export default MessageContainer;
