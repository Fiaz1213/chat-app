import React from "react";

import type { User } from "../../types/user";
import useConversation from "../../zustand/useConversation";
import { useSocketContext } from "../../context/SocketContext";

type ConversationProps = {
  conversation: User;
  emoji: string;
  lastIdx: boolean;
};

const Conversation: React.FC<ConversationProps> = ({
  conversation,
  emoji,
  lastIdx,
}) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === conversation._id;

  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id); //conversation._id is the userId

  return (
    <>
      <div
        className={`flex gap-2 items-center hover:bg-green-700 rounded p-2 py-1 cursor-pointer ${
          isSelected ? "bg-green-700" : ""
        }`}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className={`avatar ${isOnline ? "avatar-online" : ""}`}>
          <div className="w-12 rounded-full">
            <img src={conversation.profilePic} alt="user"></img>
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-200">{conversation.fullName}</p>
            <span className="text-xl">{emoji}</span>
          </div>
        </div>
      </div>

      {!lastIdx && <div className="divider my-0 py-0 h-1" />}
    </>
  );
};

export default Conversation;
