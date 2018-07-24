import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export default {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './devBuild'
    },
    entry: {
        app: path.resolve(__dirname, 'app/index')
    },
    output: {
        path: path.resolve(__dirname, 'devBuild'),
        filename: 'bundle.js'
    },
    mode: 'development',
    // watch files in development mode
    watch: true,
    module: {
        rules: [
            { test: /\.css$/, use: [ MiniCssExtractPlugin.loader, "css-loader" ] },
            { test: /\.(js|jsx)$/, use: 'babel-loader'}
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['devBuild']),
        new HtmlWebpackPlugin({template: './app/index.html'}),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css"
        })
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                styles: {
                    name: 'styles',
                    test: /\.css$/,
                    chunks: 'all',
                    enforce: true
                }
            }
        }
    }
};