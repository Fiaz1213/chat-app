import { create } from "zustand";

import type { User } from "../types/user";

type ConversationStore = {
  selectedConversation: User | null;
  setSelectedConversation: (conversation: User | null) => void;

  messages: any[]; // replace `any` with real message type later
  setMessages: (messages: any[]) => void;
};

const useConversation = create<ConversationStore>((set) => ({
  selectedConversation: null,
  setSelectedConversation: (conversation) =>
    set({ selectedConversation: conversation }),

  messages: [],
  setMessages: (messages) => set({ messages }),
}));

export default useConversation;
