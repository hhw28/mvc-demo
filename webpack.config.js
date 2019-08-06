const path = require('path');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'cheap-module-eval-source-map',
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
    new CleanWebpackPlugin(),
    new HtmlwebpackPlugin({
      title: 'mvc-demo',
      filename: 'index.html',
      template: './src/index.html'
    }),
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
