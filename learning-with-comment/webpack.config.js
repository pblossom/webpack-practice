const path = require("path");
module.exports = {
  mode: "development", //添加mode，否则在打包时会有警告，默认值是 production
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
            limit: 10240, //limit  图片小于10k则变成base64写入bundle.js，大于10k则单独打包到image文件夹中
          },
        },
      },
      {
        test: /\.(eot|ttf|svg|woff)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "font/", //打包到dist下的font文件夹下
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
              //modules: true,
            },
          },
          "postcss-loader",
          "sass-loader",
        ],
      },
    ],
  },
};
