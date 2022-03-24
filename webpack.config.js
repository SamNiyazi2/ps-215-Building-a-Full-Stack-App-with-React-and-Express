

const path = require( "path" );

module.exports = {

    devtool: "source-map",
    mode: "development",
    entry: {

        // app: path.resolve(__dirname, 'src', 'app') 
        app: './src/app'

    },

    output: {
        path: path.resolve( __dirname, 'dist' ),
        filename: '[name]-bundle.js',
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
        host: "p3090.nonbs.org",
        inline: false // To enable browser refresh

    },
    module: {
        rules: [
            {
                test: /\.jsx?/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: 'css-loader'
            }
        ]
    },

    watchOptions: {
        ignored: /node_modules/
    }

}
