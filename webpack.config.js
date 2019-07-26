const path = require('path');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
  mode: "production",
  // 入口 main.js
  entry: './src/index.js',
  // 输出
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    alias: {
      handlebars: 'handlebars/dist/handlebars.min.js'
    }
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000
  },
  plugins: [
    // new HtmlwebpackPlugin({
    //   title: 'mvc-demo',
    //   filename: 'index.html'
    // }),
    new OpenBrowserPlugin({
      url: 'http://localhost:9000'
    })
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader"
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          {
            loader: "style-loader", // style-loader 把 css 插入到head标签中
            options: {
              insertAt: "top" // style标签内样式放在最上面
            }
          },
          // "postcss-loader",
          "css-loader", // css-loader 解析 @import 这个语法
          "sass-loader"
        ]
      },
    ]
  }
};
