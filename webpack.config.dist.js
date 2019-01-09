const { CheckerPlugin } = require('awesome-typescript-loader');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')

const extractSASS = new ExtractTextPlugin({
  filename: './styles/brand.bundle.css'
});

// const extractCSS = new ExtractTextPlugin({
//   filename: './styles/brand.bundle.css'
// });

module.exports = {

  entry: "./src/index.tsx",

  output: {
    filename: "bundle.js",
    path: __dirname + "/dist",
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },

  module: {
    rules: [

      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
        options: {
          useCache: true
        }
      },

      {
        test: /\.(scss|sass)$/,
        use: extractSASS.extract({
          fallback: 'style-loader',
          use: [
            'css-loader?-minimize',
            'sass-loader?sourceMap&minimize',
          ],
        })
      },

      // {
      //   test: /\.(scss|sass)$/,
      //   use: extractCSS.extract({
      //     fallback: 'style-loader',
      //     use: [
      //       'css-loader',
      //       'sass-loader',
      //     ],
      //   })
      // },

      {
        test: /\.css/,
        use: [
          require.resolve('style-loader'),
          {
            loader: require.resolve('css-loader'),
            options: {
              modules: true,
              localIdentName: '[path][name]__[local]--[hash:base64:5]',
              importLoaders: 1,
            },
          }
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
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: './images/',
            }
          },
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

        ]
      }
    ]
  },

  plugins: [
    new CheckerPlugin(),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    extractSASS,
    new CopyWebpackPlugin([ { from: 'src/BrandLibrary', to: './BrandLibrary' } ])
  ]
};