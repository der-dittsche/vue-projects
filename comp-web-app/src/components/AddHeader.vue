<template>
  <!-- Header -->
  <header id="header" class="bg-gray-700">
    <nav class="container mx-auto flex justify-start items-center py-5 px-4">
      <!-- App Name -->
      <router-link
        class="text-white font-bold uppercase text-2xl mr-4"
        :to="{ name: 'home' }"
        >Music</router-link
      >

      <div class="flex flex-grow items-center">
        <!-- Primary Navigation -->
        <ul class="flex flex-row mt-1">
          <!-- Navigation Links -->
          <!--           <li>
            <a class="px-2 text-white" href="#" @click.prevent="logoutUser"
              >Logout</a
            >
          </li> -->
          <li>
            <a class="px-2 text-white" href="#" @click.prevent="togleAuthModal"
              >Login / Register</a
            >
          </li>

          <li>
            <router-link class="px-2 text-white" :to="{ name: 'about' }"
              >About</router-link
            >
          </li>
          <li>
            <router-link class="px-2 text-white" :to="{ name: 'manage' }"
              >Manage</router-link
            >
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>
<script>
import { mapStores } from "pinia";
import useModalStore from "@/stores/modal.js";
/* import { useStoreUsersData } from "@/stores/storeUserData.js"; */
import { useStoreAuth } from "@/stores/storeUserAuth.js";

/* const userData = useStoreUsersData(); */

export default {
  name: "AppHeader",
  computed: {
    ...mapStores(useModalStore),
  },
  methods: {
    togleAuthModal() {
      this.modalStore.isOpen = !this.modalStore.isOpen;
    },
    logoutUser() {
      const useStoreUserAuth = useStoreAuth();
      useStoreUserAuth.logoutUser();
    },
  },
};
</script>
