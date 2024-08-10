import { useNavigation } from "expo-router";
import {
  User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { ReactNode, useState } from "react";
import { FIREBASE_AUTH } from "../../firebaseConfig";
import AuthContext from "@/contexts/AuthContext";
import { Keyboard } from "react-native";

interface AuthProviderProps {
  children: ReactNode;
}

export type AuthContextProps = {
  authState: TAuthState;
  setAuthState: React.Dispatch<React.SetStateAction<TAuthState>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  signup: (data: AuthData) => void;
  login: (data: AuthData) => void;
  logout: () => void;
};

type AuthData = {
  email: string;
  password: string;
};

type TAuthState = {
  isAuthenticated: boolean | null;
  user: TUser | null;
};
type TUser = User | null;

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [authState, setAuthState] = useState<TAuthState>({
    isAuthenticated: null,
    user: null,
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigation();

  const auth = FIREBASE_AUTH;

  const login = async (data: AuthData) => {
    Keyboard.dismiss();
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
    } catch (e: any) {
      console.log(e);
      alert("login failed:" + e.message);
    } finally {
      setLoading(false);
    }
  };

  const signup = async (data: AuthData) => {
    Keyboard.dismiss();
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, data.email, data.password);
      navigate.goBack();
    } catch (e: any) {
      console.log(e);
      alert("Registration failed:" + e.message);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setAuthState({ isAuthenticated: null, user: null });
    FIREBASE_AUTH.signOut();
  };

  const value: AuthContextProps = {
    authState,
    setAuthState,
    loading,
    setLoading,
    signup,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
