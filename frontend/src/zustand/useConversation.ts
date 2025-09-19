import { create } from "zustand";

import type { User } from "../types/user";
import type { MessageT } from "../types/message";

type ConversationStore = {
  selectedConversation: User | null;
  setSelectedConversation: (conversation: User | null) => void;

  messages: MessageT[];
  setMessages: (messages: MessageT[]) => void;
};

const useConversation = create<ConversationStore>((set) => ({
  selectedConversation: null,
  setSelectedConversation: (conversation) =>
    set({ selectedConversation: conversation }),

  messages: [],
  setMessages: (messages) => set({ messages }),
}));

export default useConversation;
