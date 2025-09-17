import React, { useState } from "react";
import toast from "react-hot-toast";

import { useAuthContext } from "../context/AuthContext";
import { AUTH_CONTEXT_KEY } from "../util/constants";

type SignupProps = {
  fullName: string;
  username: string;
  password: string;
  confirmPassword: string;
  gender: string;
};

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const signup = async ({ fullName, username, password, confirmPassword, gender }: SignupProps) => {
    const success = handleInputValidation({ fullName, username, password, confirmPassword, gender });
    if (!success) return;

    setLoading(true);
    try {
      //Address configured under vite.config.ts => http://localhost:5000
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, username, password, confirmPassword, gender }),
      });

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }

      //Set user to local Storage, Update Context and Navigate to Home Page
      localStorage.setItem(AUTH_CONTEXT_KEY, JSON.stringify(data));
      setAuthUser(data);

      // console.log(data);
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, signup };
};

const handleInputValidation = ({ fullName, username, password, confirmPassword, gender }: SignupProps) => {
  if (!fullName || !username || !password || !confirmPassword || !gender) {
    toast.error("Please fill in all the fields");
    return false;
  }

  if (password != confirmPassword) {
    toast.error("Passwords didn't match");
    return false;
  }

  if (password.length < 6) {
    toast.error("Passwords must be atleast 6 characters");
    return false;
  }

  return true;
};

export default useSignup;
