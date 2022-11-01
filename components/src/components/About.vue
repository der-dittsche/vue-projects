<template>
  <h1>About</h1>
  <h2>Animate a List of Number</h2>

  <button @click="addItem">Add a further Number</button>
  <ul>
    <transition-group name="numberlist">
      <li
        v-for="(number, index) in numbers"
        :key="number"
        @click="removeItem(index)"
      >
        {{ number }}
      </li></transition-group
    >
  </ul>
</template>
<script>
export default {
  name: "About",
  data() {
    return {
      numbers: [1, 2, 3, 4, 5],
    };
  },
  methods: {
    addItem() {
      const num = Math.floor(Math.random() * 100 + 1);
      const index = Math.floor(Math.random() * this.numbers.length);
      this.numbers.splice(index, 0, num);
    },
    removeItem(index) {
      this.numbers.splice(index, 1);
    },
  },
};
</script>
<style>
ul {
  padding-bottom: 20px;
}
li {
  font-size: 16px;
  cursor: pointer;
}
.numberlist-enter-from {
  opacity: 0;
}
.numberlist-enter-active {
  transition: all 1s linear;
}
.numberlist-leave-to {
  transition: all 1s linear;
  opacity: 0;
}
.numberlist-leave-active {
  position: absolute;
}
.numberlist-move {
  transition: all 1s linear;
}
</style>
