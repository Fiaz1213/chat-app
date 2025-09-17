import React, { useState } from "react";
import toast from "react-hot-toast";

import { useAuthContext } from "../context/AuthContext";
import { AUTH_CONTEXT_KEY } from "../util/constants";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const login = async (username: string, password: string) => {
    const success = handleInputValidation(username, password);
    if (!success) return;

    setLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }

      //Set user to local Storage, Update Context and Navigate to Home Page
      localStorage.setItem(AUTH_CONTEXT_KEY, JSON.stringify(data));
      setAuthUser(data);

      console.log(data);
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, login };
};

const handleInputValidation = (username: string, password: string) => {
  if (!username || !password) {
    toast.error("Please fill in all the fields");
    return false;
  }

  return true;
};

export default useLogin;
