<template>
<div class="layout-example">
  <div v-if="isMobile" class="section">
    I only show up for "mobile" and "lgMobile" breakpoints.
  </div>
  <div v-else>
    I only show up if the breakpoint is <strong>NOT</strong> "mobile" or "lgMobile".
  </div>
</div>
</template>

<script>
export default {
  computed: {
    isMobile() {
      return ["mobile", "lgMobile"].includes(this.$mq);
    }
  }
};
</script>

<style>
</style>
