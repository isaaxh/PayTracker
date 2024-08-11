import GlobalContext from "@/contexts/GlobalContext";
import { FIREBASE_DB } from "@/firebaseConfig";
import { TSignupSchema, Ttransaction } from "@/utils/types";
import { addDoc, collection, doc, getDoc, getDocs } from "firebase/firestore";
import { ReactNode, useState } from "react";

interface GlobalProviderProps {
  children: ReactNode;
}

export type GlobalContextProps = {
  userData: TUserData | null;
  setUserData: React.Dispatch<React.SetStateAction<TUserData | null>>;
  addUserDocument: (props: addUserDocumentType) => void;
  retrieveAllDocuments: () => void;
  retrieveDocument: () => void;
};

export type TUserData = {
  uid: string;
  displayName: string;
  email: string;
  date: string;
  totalAmount: number;
  totalMonthly: number;
  transactions: Ttransaction[] | [];
};

type addUserDocumentType = {
  data: TSignupSchema;
  uid: string;
  date: string;
};
const AuthProvider = ({ children }: GlobalProviderProps) => {
  const [userData, setUserData] = useState<TUserData | null>(null);

  const addUserDocument = async (props: addUserDocumentType) => {
    const { uid, data, date } = props;
    console.log("addDoc");
    try {
      const docRef = await addDoc(collection(FIREBASE_DB, "users"), {
        uid: uid,
        displayName: data.name,
        email: data.email,
        date: date,
        grandAmount: 0,
        totalMonthly: 0,
        transactions: [],
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const retrieveAllDocuments = async () => {
    try {
      console.log("retAllDoc");
      const querySnapshot = await getDocs(collection(FIREBASE_DB, "users"));
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
      });
    } catch (e) {
      console.log("retAllDoc error");
      console.log(e);
    }
  };

  const retrieveDocument = async () => {
    try {
      console.log("retDoc");
      const docRef = doc(FIREBASE_DB, "users", "qvRlo9l1uXcaOa9UAfO8AozK5OR2");
      const docSnap = await getDoc(docRef);
      console.log(docSnap.data());
    } catch (e) {
      console.log("retDoc error");
      console.log(e);
    }
  };

  const value: GlobalContextProps = {
    userData,
    setUserData,
    addUserDocument,
    retrieveAllDocuments,
    retrieveDocument,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export default AuthProvider;
