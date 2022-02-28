const webpackMerge = require("webpack-merge");
const baseWebpackConfig = require("./webpack.base.config")
const utils = require("./utils")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const AddAssetHtmlPlugin = require("add-asset-html-webpack-plugin")
const path = require("path")

module.exports = webpackMerge.merge(baseWebpackConfig,{
    // 指定构建环境
    mode:"production",
    // 插件
    plugins:[
        new HtmlWebpackPlugin({
            filename: utils.resolve('./../dist/index.html'), // html模板的生成路径
            template: 'index.html',//html模板
            inject: true, // true：默认值，script标签位于html文件的 body 底部
            hash: true, // 在打包的资源插入html会加上hash
            //  html 文件进行压缩
            minify: {
                removeComments: true,               //去注释
                collapseWhitespace: true,           //压缩空格
                removeAttributeQuotes: true         //去除属性引用
            }
        }),
        new AddAssetHtmlPlugin([
            {filepath: path.resolve(__dirname, '../src/assets/jquery-3.2.1.min.js')},
            {filepath: path.resolve(__dirname, '../src/assets/plugins.js')},
            {filepath: path.resolve(__dirname, '../src/assets/modernizr.js')},
            {filepath: path.resolve(__dirname, '../src/assets/main.js')}
        ])
    ],
})
