<template>
  <div class="recommends">
    <div v-for="item in recommends" class="recommends-item">
      <a :href="item.link">
        <img :src="item.image" alt=""/>
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  //所有的数据都是从父组件中获取的,所以这里要接收数据
  props: {
    recommends: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
/*div设置 flex*/
.recommends {
  display: flex;
  width: 100%;
  /*设置字体的大小*/
  font-size: 12px;
  /*上 左右 下(三个参数设置)*/
  padding: 10px 0 20px;
/*  设置底部border的样式*/
  border-bottom: 8px solid #eeeeee;
}

/*自动布局*/
.recommends-item {
  flex: 1;
  /*内部item剧中设置*/
  text-align: center;
}
/*图片设置*/
.recommends-item img {
  width: 65px;
  height: 65px;
/* 图片下添加空间间隙 */
  margin-bottom: 10px;
}
</style>
