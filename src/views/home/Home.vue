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
//Home 组件到网络请求js
import {getHomeMultiedata} from "@/network/home"
export default {
  name: "Home",
  components:{
    NavBar
  },
  data(){
    return {
      banners:[],
      recommends:[]
    }
  },
  //当前项目组件创建完成之后发送网络请求
  created() {
    //箭头函数向上查找最近到对象,当前为组件对象可以获得属性
    getHomeMultiedata().then((result) =>{
      //当前方法为异步操作,不能查看数据
      //直接获取到需要到数据,根据data数据结构来获取指定到需要到数据
      console.log(result)
      this.banners = result.data.banner.list
      this.recommends = result.data.recommend.list
    }).catch((error)=>{
      console.log(error)
    })
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
