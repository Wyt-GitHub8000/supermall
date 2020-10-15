module.exports ={
    // 系统自动生成的配置文件我们尽量不用动，但又想添加一些自己的配置，就自己创建一个js文件里面写自己的配置，打包时系统会自动
    // 合并我们自己的配置文件和系统的配置文件

    configureWebpack:{ //通过该关键词，向系统声明这是我们自己的配置文件
        //配置路径相关的关键词resolve
        resolve:{
          //关键词extensions可以配置省略文件后缀名
            alias:{
                'assets':'@/assets',
                'common':'@/common',
                'components':'@/components',
                'network':'@/network',
                'store':'@/store',
                'views':'@/views'
            }
        }
    }
}
