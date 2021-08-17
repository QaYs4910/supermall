<template>
  <TabBar>
    <!--  带插槽 -> 这里插入了四个插槽组件    -->
    <tab-bar-item path="/home">
      <!--       替换插槽 根据name替换 -->
      <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="主页图片">
      <!--       图片切换     -->
      <img slot="item-icon-active" src="~assets/img/tabbar/home_active.svg" alt="主页图片">
      <!--       替换插槽 根据name替换 -->
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <img slot="item-icon" src="~assets/img/tabbar/category.svg" alt="分类图片">
      <img slot="item-icon-active" src="~assets/img/tabbar/category_active.svg" alt="分类图片">
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <img slot="item-icon" src="~assets/img/tabbar/cart.svg" alt="购物车图片">
      <img slot="item-icon-active" src="~assets/img/tabbar/cart_active.svg" alt="购物车图片">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img slot="item-icon" src="~assets/img/tabbar/profile.svg" alt="我的图片">
      <img slot="item-icon-active" src="~assets/img/tabbar/profile_active.svg" alt="我的图片">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </TabBar>
</template>

<script>
//导入组件
import TabBar from '@/components/common/tabbar/TabBar'
import TabBarItem from '@/components/common/tabbar/TabBarItem'

export default {
  name: "MainTabBar",
  components:{
    TabBar,
    TabBarItem
  }

}
</script>

<style scoped>

</style>
