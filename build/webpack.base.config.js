const utils = require("./utils")
const path = require("path")

module.exports = {
    // 入口
    entry: {
        app: "./src/index"
    },
    // 出口
    output: {
        path : utils.resolve("../dist"),
        filename: "js/[name].[hash].js",
        publicPath: "/blogs/" // 打包后的资源的访问路径前缀
    },
    // 模块
    module:{
        rules:[
            {
                test: /\.(js|jsx)$/,//一个匹配loaders所处理的文件的拓展名的正则表达式，这里用来匹配js和jsx文件（必须）
                exclude: /node_modules/,//屏蔽不需要处理的文件（文件夹）（可选）
                loader: 'babel-loader',//loader的名称（必须）
                options: {
                    "presets": [
                        "@babel/preset-env"
                    ]
                }
            },
            {
                test: /\.css$/,
                use:[
                    {
                        loader: 'style-loader', // 创建 <style></style>
                    },
                    {
                        loader: 'css-loader',  // 转换css
                    }
                ]
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'less-loader', // 编译 Less -> CSS
                    },
                ],
            },
            {
                test: /\.(jpg|png|gif|svg)$/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 10 * 1024
                    }
                },
                generator: {
                    filename: 'assect/[name].[hash:6][ext]',
                    publicPath: './'
                }
            },
            {
                test: /\.html$/,
                loader: 'html-withimg-loader'
            }

            // {
            //     exclude: /\.(js|css|sass|html|less)$/,
            //     type: 'asset/resource',
            //     // enforce:'pre',
            //     generator: {
            //         filename: 'assect/[name][ext][query]'
            //     }
            // },
        ],
    },
    resolve: {
        extensions: ['.js', '.json'], // 解析扩展。（当我们通过路导入文件，找不到改文件时，会尝试加入这些后缀继续寻找文件）
        alias: {
            '@': path.join(__dirname, '..', "src") // 在项目中使用@符号代替src路径，导入文件路径更方便
        }
    },
}
