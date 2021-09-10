<template>
  <!--
    使用规范:
    1.wrapper 外包装元素
      1.1: wrapper内实现滑动的标签要元素只能有一个
    2.content 滑动的内容
      2.1: content: 滑动的内容的元素的 height > wrapper的height 才能实现 better-scroll组件的滑动效果
  -->
  <div class="wrapper" ref="aaa">
    <ul class="content">
      <li>分类列表1</li>
      <li>分类列表2</li>
      <li>分类列表3</li>
      <li>分类列表4</li>
      <li>分类列表5</li>
      <li>分类列表6</li>
      <li>分类列表7</li>
      <li>分类列表8</li>
      <li>分类列表9</li>
      <li>分类列表10</li>
      <li>分类列表11</li>
      <li>分类列表12</li>
      <li>分类列表13</li>
      <li>分类列表14</li>
      <li>分类列表15</li>
      <li>分类列表16</li>
      <li>分类列表17</li>
      <li>分类列表18</li>
      <li>分类列表19</li>
      <li>分类列表20</li>
      <li>分类列表21</li>
      <li>分类列表22</li>
      <li>分类列表23</li>
      <li>分类列表24</li>
      <li>分类列表25</li>
      <li>分类列表26</li>
      <li>分类列表27</li>
      <li>分类列表28</li>
      <li>分类列表29</li>
      <li>分类列表30</li>
      <li>分类列表31</li>
      <li>分类列表32</li>
      <li>分类列表33</li>
      <li>分类列表34</li>
      <li>分类列表35</li>
      <li>分类列表36</li>
      <li>分类列表37</li>
      <li>分类列表38</li>
      <li>分类列表39</li>
      <li>分类列表40</li>
      <li>分类列表41</li>
      <li>分类列表42</li>
      <li>分类列表43</li>
      <li>分类列表44</li>
      <li>分类列表45</li>
      <li>分类列表46</li>
      <li>分类列表47</li>
      <li>分类列表48</li>
      <li>分类列表49</li>
      <li>分类列表50</li>
      <li>分类列表51</li>
      <li>分类列表52</li>
      <li>分类列表53</li>
      <li>分类列表54</li>
      <li>分类列表55</li>
      <li>分类列表56</li>
      <li>分类列表57</li>
      <li>分类列表58</li>
      <li>分类列表59</li>
      <li>分类列表60</li>
      <li>分类列表61</li>
      <li>分类列表62</li>
      <li>分类列表63</li>
      <li>分类列表64</li>
      <li>分类列表65</li>
      <li>分类列表66</li>
      <li>分类列表67</li>
      <li>分类列表68</li>
      <li>分类列表69</li>
      <li>分类列表70</li>
      <li>分类列表71</li>
      <li>分类列表72</li>
      <li>分类列表73</li>
      <li>分类列表74</li>
      <li>分类列表75</li>
      <li>分类列表76</li>
      <li>分类列表77</li>
      <li>分类列表78</li>
      <li>分类列表79</li>
      <li>分类列表80</li>
      <li>分类列表81</li>
      <li>分类列表82</li>
      <li>分类列表83</li>
      <li>分类列表84</li>
      <li>分类列表85</li>
      <li>分类列表86</li>
      <li>分类列表87</li>
      <li>分类列表88</li>
      <li>分类列表89</li>
      <li>分类列表90</li>
      <li>分类列表91</li>
      <li>分类列表92</li>
      <li>分类列表93</li>
      <li>分类列表94</li>
      <li>分类列表95</li>
      <li>分类列表96</li>
      <li>分类列表97</li>
      <li>分类列表98</li>
      <li>分类列表99</li>
      <li>分类列表100</li>
      <li>分类列表101</li>
      <li>分类列表102</li>
      <li>分类列表103</li>
      <li>分类列表104</li>
      <li>分类列表105</li>
      <li>分类列表106</li>

    </ul>
    <div @ckilck="divClick">111</div>

    <button @click="butClick" value="按钮"></button>
  </div>

</template>

<script>
//better-scroll 导入
import BScroll from "better-scroll"

export default {
  name: "Category",
  data() {
    return {
      scroll: null
    }
  },
  methods: {
    divClick() {
      console.log("divClick....");
    },
    butClick() {
      console.log("butClick....");
    }
  },
  //组件创建完成之后操作
  created() {
  },
  //在vue页面加载完成之后进行操作
  mounted() {
    this.scroll = new BScroll(document.querySelector('.wrapper'), {
      probeType: 3,//实时监听页面滑动,包括惯性滑动
      pullUpLoad: true
    })
    //当滑动区域进行滑动当时候输出其实时滑动当坐标地址
    this.scroll.on('scroll', (position) => {
      //console.log(position);
    })
    //上拉监听
    this.scroll.on('pullingUp', () => {
      console.log("2222233333111")
      setTimeout(() => {
        this.scroll.finishPullUp()
      }, 2000)
    })
  }
}
</script>

<style scoped>
.wrapper {
  height: 300px;
  background-color: #ff5777;
  overflow: hidden;
}

</style>
