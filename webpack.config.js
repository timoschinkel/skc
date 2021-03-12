const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    inject_into_strava: './src/inject_into_strava.js'
  },
  output: {
    filename: 'src/[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'production',
  optimization: {
    minimize: false
  },
  plugins: [
    new CopyWebpackPlugin({
        patterns: [
            { from: 'manifest.json' },
            { from: 'LICENSE' },
            { from: 'README.md' },
            { from: 'assets/*', to: 'assets/' }
        ]
    })
  ]
};