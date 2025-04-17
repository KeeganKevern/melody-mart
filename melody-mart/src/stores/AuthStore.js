import { defineStore } from "pinia";
import { ref } from "vue";
import { auth } from "../firebase";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const useAuthStore = defineStore("auth", () => {
  const user = ref(null);

  const login = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  const logout = async () => {
    await signOut(auth);
  };

  onAuthStateChanged(auth, (firebaseUser) => {
    user.value = firebaseUser;
  });

  //This authorises a toast to be implimented on redirection (used if user is not logged in)

  return {
    user,
    login,
    logout,
  };
});
