// 导入包 -  axios 安装命令  npm install axios --save
import axios from "axios";

export function request(config) {

  //方案二.
  //创建axios定义基本属性
  const axiosInstance = axios.create({
    //定义基本属性
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  });

  //axios 拦截器的使用  request,response
  //axios拦截器 request
  // 1.请求成功拦截,请求失败拦截,响应成功拦截,响应失败拦截
  // 2.成功后拦截需要进行放行,否则无法浏览器无法得到数据
  axiosInstance.interceptors.request.use(config => {
    //request 请求成功信息
    //console.log(config)
    return config     // - > 拦截器在拦截的请求的时候必须添加返回的操作,否则vue内部得不到数据之后就会出现异常
  }, error => {
    //请求失败信息
    //console.log(error)
  })

  //响应结果
  axiosInstance.interceptors.response.use((result) => {

    //响应结果 ,同样也是需要将响应的数据进行返回,否则出现错误异常
    //console.log(result)
    return result.data  //->和request一样都需将最终的数据返回给vue来进行处理否则得不到数据,只需要返回data数据即可

  }, (error) => {

    //console.log(error)
  })
  return axiosInstance(config)

  //方案一.
  // return new Promise((resolve, reject) => {
  //
  //   //1.创建axios定义基本属性
  //   const axiosInstance = axios.create({
  //     //定义基本属性
  //     baseURL: 'http://123.207.32.32:8000',
  //     timeout: 5000
  //   });
  //   //创建实例
  //   axiosInstance(config).then((res)=>{
  //     //结果
  //     resolve(config)
  //
  //   }).catch((error)=>{
  //
  //     failure(error)
  //
  //   })
  // })


}
