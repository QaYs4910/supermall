<template>
    <!--  nav-bar 组件-->
  <div class="nav-bar">
    <!-- nav-bar中添加三个插槽 left center right   -->
    <!-- 需要进行包装插槽这样在对插槽添加样式对时候可以在外层对div进行添加    -->
    <!--    具名插槽: 在使用对时候可以指定使用哪一个插槽   -->

    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
<!--    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   --12966 -->

<!--    t  QaYs4910 网易-->
  </div>

</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>
  .nav-bar{
    /*div 开启 flex 模式*/
    display: flex;
    line-height: 44px;
    height: 44px;
    box-shadow: 0px 1px 1px rgba(100, 100, 100, 0.1);
  }
  .left,.right{
    width: 60px;

  }
  .center{
    flex: 1;
    text-align: center;
  }
</style>
