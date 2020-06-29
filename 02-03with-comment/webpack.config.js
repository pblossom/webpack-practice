const path = require("path");
module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"), //这里必须使用绝对路径，所以引入node的核心模块path，生成一个绝对路径，__diename就是当前文件所在目录
  },
};
