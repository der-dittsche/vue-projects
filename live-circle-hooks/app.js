let vm = Vue.createApp({
  beforeCreate() {
    console.log("beforeCreate() function called", this.message);
  },
  created() {
    console.log("create() function called", this.message);
  },
  beforeMount() {
    console.log("beforeMount() function called", this.$el);
  },
  mounted() {
    console.log("mount() function called", this.$el);
  },
  beforeUpdate() {
    console.log("beforeUpdate() function called");
  },
  updated() {
    console.log("updated() function called", this.$el);
  },
  beforeUnmount() {
    console.log("beforeUnount() function called", this.$el);
  },
  unmounted() {
    console.log("unmount() function called", this.$el);
  },
});

vm.component("hello", {
  template: `<h1> {{ message}} </h1>`,
  data() {
    return {
      message: "Hallo Welt",
    };
  },
});

vm.mount("#app");
