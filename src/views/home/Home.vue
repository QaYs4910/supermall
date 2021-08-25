<template>
  <div id='home'>
    <!--    导航栏   -->
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>

    <home-swiper ref="swiper" :banners = banners></home-swiper>

    <home-recommend-view :recommends = recommends></home-recommend-view>
  </div>
</template>


<script>
//导入导航栏
import NavBar from "@/components/common/navbar/NavBar";
//导入组件
import HomeSwiper from "@/views/home/childComps/HomeSwiper";
//Home 组件到网络请求js
import {getHomeMultiedata} from "@/network/home";

//导入子组件
import HomeRecommendView from "@/views/home/childComps/HomeRecommendView";
export default {
  name: "Home",
  components: {
    NavBar,  //home 主页导航栏
    // Swiper, //轮播图的轮廓 组件
    // SwiperItem  //每一个轮播图item 组件
    HomeSwiper,
    HomeRecommendView
  },
  data() {
    return {
      banners: [],
      recommends: []
    }
  },
  //当前项目组件创建完成之后发送网络请求
  created() {
    //箭头函数向上查找最近到对象,当前为组件对象可以获得属性
    getHomeMultiedata().then((result) => {
      //当前方法为异步操作,不能查看数据
      //直接获取到需要到数据,根据data数据结构来获取指定到需要到数据
      this.banners = result.data.banner.list
      this.recommends = result.data.recommend.list
      this.$refs.swiper.init()
    }).catch((error) => {
      console.log(error)
    })
  }
}
</script>

<style scoped>
/*添加样式*/
.home-nav {
  background-color: var(--color-tint);
  color: #f6f6f6;
}
</style>
