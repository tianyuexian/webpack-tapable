let path = require('path');
class P1{ // webpack插件的写法 每个插件都有一个apply方法
  // 默认webpack编译的时候 会循环插件数组 把每个插件全部执行
  // 我们写的插件会订阅一些事件 这些事件当执行到对应的步骤时会调用
  // 插件默认写的时候 可以没有顺序
  apply(compiler){ // 
    compiler.hooks.done.tap('完成插件',function () {
      console.log('打包完成')
    })
  }
}
class P2{
  apply(compiler){
    compiler.hooks.run.tap('开始运行', function () {
      console.log('开始运行')
    })
  }
}
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          path.resolve(__dirname, './loader/style-loader'),
          path.resolve(__dirname, './loader/less-loader'),
        ]
      }
    ]
  },
  plugins:[
    // 插件 是一个类
    new P1(), new P2()
  ]
}