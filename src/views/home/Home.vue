<template>
  <div id='home'>
    <!--    导航栏   -->
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <!--    轮播图   -->
    <swiper ref="swiper">
      <swiper-item v-for="(item,index) in banners" :key="index">
       <!--  轮播图可以进行点击，所以使用<a>标签来包装添加图片,所有的图片和数据都是v:bind来绑定数据  -->
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
      </swiper-item>
    </swiper>

  </div>
</template>


<script>
//导入导航栏
import NavBar from "@/components/common/navbar/NavBar";
//Home 组件到网络请求js
import {getHomeMultiedata} from "@/network/home";
//通过js文件将组件统一导入
import {Swiper, SwiperItem} from "@/components/common/swiper";
export default {
  name: "Home",
  components: {
    NavBar,
    Swiper,
    SwiperItem
  },
  data() {
    return {
      banners: [],
      recommends: []
    }
  },
  comments: {
    NavBar,  //home 主页导航栏
    Swiper, //轮播图的轮廓 组件
    SwiperItem  //每一个轮播图item 组件
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
