<template>
  <!--  滚动组件-->
  <!-- ref 标记 :可以使用 this.$refs.name 来获取指定绑定的元素 -->
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
//导入scroll组件
import BScroll from "better-scroll";

export default {
  name: "Scroll",
  data() {
    return {
      scroll: null
    }
  },
  //父组件获取数据
  props: {
    protoType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  //一般在初始化页面完成后，再对dom节点进行相关操作
  mounted() {
    //创建 BScroll
    this.scroll = new BScroll(this.$refs.wrapper, {
      //scroll ->content 监听点击button   click:false div不可以设置监听
      //
      click: true,
      //开启实时监听
      /**
       1. probeType 为 0，在任何时候都不派发 scroll 事件，
       2. probeType 为 1，仅仅当手指按在滚动区域上，每隔 momentumLimitTime 毫秒派发一次 scroll 事件，
       3. probeType 为 2，仅仅当手指按在滚动区域上，一直派发 scroll 事件，
       4. probeType 为 3，任何时候都派发 scroll 事件，包括调用 scrollTo 或者触发 momentum 滚动动画
       */
      //是否监听滑动的坐标信息
      probeType: this.protoType,
      //上拉加载监听
      pullUpLoad: this.pullUpLoad

    })

    //实时监听滑动坐标
    this.scroll.on("scroll", (position) => {
      //监听滑动的值传递给父类
      this.$emit("scroll", position)
    })
    //上拉加载更多监听
    this.scroll.on("pullingUp", () => {
      this.$emit("pullingUp")

    })
  },
  methods: {
    //ES6语法 time可定义默认值调用的时候不传会给定默认值300
    scrollTo(x, y, time = 400) {
      this.scroll.scrollTo(x, y, time)
    },
    /**
     1.finishPullUp()
       作用：当上拉加载数据加载完毕后，需要调用此方法告诉 better-scroll 数据已加载。
     2.refresh()
       作用：重新计算 better-scroll，当 DOM 结构发生变化的时候务必要调用确保滚动的效果正常。
     */
    //完成一次加载之后完毕操作,可执行下一次操作
    finishPullUp() {
      this.scroll.finishPullUp()
    },
    //重新刷新一次(这里的作用是在scroll计算图片未加载之后的重新一次计算高度)
    refresh() {
      this.scroll.refresh()
    }
  }
}
</script>

<style scoped>

</style>
