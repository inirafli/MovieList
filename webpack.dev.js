const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const ESLintWebpackPlugin = require('eslint-webpack-plugin')

module.exports = merge(common, {
    mode: 'development',
    devServer: {
        port: 8081,
        open: true,
        client: {
            overlay: {
                errors: true,
                warnings: true,
            },
        },
        compress: true,
    },
    plugins: [
        new ESLintWebpackPlugin()
    ]
})