import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

import { io, Socket } from "socket.io-client";

import { useAuthContext } from "./AuthContext";
import { BACKEND_URL } from "../util/constants";

type SocketContextType = {
  socket: Socket | null;
  onlineUsers: string[]; //update later if needed
};

type SocketContextProviderProps = {
  children: ReactNode;
};

export const SocketContext = createContext<SocketContextType | undefined>(
  undefined
);

export const SocketContextProvider = ({
  children,
}: SocketContextProviderProps) => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [onlineUsers, setOnlineUsers] = useState<string[]>([]);
  const { authUser } = useAuthContext();

  useEffect(() => {
    if (authUser) {
      const socket = io(BACKEND_URL, {
        query: {
          userId: authUser._id, //Passing userId to backend
        },
      });

      setSocket(socket);

      // socket.on() is used to listen to events
      // Can be used on both client & server side
      // Getting online users event from backend
      socket.on("getOnlineUsers", (users) => {
        setOnlineUsers(users);
      });

      //Cleanup on component unmount
      return () => {
        socket.close();
        setSocket(null);
      };
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
  }, [authUser]);

  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
};

//Custom Hook
export const useSocketContext = () => {
  const context = useContext(SocketContext);
  if (!context) {
    throw new Error(
      "useSocketContext must be used within SocketContextProvider"
    );
  }
  return context;
};
