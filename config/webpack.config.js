const path = require('path');

module.exports = {
    mode: 'production',
    entry: {
        entry: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'main.min.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader'
                },
                exclude: /node_modules/
            },
            {
                test: /\.ts$/,
                use: {
                    loader: 'awesome-typescript-loader'
                },
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        
    }
}