import AuthContext from "../contexts/AuthContext";
import { onAuthStateChanged } from "firebase/auth";
import { useContext, useEffect } from "react";
import { FIREBASE_AUTH } from "../firebaseConfig";
import { AuthContextProps } from "@/services/providers/AuthProvider";

export const useAuth = () => {
  const { setAuthState } = useContext(AuthContext) as AuthContextProps;

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      if (user) {
        setAuthState({ user, isAuthenticated: true });
      }
    });
  }, []);

  return useContext(AuthContext);
};
