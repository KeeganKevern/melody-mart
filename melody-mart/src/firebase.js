import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASEKEY,
  authDomain: "melody-mart-6f88c.firebaseapp.com",
  projectId: "melody-mart-6f88c",
  storageBucket: "melody-mart-6f88c.firebasestorage.app",
  messagingSenderId: "476206574469",
  appId: "1:476206574469:web:aebc3fdafdfc7fc3aa32ec",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
