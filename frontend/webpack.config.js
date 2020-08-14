const path = require("path");


module.exports = {
  entry: {
      index: "./JS/index.js",
      admin: "./JS/admin.js"
  },
  output:{
    filename:"./Build/[name]_bundle.js",
    path: path.resolve()
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options:{
          presets: ["@babel/preset-env", "@babel/preset-react"]
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};