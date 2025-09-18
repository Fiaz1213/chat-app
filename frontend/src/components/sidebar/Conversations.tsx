import React from "react";

import Conversation from "./Conversation";
import useGetConversations from "../../hooks/useGetConversations";
import { getRandomEmoji } from "../../util/emojis";

const Conversations = () => {
  const { loading, conversations } = useGetConversations();
  // console.log("USERS : ", conversations);

  return (
    <div className="py-2 flex flex-col overflow-auto">
      {loading ? (
        <span className="loading loading-spinner mx-auto"></span>
      ) : conversations.length > 0 ? (
        conversations.map((conversation, idx) => (
          <Conversation
            key={conversation._id}
            conversation={conversation}
            emoji={getRandomEmoji()}
            lastIdx={idx === conversations.length - 1}
          />
        ))
      ) : (
        <></>
      )}
    </div>
  );
};

export default Conversations;
