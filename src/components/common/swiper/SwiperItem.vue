<template>
  <div class="slide">
    <!--  插槽  -->
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Slide"
}
</script>

<style scoped>
.slide {
  width: 100%;
  flex-shrink: 0;
}

.slide img {
  width: 100%;
}
</style>
