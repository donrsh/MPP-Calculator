var autoprefixer = require('autoprefixer');

module.exports = {
  entry: './index.jsx',
  output: {
    path: 'build',
    filename: 'bundle.js'
    // [name] 會依據上面 entry 的屬性名稱變動
  },
  module: {
    loaders: [
   	  { test: /\.jsx?$/, exclude: /(node_modules|bower_components)/, loader: 'babel', query: {presets: ['react', 'es2015', 'stage-2']} },
      { test: /\.css$/, loader: 'style-loader!css-loader!postcss-loader' },
      { test: /\.(scss|sass)$/,loader: 'style-loader!css-loader!postcss-loader!sass-loader' },
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'} 
    ],
    postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ]
  }
};