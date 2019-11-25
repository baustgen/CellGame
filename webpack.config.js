module.exports = {
    entry: "./src/cells.js",
    output: {
        filename: "./bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    query: {
                        presets: ['@babel/preset-env']
                    }
                },
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js']
    },
    devtool: 'source-map',
};
