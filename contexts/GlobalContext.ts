import { GlobalContextProps } from "@/services/providers/GlobalProvider";
import { createContext } from "react";

export default createContext<GlobalContextProps | null>(null);
