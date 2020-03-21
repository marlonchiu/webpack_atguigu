/*
  loader: 1. 下载   2. 使用（配置loader）
  plugins: 1. 下载  2. 引入  3. 使用
*/

// resolve用来拼接绝对路径的方法
const { resolve } = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'built.js',
    path: resolve(__dirname, 'build')
  },
  // loader的配置
  module: {
    rules: [
    ]
  },
  // plugins的配置
  plugins: [
    // 详细plugins的配置
    // html-webpack-plugin
    // 功能：默认会创建一个空的HTML，自动引入打包输出的所有资源（JS/CSS）
    // 需求：需要有结构的HTML文件
    new HtmlWebpackPlugin({
      // 复制 './src/index.html' 文件，并自动引入打包输出的所有资源（JS/CSS）
      template: './src/index.html'
    })
  ],
  // 模式
  mode: 'development', // 开发模式
  // mode: 'production' // 生产模式
}
