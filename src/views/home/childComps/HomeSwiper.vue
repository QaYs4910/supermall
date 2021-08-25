<template>
  <!--    轮播图   -->
  <swiper ref="swiper">
    <swiper-item v-for="(item,index) in banners" :key="index">
      <!--  轮播图可以进行点击，所以使用<a>标签来包装添加图片,所有的图片和数据都是v:bind来绑定数据  -->
      <a :href="item.link">
        <img :src="item.image" alt="">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
//通过js文件将组件统一导入
import {Swiper, SwiperItem} from "@/components/common/swiper";

export default {
  name: "HomeSwiper",
  props:{
    banners:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components:{
    Swiper,
    SwiperItem
  },
  methods:{
    init() {
      this.$refs.swiper.init()
    }
  }
}
</script>

<style scoped>

</style>
