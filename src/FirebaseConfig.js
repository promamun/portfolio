import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD7jluRhAMdXnO2Ug_esABb-yjbgw_bIZU",
  authDomain: "portfolio-c3343.firebaseapp.com",
  projectId: "portfolio-c3343",
  storageBucket: "portfolio-c3343.appspot.com",
  messagingSenderId: "864281737029",
  appId: "1:864281737029:web:6505ff175be258928cb02c",
  measurementId: "G-PJE759QLW3",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
