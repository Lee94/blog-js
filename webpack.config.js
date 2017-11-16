module.exports = {
  entry: './src/client/index.tsx',
  output: {
      filename: 'bundle.js',
  },
  devtool: 'source-map',
  resolve: {
      extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },
  module: {
      loaders: [
          { test: /\.tsx?$/, loader: 'ts-loader' }
      ]
  }
};