const path = require("path");
const loaders = require("../webpack/loaders");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
var HappyPack = require("happypack");
var ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const os = require("os");
const webpack = require("webpack");

// Export a function. Accept the base config as the only param.
module.exports = ({ config, mode }) => {
  // configType has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  // Make whatever fine-grained changes you need
  config.module.rules.push(
    {
      test: /\.s?css$/,
      loaders: [
        "style-loader",
        "css-loader",
        {
          loader: "sass-loader",
          options: { includePaths: [path.resolve(__dirname, "../modules")] },
        },
      ],
      include: path.resolve(__dirname, "../"),
    },
    // loaders.mjs,
    loaders.clientSideTypeScript
    // loaders.graphql,
    // ...loaders.allImagesAndFontsArray
  );

  config.resolve.extensions.push(".ts", ".tsx");
  config.resolve.modules.unshift(path.resolve(__dirname, "../modules"));

  config.plugins.push(
    //   new HappyPack({
    //     id: "ts",
    //     threads: Math.max(1, os.cpus().length / 2 - 1),
    //     loaders: [
    //       {
    //         path: "ts-loader",
    //         query: { happyPackMode: true, configFile: "tsconfig.client.json" }
    //       }
    //     ]
    //   }),
    new ForkTsCheckerWebpackPlugin({
      // https://github.com/Realytics/fork-ts-checker-webpack-plugin#options
      useTypescriptIncrementalApi: true,
      // checkSyntacticErrors: true
    }),
    new webpack.DefinePlugin({
      // Flag to detect non-production
      __TEST__: "false",
    })
  );
  // Return the altered config
  return config;
};
