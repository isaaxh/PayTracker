import { initializeApp } from "firebase/app";
import { getReactNativePersistence, initializeAuth } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";
import { FIREBASE_API_KEY } from "@env";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: "paytracker-3887d.firebaseapp.com",
  projectId: "paytracker-3887d",
  storageBucket: "paytracker-3887d.appspot.com",
  messagingSenderId: "420921975697",
  appId: "1:420921975697:web:b4e58576e4fc9cef613030",
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export const FIREBASE_DB = getFirestore(FIREBASE_APP);
