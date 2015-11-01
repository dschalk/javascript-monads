var path= require('path');

module.exports = {
    entry: './index.jsx',
    output: {
        filename: 'bundle.js',
    },
    module: {
            loaders: [
              {
                test: /\.jsx$/,
                loader: 'babel?stage=0'
              },
              {
                test: /\.json$/,
                loader: 'json'
              },
              {
                test: /\.css$/,
                loader: 'style!css'
              }
           ]
         },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
}
