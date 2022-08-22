const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
module.exports = {
  entry: "./src/index.js", // ** Point d'entrée (fichier js principal)
  output: {
    path: path.resolve(__dirname, "dist"), // ** Chemin absolu du bundle
    filename: "bundle[contenthash].js", // ** le fichier empaqueter
    clean: true,
  },
  mode: "production",

  module: {
    rules: [
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      {
        test: /\.(scss|sass)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      { test: /\.(jpg|jpeg|png|gif)$/, use: ["file-loader"] },
      { test: /\.js$/, exclude: /node_modules/, use: ["babel-loader"] },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: "public/index.html" })],
};