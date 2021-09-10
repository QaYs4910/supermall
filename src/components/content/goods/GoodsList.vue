<template>
  <!--  展示商品列表  -->
  <div class="goods">
    <!--    循环遍历子组件   将得到的子组件传递给子组件  -->
    <goods-list-item v-for="(item,index) in goods" :key="index" :goods-item="item"/>
  </div>
</template>

<script>
//导入子组件
import GoodsListItem from "@/components/content/goods/GoodsListItem";

export default {
  name: "GoodList",
  components: {
    GoodsListItem
  },
  props: {
    goods: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
   .goods{
     display: flex;
     /*默认不包裹*/
     flex-wrap: wrap;
     /*左右均等分*/
     justify-content: space-around;
     padding: 2px;
   }

</style>
