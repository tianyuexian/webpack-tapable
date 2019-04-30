let less = require('less');
function loader(source) {
  let css;
  less.render(source,(err,data)=>{
    css = data.css; // 转化后的结果
  });
  return css;
}
module.exports = loader;
// loader就是一个普通的函数


// 周四 tapable 插件
// loader的写法 css-loader less-loader style-loader
// 中间件