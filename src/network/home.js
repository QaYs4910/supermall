// 把每个网络请求到方法定义在对应到网络氢气u的js中,提高代码维护便于维护
import {request} from "@/network/request";

//导出方法所返回到对象
export function getHomeMultiedata(){

  return request({
    url:'/home/multidata'
  })
}
