import { defineStore } from "pinia";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "@/includes/firebase.js";

export const useStoreAuth = defineStore("storeAuth", {
  state: () => {
    return {
      user: {},
    };
  },
  actions: {
    registerUser(credentials) {
      createUserWithEmailAndPassword(
        auth,
        credentials.email,
        credentials.password
      ).then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      });
    },
    logoutUser() {
      signOut(auth).then(() => {
        console.log("You are logout");
      });
    },
    loginUser(credentials) {
      signInWithEmailAndPassword(
        auth,
        credentials.email,
        credentials.password
      ).then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      });
    },
  },
  getters: {},
});
