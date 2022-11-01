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
  <hr />
  <div class="annime">
    <button type="button" @click="flag = !flag">Toggle</button>
    <transition name="fade" mode="out-in"
      ><h2 v-if="flag" key="main">Hello Again</h2>
      <h2 v-else="flag" key="secondary">Animate with Vue</h2></transition
    >
    <hr />
  </div>
  <div class="annime2">
    <button type="button" @click="flag2 = !flag2">Toggle</button>
    <transition name="zoom" appear
      ><p v-if="flag2" class="big">Animate with Css</p>
    </transition>
  </div>
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
      flag: false,
      flag2: true,
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

<style>
.fade-enter-from {
  opacity: 0;
}
.fade-enter-active {
  transition: all 0.25s linear;
}
.fade-leave-to {
  transition: all 0.25s linear;
  opacity: 0;
}

.big {
  width: 400px;
  padding: 20px;
  margin: 20px;
}

.zoom-enter-from {
  opacity: 0;
}

.zoom-enter-active {
  animation: zoom-in 1s linear forwards;
  transition: all 1s linear;
}

.zoom-leave-active {
  animation: zoom-out 1s linear forwards;
  transition: all 1s linear;
}
.zoom-leave-to {
  opacity: 0;
}

@keyframes zoom-in {
  from {
    transform: scale(0, 0);
  }
  to {
    transform: scale(1, 1);
  }
}
@keyframes zoom-out {
  from {
    transform: scale(1, 1);
  }
  to {
    transform: scale(0, 0);
  }
}
</style>
