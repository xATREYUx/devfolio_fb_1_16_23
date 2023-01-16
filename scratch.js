{
    "firestore": {
      "rules": "firestore.rules",
      "indexes": "firestore.indexes.json"
    },
    "hosting": {
      "public": "public",
      "target": "devfolio-front",
      "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
      "rewrites": [
        {
          "source": "**",
          "destination": "/index.html"
        }
      ]
    },
    "storage": {
      "rules": "storage.rules"
    },
    "emulators": {
      "auth": {
        "port": 9099
      },
      "firestore": {
        "port": 5002
      },
  
      "storage": {
        "port": 5004
      },
      "ui": {
        "enabled": true,
        "port": 4000
      },
      "singleProjectMode": true
    }
  }
  

  {
    "projects": {
      "default": "folio-9-26-21"
    },
    "targets": {
      "devfolio-front": {
        "hosting": {
          "devfolio-front": [
            "folio_v_12-29-22"
          ]
        }
      },
      "folio-9-26-21": {
        "hosting": {
          "devfolio-front": [
            "folio_v_12-29-22"
          ]
        }
      }
    },
    "etags": {}
  }






  const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development", // required in Webpack 5
  entry: "./src/index.js",
  stats: {
    // replaces the performance option in Webpack 5
    hints: false, // hides yellow size performance warnings
  },
  optimization: {
    runtimeChunk: "single",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    chunkFilename: "[id].js",
    publicPath: "/",
  },
  devServer: {
    historyApiFallback: true,
  },
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[name]__[local]___[hash:base64:5]",
              },
              sourceMap: process.env.NODE_ENV === "development" ? true : false,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [["autoprefixer", {}]],
              },
            },
          },
        ],
      },
      {
        test: /.(png|jp(e*)g|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "images/[hash]-[name].[ext]",
            },
          },
        ],
      },
      {
        test: /.svg$/,
        use: ["svg-inline-loader"],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + "/public/index.html",
      filename: "index.html",
      inject: "body",
    }),
  ],
};
