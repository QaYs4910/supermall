<template>
  <div class="tab-control">
    <!--    包装div   -->
    <!-- 判断绑定数据  active为类名 -->
    <div v-for="(item,index) in titles" class="tab-control-item"
         :class="{active:index === currentIndex}" @click="itemClick(index)">
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      //default() 在接收的参数为(对象或 者是 数组)的时候可以使用Default()函数
      default() {
        return []
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index
      //子组件向外部组件发送自定义设置请求
      //自定义事件传递数据
      this.$emit("tabClick",index)
    }
  }
}
</script>

<style scoped>
.tab-control {
  display: flex;
  text-align: center;
  font-size: 15px;
  background-color: #ffffff;
}

.tab-control-item {
  flex: 1;
  height: 40px;
  line-height: 40px;
}

.active {
  /*使用变量*/
  color: var(--color-high-text);

}

.active span {
  border-bottom: 3px solid var(--color-tint);

}

.tab-control-item span {
  padding: 5px;
}
</style>
