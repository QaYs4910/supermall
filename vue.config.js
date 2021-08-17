
module.exports ={
    //别名配置
    configureWebpack:{
        resolve:{
            extensions:[], // 配置文件后缀名的(不需要写文件后缀名)
            //别名设置
            alias:{
                // 脚手架3中的别名设置   '@' 直接可以表示项目跟路径 -> src
                'assets':'@/assets',  //静态文件资源
                'common':'@/common',    //公共文件
                'components':'@/components',    //公共组件
                'network':'@/network',      //网络通讯
                'views':'@/views',      //所有实图组件
            }
        }
    }
}