import React, { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

//Values returning from backend
type AuthUser = {
  _id: string;
  fullName: string;
  username: string;
  profilePic: string;
};

type AuthContextType = {
  authUser: AuthUser | null;
  setAuthUser: React.Dispatch<React.SetStateAction<AuthUser | null>>;
};

type AuthContextProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const storedUser = localStorage.getItem("user");
  const initialUser: AuthUser | null = storedUser ? JSON.parse(storedUser) : null;

  const [authUser, setAuthUser] = useState<AuthUser | null>(initialUser);

  return <AuthContext.Provider value={{ authUser, setAuthUser }}>{children}</AuthContext.Provider>;
};

// Custom Hook
export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used within an AuthContextProvider");
  }
  return context;
};
