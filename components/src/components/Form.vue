<template lang="">
  <div>
    <form action="">
      <div class="contactform">
        <slot name="contact"></slot>
      </div>
      <div class="fields">
        <slot name="fields"></slot>
      </div>
      <div class="buttons">
        <slot name="buttons"></slot>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "AppForm",
};
</script>
<style lang=""></style>
