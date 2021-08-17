<template>
  <div id="tab-bar">
    <!--    定义插槽    -->
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar"
}
</script>

<style scoped>

/*  弹性盒子  */
#tab-bar {
  display: flex;
  background-color: #f6f6f6;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
}


</style>
