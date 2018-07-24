import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';

function recursiveIssuer(m) {
    if (m.issuer) {
        return recursiveIssuer(m.issuer);
    } else if (m.name) {
        return m.name;
    } else {
        return false;
    }
}

export default {
    target: 'web',
    entry: {
        app: path.resolve(__dirname, 'app/index')
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'production',
    module: {
        rules: [
            { test: /\.css$/, use: [ MiniCssExtractPlugin.loader, 'css-loader'] },
            { test: /\.(js|jsx)$/, use: 'babel-loader'}
        ]
    },
    plugins: [
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
                appStyles: {
                    name: 'app',
                    test: (m,c,entry = 'app') => m.constructor.name === 'CssModule' && recursiveIssuer(m) === entry,
                    chunks: 'all',
                    enforce: true
                }
            }
        },
        minimizer: [
            new UglifyJsPlugin( {
                cache: true,
                parallel: true,
                sourceMap: true
            }), 
            new OptimizeCSSAssetsPlugin({})
        ]
    }
};