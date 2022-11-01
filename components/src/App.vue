<template>
  <h3>Vue Project</h3>
  <Greeting :age="age" />
  <User :age="age" @age-change="updateAge" :ageChangeFN="updateAgeCB" />
  <hr />
  <AppForm>
    <template v-slot:contact>
      <p>{{ help }}</p>
    </template>
    <template v-slot:fields>
      <input type="text" name="" id="" placeholder="email" />
      <input type="text" name="" id="" placeholder="admin" />
      <input type="password" name="" id="" placeholder="password" />
    </template>
    <template v-slot:button>
      <button type="submit">Submit</button>
    </template>
  </AppForm>
  <AppForm>
    <template v-slot:contact>
      <p>Contact</p>
    </template>
    <template v-slot:fields>
      <input type="text" name="" id="" placeholder="email" />
      <input type="text" name="" id="" placeholder="admin" />
    </template>
    <template v-slot:buttons>
      <button type="submit">Submit</button>
    </template>
  </AppForm>
  <hr />
  <select v-model="componentName">
    <option value="Home">Home</option>
    <option value="About">About</option>
  </select>
  <keep-alive> <component :is="componentName"></component></keep-alive>
</template>

<script>
import Greeting from "@/components/Greeting.vue";
import User from "@/components/User.vue";
import AppForm from "@/components/Form.vue";
import Home from "@/components/Home.vue";
import About from "@/components/About.vue";

export default {
  name: "App",
  components: {
    Greeting,
    User,
    AppForm,
    Home,
    About,
  },
  data() {
    return {
      age: 16,
      help: "This a help text",
      componentName: "Home",
    };
  },
  methods: {
    updateAge(num) {
      this.age += num;
    },
    updateAgeCB(num) {
      this.age += num;
    },
  },
};
</script>
