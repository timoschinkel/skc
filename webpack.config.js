const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
      strava: './src/content_scripts/strava.js'
  },
  output: {
    filename: 'content_scripts/[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'production',
  optimization: {
    minimize: false
  },
  plugins: [
    new CopyWebpackPlugin({
        patterns: [
            { from: 'src/manifest.json' }
        ]
    })
  ]
};