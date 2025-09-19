import React, { useEffect, useRef } from "react";

import Message from "./Message";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "./MessageSkeleton";

const Messages = () => {
  const { loading, messages } = useGetMessages();

  const lastMessageRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="px-4 flex-1 overflow-auto">
      {loading && <MessageSkeleton />}

      {!loading && messages.length === 0 && (
        <p className="text-center">Send a message to start the conversation</p>
      )}

      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <div key={message._id} ref={lastMessageRef}>
            <Message message={message} />
          </div>
        ))}
    </div>
  );
};

export default Messages;
