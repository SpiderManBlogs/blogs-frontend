const webpackMerge = require("webpack-merge");
const baseWebpackConfig = require("./webpack.base.config")
const utils = require("./utils")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const AddAssetHtmlPlugin = require("add-asset-html-webpack-plugin")
const path = require("path")

module.exports = webpackMerge.merge(baseWebpackConfig,{
    // 指定构建环境
    mode:"development",
    // 插件
    plugins:[
        new HtmlWebpackPlugin({
            filename: utils.resolve('./../dist/index.html'), // html模板的生成路径
            template: 'index.html',//html模板
            inject: true, // true：默认值，script标签位于html文件的 body 底部
        }),
        new AddAssetHtmlPlugin([
            {filepath: path.resolve(__dirname, '../src/assets/jquery-3.2.1.min.js')},
            {filepath: path.resolve(__dirname, '../src/assets/plugins.js')},
            {filepath: path.resolve(__dirname, '../src/assets/modernizr.js')},
            {filepath: path.resolve(__dirname, '../src/assets/main.js')}
        ])
    ],
    devtool:'source-map',
    // 开发环境本地启动的服务配置
    devServer: {
        historyApiFallback: true, // 当找不到路径的时候，默认加载index.html文件
        hot: true,
        compress: true, // 一切服务都启用gzip 压缩：
        port: "3006", // 指定段靠谱
        proxy: {
            // 接口请求代理
        },
        static: {
            directory: path.join(__dirname, 'build'),
            publicPath: '/',
            staticOptions: {
                redirect: true,
            },
        },

    }


});
