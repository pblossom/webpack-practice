const path = require("path");
module.exports = {
  mode: "development",
  entry: { main: "./src/index.js" },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"), //这里必须使用绝对路径，所以引入node的核心模块path，生成一个绝对路径，__diename就是当前文件所在目录
  },
  module: {
    rules: [
      {
        test: /\.(jpg|png|gif)$/,
        use: {
          loader: "url-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "images/", //打包到dist下的images文件夹下
            limit: 10240,
          },
        },
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              //配置「`css-loader 作用于 `@import` 的资源之前」有多少个 loader。
              importLoaders: 2, // 0 => 无 loader(默认); 1 => postcss-loader; 2 => postcss-loader, sass-loader
            },
          },
          "postcss-loader",
          "sass-loader",
        ],
      },
    ],
  },
};
