import { defineStore } from "pinia";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "@/includes/firebase.js";
import { useStoreUsersData } from "@/stores/storeUserData.js";

export const useStoreAuth = defineStore("storeAuth", {
  state: () => {
    return {
      user: {},
    };
  },
  actions: {
    initUser() {
      const storeUserDate = useStoreUsersData();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.user.id = user.uid;
          this.user.email = user.email;
          this.router.push("/manage");
          storeUserDate.initUser();
        } else {
          this.user = {};
          this.router.replace("/");
          storeUserDate.clearNotes();
        }
      });
    },
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
