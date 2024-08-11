import { useContext } from "react";
import GlobalContext from "@/contexts/GlobalContext";
import {
  GlobalContextProps,
  TUserData,
} from "@/services/providers/GlobalProvider";

export interface UseFirestoreProps {
  userData: TUserData;
  addDocument: () => void;
  retrieveDocument: () => void;
  retrieveAllDocuments: () => void;
}

export const useFirestore = () => {
  const { userData } = useContext(GlobalContext) as GlobalContextProps;

  return [userData];
};
