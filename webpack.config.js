const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';

const config = {
  entry: path.resolve(__dirname, 'src/index.tsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle-[hash].js',
    chunkFilename: '[name].[hash].js',
    publicPath: '/',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      template: './public/index.html',
      minify: {
        collapseWhitespace: !isDev,
      },
    }),
  ],

  devtool: isDev ? 'source-map' : '',
  devServer: {
    hot: isDev,
    contentBase: './dist',
    historyApiFallback: true,
  },
  module: {
    rules: [
      { enforce: 'pre', test: /\.ts$/, exclude: /node_modules/, loader: 'eslint-loader' },
      { test: /\.tsx?$/, loader: 'ts-loader' },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpg|png|webp|jpeg)$/,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              disable: true,
              webp: {
                enabled: true,
              },
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        loader: 'svg-react-loader',
      },
      ...[
        /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      ].map(font => ({
        test: font,
        include: [/fonts/],
        loader: 'file-loader',
      })),
    ],
  },
  resolve: {
    extensions: ['.wasm', '.mjs', '.js', '.jsx', '.ts', '.tsx', '.json'],
    plugins: [new TsconfigPathsPlugin({ configFile: './tsconfig.json' })],
  },
};

if (!isDev) {
  config.optimization = {
    minimize: true,
    minimizer: [new TerserPlugin()],
  };
}

module.exports = config;
