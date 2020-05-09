const path = require("path");
const nodeExternals = require("webpack-node-externals");
const webpack = require("webpack");
const loaders = require("./loaders");
const plugins = require("./plugins");
const fs = require("fs");

const entry = Object.assign(
  {
    server: "./entry/server.ts",
  }
  // scriptEntry
);
console.log(entry);

module.exports = {
  entry: entry,
  // Never minify the server
  mode: "development",
  target: "node",

  //devtool: "source-map",
  devtool: "inline-source-map",
  optimization: {
    // Don't turn process.env.NODE_ENV into a compile-time constant
    nodeEnv: false,
  },
  context: `${__dirname}/../`,

  target: "node",
  node: {
    __dirname: false,
  },
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name].js",
    devtoolModuleFilenameTemplate: "[absolute-resource-path]",
    libraryTarget: "commonjs2",
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    modules: [path.resolve(__dirname, "../modules"), "node_modules"],
  },

  externals: [
    nodeExternals({
      whitelist: [/^lodash-es/],
    }),
  ],
  module: {
    rules: [
      // loaders.prettier,
      // loaders.eslint,
      loaders.serverSideTypeScript,
      loaders.serverSideSass,
      loaders.serverSideCss,
      loaders.graphql,
    ].concat(loaders.allImagesAndFontsArray),
  },

  // https://github.com/TypeStrong/ts-loader#transpileonly-boolean-defaultfalseO
  stats: {
    warningsFilter: /export .* was not found in/,
  },

  target: "node",

  plugins: [
    ...plugins.default,
    ...plugins.server
  ],
};
