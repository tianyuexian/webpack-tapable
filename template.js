(function (modules) {
  var installedModules = {};
  function __webpack_require__(moduleId) {
    if (installedModules[moduleId]) {
      return installedModules[moduleId].exports;
    }
    var module = installedModules[moduleId] = {
      i: moduleId,
      l: false,
      exports: {}
    };
    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    module.l = true;
    return module.exports;
  }
  // 提供一个入口
  return __webpack_require__(__webpack_require__.s = "./src/index.js");
})
  ({
    "./src/b.js":
      (function (module, exports, __webpack_require__) {
        eval("let str = __webpack_require__(/*! ./base/a */ \"./src/base/a.js\");\r\n\r\nmodule.exports = str;\n\n//# sourceURL=webpack:///./src/b.js?");
      }),
    "./src/base/a.js":
      (function (module, exports) {
        eval("module.exports = 'hello zf';\n\n//# sourceURL=webpack:///./src/base/a.js?");
      }),
    "./src/index.js":
      (function (module, exports, __webpack_require__) {
        eval("let str = __webpack_require__(/*! ./b */ \"./src/b.js\");\r\n\r\nconsole.log(str);\n\n//# sourceURL=webpack:///./src/index.js?");
      })
  });

  // 默认情况下所有的模块会有一个列表 列表就是传入的参数
  // 1) 需要拿到当前自己写的配置文件件
  // 2) 找到文件的入口执行我们的打包操作
  // 3) 找到入口对应的内容 将自己写的require 变成__webpack_require__ AST
  // 4) 收集模块的依赖 在去解析依赖的模块
  // 5）通过这样的默认的模板打包出结果来

  // http-server

  // 先把我的这个模块映射到全局下 npm link
  // 在另一个模块 使用 npm link xxx 把全局模块变成本地模块