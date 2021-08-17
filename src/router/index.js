//1.导入
import Vue from "vue";
import VueRouter from "vue-router";

//懒加载文件导入组件
const Home = ()=> import('../views/home/Home')
const Cart = ()=> import('../views/cart/Cart')
const Category = ()=> import('../views/category/Category')
const Profile = ()=> import('../views/profile/Profile')

//注册安装(安装插件)
Vue.use(VueRouter)

//路由配置
const routers = [

  //  定义默认的路径
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/cart',
    component:Cart
  },
  {
    path:'/category',
    component:Category
  },
  {
    path: '/profile',
    component: Profile
  }
]

//3.创建router
const router = new VueRouter({
  routes:routers,
  mode:'history' //  history模式页面就不会出现 /#//#
})

//导出
export default router
