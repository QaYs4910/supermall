<template>
  <!--建议所有的插槽在替换的时候都进行使用div进行包装一下,这样才能保证样式的完整-->
  <div class="tab-bar-item" @click="itemClick">
    <!--    <img src="../../assets/img/tabbar/home.svg" alt="主页图片">-->
    <!--    <div>首页</div>-->
    <!--    定义插槽填充  -->
    <!--    取反当处于不活跃的时候 -->

    <div v-if="!isActive"><slot name="item-icon"></slot></div>

    <div v-else><slot name="item-icon-active"></slot></div>
    <!--    动态绑定class   -->
    <!--    不可以在插槽上添加样式,最终会被替换,如果想再插槽上添加样式,可以在插槽外添加div标签  -->
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props:{
    //父组件的数据传递给子组件
    path: String,
    activeColor:{
      type:String,  //数据类型
      default: 'pink' //如果该对应的参数值没有传,则添加默认值
    }
  },
  data() {
    return {
      //isActive: true,
    }
  },
  computed:{
    //计算属性
    //通过计算属性来实现对数据的判断是否是true or false
    //从父组件传到子组件的数据相等说明为true
    // $route 当前活跃的组件
    isActive(){
      return this.$route.path.indexOf(this.path)!=-1
    },
    activeStyle(){
      //检测当前的是否活跃,是就获取父传给子的属性并动态绑定样式,否则空
      return this.isActive ? {color:this.activeColor}:{}
    }
  },
  methods:{
    itemClick(){
      console.log("点击执行...")
      console.log(this.path)
      this.$router.push(this.path).catch(error=>{})
    }
  }
}
</script>

<style scoped>
.tab-bar-item {
  flex: auto;
  text-align: center;
  /*border: 1px solid gold;*/
  height: 49px;
  /*
  box-shadow :
    参数1: x轴
    参数2: Y轴
    参数3: 模糊度
    参数4: 颜色设置,可以使用RGBA() 半透明设置(透明值在0～1之间)
   */
  box-shadow: 0px -2px 1px rgba(100, 100, 100, 0.1);
}

/*    获取图片大小设置  */
.tab-bar-item img {
  width: 24px;
  height: 24px;
  vertical-align: middle;
  margin-top: 3px;
  margin-bottom: 2px;
}

</style>
