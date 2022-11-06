import { defineStore } from "pinia";
import { collection, addDoc, onSnapshot, query } from "firebase/firestore";
import { db } from "@/includes/firebase.js";

let getUsersSnapshot = null;
let usersCollectionRef;
let usersCollectionQuerry;

export const useStoreUsersData = defineStore("storeUsers", {
  state: () => {
    return {
      userData: [],
      userLoaded: false,
    };
  },
  actions: {
    initUser() {
      usersCollectionRef = collection(db, "users");
      usersCollectionQuerry = query(usersCollectionRef);
      this.getUserData();
    },
    async getUserData() {
      this.userLoaded = false;
      getUsersSnapshot = onSnapshot(usersCollectionQuerry, (querySnapshot) => {
        let userData = [];
        querySnapshot.forEach((doc) => {
          let user = {
            id: doc.id,
            name: doc.data().name,
            email: doc.data().email,
            age: doc.data().age,
            contry: doc.data().contry,
          };
          userData.push(user);
        });

        this.userData = userData;
        this.userLoaded = true;
      });
    },
    clearUsers() {
      this.userdata = [];
      if (getUsersSnapshot) getUsersSnapshot(); // unsubscribe from any listener
    },
    addUserData(credentials) {
      addDoc(collection(db, "users"), {
        email: credentials.email,
        name: credentials.name,
        age: credentials.age,
        contry: credentials.contry,
        tos: credentials.tos,
      });
    },
  },
  getters: {},
});
