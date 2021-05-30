const path = require('path');
const resolve = (dir) => path.join(__dirname, dir); // 给public路径添加别名
const merge = require('webpack-merge');
const tsImportPluginFactory = require('ts-import-plugin');

const port = 9526 // dev por
module.exports = {
    outputDir: 'owner',
    // 解决vant打包后样式丢失的问题
    parallel: false,
    // base目录，等同于router.js的base字段
    publicPath: './',
    // 打包后静态资源目录，注意public文件下目录（别名）配置，index.html的icon路径
    assetsDir: "static",
    devServer: {
        port: port,
        open: false,
        overlay: {
            warnings: false,
            errors: true
        },
        proxy: {
            '/v1': {
                target: 'http://flashrepair.hotgz.com',
                changeOrigin: true,
                pathRewrite: {
                    ['^' + process.env.VUE_APP_BASE_API]: ''
                }
            }
        },
    },
    // 生产环境map文件
    productionSourceMap: false,

    configureWebpack: config => {

    },

    chainWebpack: config => {
        config.module
            .rule('ts')
            .use('ts-loader')
            .tap(options => {
                options = merge(options, {
                    happyPackMode: true,
                    transpileOnly: true,
                    getCustomTransformers: () => ({
                        before: [
                            tsImportPluginFactory({
                                libraryName: 'vant',
                                libraryDirectory: 'es',
                                style: false
                            })
                        ]
                    }),
                    compilerOptions: {
                        module: 'es2015'
                    }
                })
                return options
            })
            // set svg-sprite-loader
        config.module
            .rule('svg')
            .exclude.add(resolve('src/assets/img'))
            .end()
        config.module
            .rule('img')
            .test(/\.svg$/)
            .include.add(resolve('src/assets/img'))
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]'
            })
            .end()
    }
}