<template lang="">
  <div>
    <p v-if="age > 25">
      {{ msg }}
    </p>
    <p v-else>You must be 25 years or older to see a message for you</p>
  </div>
</template>

<script>
export default {
  name: "Greeting",
  props: ["age"],
  data() {
    return {
      msg: "Hallo there!",
    };
  },
};
</script>

<style scoped lang="scss">
p {
  font-size: xx-large;
  color: blue;
}
p:hover {
  color: darken(blue, 15%);
}
</style>
