import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCDf82nEaqKUhoM4dJb9K0krBNToVCm6Yc",
  authDomain: "congnghe-cdc5f.firebaseapp.com",
  projectId: "congnghe-cdc5f",
  storageBucket: "congnghe-cdc5f.firebasestorage.app",
  databaseURL:
    "https://congnghe-cdc5f-default-rtdb.asia-southeast1.firebasedatabase.app",
  messagingSenderId: "5431802074",
  appId: "1:5431802074:web:2e477dca816e63ca9b0de3",
  measurementId: "G-XZDY98SF76"
};


const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);