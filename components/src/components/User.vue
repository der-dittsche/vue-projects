<template lang="">
  <div>
    <p>The user is {{ age }} years old</p>
    <p>{{ ageDouble }}</p>
    <button type="button" @click="onClickAge">Get older</button>
    <button type="button" @click="ageChangeFN(15)">Get older 15 Year</button>
  </div>
</template>
<script>
export default {
  name: "User",
  props: {
    age: {
      type: [Number],
      // required: true,
      validator(value) {
        return value < 130;
      },
    },
    ageChangeFN: Function,
  },
  emit: ["age-change"],
  computed: {
    ageDouble() {
      return this.age * 2;
    },
  },
  methods: {
    onClickAge() {
      this.$emit("age-change", 3);
    },
  },
};
</script>
<style lang=""></style>
