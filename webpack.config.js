var path = require('path');

module.exports = {
    mode: "development",
    // Change to your "entry-point".
    entry: './src/main.ts',
    output: {
        path: path.resolve(__dirname, 'public/js'),
        publicPath: 'js',
        filename: 'app.bundle.js'
    },
    devtool: 'inline-source-map',
    devServer: {
      contentBase: './public/'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },
    module: {
        rules: [{
            // Include ts, tsx, js, and jsx files.
            test: /\.(ts|js)x?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        }],
    }
};