<template>
<div class="gallery" :style="{ gridTemplateColumns: template }">
  <div class="gallery-item" v-for="i in 12" :key="i">
    <img :src="`https://unsplash.it/300?v=${i}`" />
  </div>
</div>
</template>

<script>
export default {
  computed: {
    isMobile() {
      return ["mobile", "lgMobile"].includes(this.$mq);
    },
    template() {
      return this.isMobile ? "1fr 1fr" : "1fr 1fr 1fr 1fr";
    }
  }
};
</script>

<style>
.gallery {
  display: grid;
  grid-gap: 20px;
  margin: 0 auto;
  max-width: 1280px;
}

.gallery-item img {
  max-width: 100%;
  width: 100%;
}
</style>
