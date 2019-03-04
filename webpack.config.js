const path = require('path');
//const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env) => {
  const isProduction = env === 'production';
  //const CSSExtract = new ExtractTextPlugin('styles.css');

  return {
    entry: './src/app.js',
    //entry: './src/play/redux-expensify.js',
    //entry: './src/play/hoc.js',
    output: {
      path: path.resolve(__dirname, 'public'),
      filename: 'bundle.js'
    },
    mode: 'none',
    module: {
      rules: [{
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }, {
        test: /\.s?css$/,
        // use: CSSExtract.extract({
        //   use: [
        //     'css-loader',
        //     'sass-loader'
        //   ]
        // })
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }]
    },
    // plugins: [
    //   CSSExtract
    // ],
    devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',
    devServer: {
      contentBase: path.resolve(__dirname, 'public'),
      historyApiFallback: true
    }
  }
};