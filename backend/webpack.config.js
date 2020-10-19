const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const config = {
  target: 'node',
  entry: './src/server.ts',
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'public',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  stats: {
    warningsFilter: [/critical dependency:/i, /module not found:/i],
  },
  module: {
    rules: [
      {
        test: /\.(ts)$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|svg|jpeg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[contenthash].[ext]',
              outputPath: 'assets',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [{ from: 'src/public', to: 'public' }],
    }),
  ],
};
module.exports = config;
