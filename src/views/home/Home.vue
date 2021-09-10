<template>
  <div id='home'>

    <!--    导航栏   -->
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>

    <!--  公共的 滑动组件   -->
    <scroll
      class="content"
      ref="scroll"
      :proto-type="3"
      @scroll="contentScroll"
      :pull-up-load="true"
      @pullingUp="loadMore">
      <home-swiper ref="swiper" :banners=banners></home-swiper>
      <home-recommend-view :recommends=recommends></home-recommend-view>
      <feature-view></feature-view>
      <tab-control
        :titles="['流行','新款','精选']"
        class="tab-control"
        @tabClick="tabClick"/>
      <!-- 获取goods中的数据传递给子组件  通过计算属性传递值 -->
      <Good-list :goods="showGoods"/>
    </scroll>
    <!--  back-top 不随着滑动区域而变动  -->
    <!--  1.直接通过原始的点击事件来触发效果来实现 组件的scroll的滑动到最顶部
          2.@click不能直接监听组件的事件,需要添加 native
          意思: 在组件模块上使用原生的监听事件的时候必须使用native 的修饰符,才能保证组件的原生的监听事件正常使用的
     -->
    <back-top @click.native="backTopClick" v-show="isShowBackTop"/>
  </div>
</template>


<script>

//导入组件
import HomeSwiper from "@/views/home/childComps/HomeSwiper";
//导入子组件
import HomeRecommendView from "@/views/home/childComps/HomeRecommendView";
//图片
import FeatureView from "@/views/home/childComps/FeatureView";

//公共组件
//导入导航栏
import NavBar from "@/components/common/navbar/NavBar";
//tabControl
import TabControl from "@/components/content/tabcontrol/TabControl";
//导入GoodsList
import GoodList from "@/components/content/goods/GoodsList";
//滚动组件
import scroll from "@/components/common/scroll/Scroll";
//Home 组件到网络请求js
import {getHomeMultiedata, getHomeGoods} from "@/network/home";
// BackTop 组件
import BackTop from "@/components/content/backtop/BackTop";

export default {
  name: "Home",
  components: {
    // Swiper, //轮播图的轮廓 组件
    // SwiperItem  //每一个轮播图item 组件
    HomeSwiper,
    HomeRecommendView,
    FeatureView,
    GoodList,

    NavBar,  //home 主页导航栏
    TabControl,
    scroll,
    BackTop
  },
  data() {
    return {
      banners: [],
      recommends: [],
      //分页数据的加载,定义变量被复制并渲染Home组件
      goods: {
        pop: {page: 0, list: []},
        new: {page: 0, list: []},
        sell: {page: 0, list: []}
      },
      // 默认的当前的类型为pop
      currentType: 'pop',
      //动态设置showBackTop
      isShowBackTop: false
    }
  },
  //当前项目组件创建完成之后发送网络请求
  created() {
    this.getHomeMultiedata(),
      //分别调用一次将数据拿到(初始化第一次接收的数据)
      this.getHomeGoods("pop"),
      this.getHomeGoods("new"),
      this.getHomeGoods("sell")
  },
  methods: {
    /**
     * 事件请求方法:
     */
    tabClick(index) {
      //通过switch来匹配类型
      console.log(index)
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
    },
    backTopClick() {
      //获取组件对象的scroll属性调用 scrollTo跳到0,0坐标(已自定封装滑动事件)
      this.$refs.scroll.scrollTo(0, 0)
    },
    contentScroll(position) {
      //如果y的值大于1000 为true显示
      // console.log(position)
      this.isShowBackTop = (-position.y) > 1000
    },
    loadMore(){
      this.getHomeGoods(this.currentType)
      /**
       * 1.在图片未加载完成之前的img的宽高没有被图片撑起来,这时所有img标签的高度会被scroll一次计算
       * 2.在此时会卡顿不能上滑的情况因为高度已经被计算
       * 3.如果在scroll高度计算之前就已经将所有的图片都加载完毕之后此时就不会出现加载卡顿的现象
       * 4.为了保证scroll计算的高度重新计算一边,可以使用 scroll.refresh() 进行刷新计算。
       */
      //图片加载完之后进行refresh
      this.$refs.scroll.refresh()
    },
    /**
     * 网络请求方法
     */
    getHomeMultiedata() {
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
    },
    //type分类
    getHomeGoods(type) {
      //定义变量
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then((res) => {
        console.log(res);
        //向数组中追加数据(将每次请求的数据挨个的放到指定的数组中)
        this.goods[type].list.push(...res.data.list)
        //页码进行 +=赋值
        this.goods[type].page += 1
        //每一次完成加载之后进行提示系统完成加载操作,可以操作下一次的加载
        this.$refs.scroll.finishPullUp()
      })
    }

  },
  //计算属性
  computed: {
    showGoods() {
      return this.goods[this.currentType].list
    }
  }
}
</script>

<style scoped>
/*添加样式*/
.home-nav {
  background-color: var(--color-tint);
  color: #f6f6f6;
}

/*吸顶操作*/
.home-nav {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;

}

#home {

  height: 100vh;
  position: relative;
}

.tab-control {
  /*定位*/
  position: sticky;
  top: 44px;
  /* 设置 Z -index  */
  z-index: 9;
}

.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;

}

</style>
