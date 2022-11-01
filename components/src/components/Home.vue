<template>
  <h1>Home</h1>
  <button type="button" @click="flag3 = !flag3">Toggle</button>
  <transition
    @before-enter="beforeEnter"
    @enter="enter"
    @after-enter="afterEnter"
    @before-leave="beforeLeave"
    @leave="leave"
    @after-leave="afterLeave"
    :css="false"
  >
    <h2 v-if="flag3">Animate with JS</h2>
  </transition>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      flag3: true,
    };
  },
  methods: {
    beforeEnter(el) {
      console.log("before-enter event fired", el);
    },
    enter(el, done) {
      console.log("enter event fired", el);
      const animation = el.animate([{ transform: "scale3d(0,0,0)" }, {}], {
        duration: 1000,
      });
      animation.onfinish = () => {
        done();
      };
    },
    afterEnter(el) {
      console.log("after-enter event fired", el);
    },
    beforeLeave(el) {
      console.log("before-leave event fired", el);
    },
    leave(el, done) {
      console.log("leave event fired", el);
      const animation = el.animate([{}, { transform: "scale3d(0,0,0)" }], {
        duration: 1000,
      });
      animation.onfinish = () => {
        done();
      };
    },
    afterLeave(el) {
      console.log("after-leave event fired", el);
    },
  },
};
</script>
