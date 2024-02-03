import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyDTwoEA-znzApaQmbi4e-092J0rYva0TAE",
    authDomain: "baliqchi-admin.firebaseapp.com",
    projectId: "baliqchi-admin",
    storageBucket: "baliqchi-admin.appspot.com",
    messagingSenderId: "989452167579",
    appId: "1:989452167579:web:0ed3db823cc37ac9bf193e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export const db = getFirestore(app);
