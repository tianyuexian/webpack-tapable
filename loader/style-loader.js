function loader(source) {
  let code = `
    let style = document.createElement('style');
    style.innerHTML = ${JSON.stringify(source)};
    document.head.appendChild(style);
  `;
  code = code.replace(/\\n/g,'\\\\n'); // \n => \\\\n
  return code;
}
module.exports = loader;
// 最后一个loader 需要返回一个可执行的脚本
// 在浏览器中会通过eval 把他执行



// 1) 需要获取到webpack.config.js  获取的是当前运行的webpack路径
// entryOption
// 2) webpack 会接收这个参数 创建一个Compiler 一个webpack 只有一个Compiler
// 3) run 表示开始编译
// beforeCompile
// 4) 会获取当前入口文件的内容，开始解析主模块
// afterCompile
// 5) 解析模块对应的内容 替换掉require方法 路径的处理 ，收集我们所需要的依赖
// 6) 递归解析整个依赖
// 7) 发射文件 通过入口 this.modules渲染出最终的结果
// 8) done 完成编译
// 内部读取的资源会调用loader 依次处理 将处理的结果插入到页面中