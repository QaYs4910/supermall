<template>
  <div id ='home'>
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
  </div>
</template>

<script>
//导入导航栏
import NavBar from "@/components/common/navbar/NavBar";
export default {
  name: "Home",
  components:{
    NavBar
  }
}
</script>

<style scoped>
     /*添加样式*/
    .home-nav{
      background-color: var(--color-tint);
      color: #f6f6f6;
    }
</style>
