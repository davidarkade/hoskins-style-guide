const { CheckerPlugin } = require('awesome-typescript-loader');
const HtmlWebPackPlugin = require("html-webpack-plugin");

const ExtractTextPlugin = require('extract-text-webpack-plugin')
const extractSass = new ExtractTextPlugin({ filename: './styles/styles.bundle.css' })

module.exports = {

  entry: "./src/index.tsx",

  output: {
    filename: "bundle.js",
    path: __dirname + "/dist",
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json"]
  },

  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
        options: {
          useCache: true
        }
      },

      {
        test: /\.(scss|css)$/,
        use: [
           require.resolve('style-loader'),
           {
             loader: require.resolve('css-loader'),
             options: {
               modules: true,
               localIdentName: '[path][name]__[local]--[hash:base64:5]',
               importLoaders: 1,
             },
           },
           {
             loader: require.resolve('sass-loader'),
           },
        ]
      },

      {
        test: /\.(woff(2)?|ttf|eot|otf)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: './fonts/'
          }
        }]
      },

      {
        test: /\.(png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              name: '[name].[ext]',
              outputPath: './images/',
              bypassOnDebug: true,
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: '65-90',
                speed: 4
              },
              webp: {
                quality: 75
              }
            },
          },
        ],
      }

    ]
  },

  devServer: {
    publicPath: "/",
    contentBase: "./dist",
    hot: true
  },

  plugins: [
    new CheckerPlugin(),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    extractSass
  ]
};