//测试webpack-dev-middleware而启动的server服务器
const express = require("express");
const webpack = require("webpack");

const app = express();

app.listen(3000, () => {
  console.log("middleware");
});
