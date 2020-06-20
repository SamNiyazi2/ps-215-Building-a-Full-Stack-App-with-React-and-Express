

const path = require("path");

module.exports = {

    devtool: "source-map",
    mode: "development",
    entry: path.resolve(__dirname, 'src', 'app'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    resolve: {
        extensions: [
            '.js', '.jsx'
        ]
    },
    devServer: {
        historyApiFallback: true,
        port: 3090,
        inline: false // To enable browser refresh
        
    },
    module: {
        rules: [
            {
                test: /\.jsx?/,
                loader: 'babel-loader'
            }
        ]
    }

}
