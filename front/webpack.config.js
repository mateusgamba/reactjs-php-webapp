var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    mode: 'development',
    devServer: { contentBase: path.join(__dirname, "src"), historyApiFallback: true,  hot: true },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'src/index.html'
      })
    ]
}