const webpack = require("webpack");
const os = require("os");
const IconFontPlugin = require("icon-font-loader").Plugin;
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ProgressBarPlugin = require("progress-bar-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const HappyPack = require("happypack");
var ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const Dotenv = require("dotenv-webpack");

// per-environment plugins
const environmentPlugins = (() => {
  if (config.get("minify")) {
    return [
      new CompressionPlugin({
        algorithm: "gzip",
        test: /\.(js|html|css)$/,
        threshold: 10240,
        minRatio: 0.8,
      }),
    ];
  }

  switch (process.env.NODE_ENV) {
    case "development":
      return [
        // Hot reloading is set up in webpack-dev-server.js
      ];

    default:
      return [];
  }
})();

module.exports = {
  default: [
    
  ],
  client: [
    // clean-webpack-plugin to clean /dist/ every build
    // TODO better than EnvironmentPlugin and DefinePlugin?
    new Dotenv(),
    // TODO: compared to DefinedPlugin?
    new webpack.EnvironmentPlugin({
      NODE_ENV: process.env.NODE_ENV,
    }),
    // Define global letiables in the client to instrument behavior.
    new webpack.DefinePlugin({
      // Flag to detect non-production
      __DEV__: JSON.stringify(process.env.NODE_ENV !== "production"),
      __TEST__: "false",

      // SSR
      "process.env.BROWSER": "true",

      "process.env.SERVER_URL": JSON.stringify(process.env.SERVER_URL),

      // Allow checking of USE_FAKE_DATA in client (mainly for the big bad reset button)
      "process.env.USE_FAKE_DATA": JSON.stringify(process.env.USE_FAKE_DATA),

      // ALlow switching on NODE_ENV in client code
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),

      // Expose Google Analytics ID to client
      "process.env.TRACKING_ID": JSON.stringify(process.env.TRACKING_ID),

      "process.env.MIXPANEL_SECRET": JSON.stringify(
        process.env.MIXPANEL_SECRET
      ),

      "process.env.SENTRY": JSON.stringify(process.env.SENTRY),

      "process.env.V1_S3_DIR": JSON.stringify(process.env.V1_S3_DIR),
      "process.env.V1_S3_URL": JSON.stringify(process.env.V1_S3_URL),

      "process.env.PRISMA_API": JSON.stringify(process.env.PRISMA_API),

      "process.env.GTM": JSON.stringify(process.env.GTM),

      // "process.env.AUTH0_CLIENT_ID": JSON.stringify(
      //   process.env.AUTH0_CLIENT_ID
      // ),
      // "process.env.AUTH0_DOMAIN": JSON.stringify(process.env.AUTH0_DOMAIN),

      // "process.env.ROLLBAR_CLIENT_ACCESS_TOKEN": JSON.stringify(
      //   config.get("rollbar.clientAccessToken")
      // ),

      "process.env.IDENTITY_PROVIDER_HOST": JSON.stringify(
        process.env.IDENTITY_PROVIDER_HOST
      ),
      "process.env.CLOUDFRONT_URL": JSON.stringify(process.env.CLOUDFRONT_URL),
      "process.env.POLL_INTERVAL": JSON.stringify(process.env.POLL_INTERVAL),
      "process.env.ERROR_REFETCH_DELAY": JSON.stringify(
        process.env.ERROR_REFETCH_DELAY
      ),
    }),

    // Process index.html and insert script and stylesheet tags for us.
    new HtmlWebpackPlugin({
      template: "./entry/index.html",
      inject: "body",
    }),

    // Don't proceed in generating code if there are errors
    new webpack.NoEmitOnErrorsPlugin(),

    // Extract embedded css into a file
    // new ExtractTextPlugin(
    //   config.get("minify") ? "[name].[chunkhash].css" : "[name].css"
    // ),

    // Show a nice progress bar on the console.
    new ProgressBarPlugin({
      clear: false,
    }),

    // new webpack.debug.ProfilingPlugin({
    //   outputPath: "client-build.json"
    // }),

    // new HappyPack({
    //   id: "ts",
    //   threads: process.env.CI ? 1 : Math.max(1, os.cpus().length / 2 - 1),
    //   loaders: [
    //     {
    //       path: "ts-loader",
    //       query: { happyPackMode: true, configFile: "tsconfig.client.json" },
    //     },
    //   ],
    // }),
    // new ForkTsCheckerWebpackPlugin({
    //   // https://github.com/Realytics/fork-ts-checker-webpack-plugin#options
    //   useTypescriptIncrementalApi: true,
    // }),

    new webpack.ProvidePlugin({
      WaveSurfer: "wavesurfer.js",
    }),

    new webpack.NamedModulesPlugin(),

    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      // filename:
      //   process.env.NODE_ENV === "development"
      //     ? "[name].[chunkhash].css"
      //     : "[name].css",
      // chunkFilename:
      //   process.env.NODE_ENV === "development"
      //     ? "[name].[chunkhash].css"
      //     : "[name].css",
      filename:
        process.env.NODE_ENV === "development"
          ? "[hash].[name].css"
          : "[name].css",
      chunkFilename:
        process.env.NODE_ENV === "development"
          ? "[hash].[name].css"
          : "[name].css",
    }),

    new CopyPlugin([
      { from: "./entry/img/", to: "./img/" },
      { from: "./entry/favicon.ico", to: "./favicon.ico" },
      {
        from: "./entry/introspection-engine-darwin",
        to: "./",
      },
      {
        from: "./entry/migration-engine-darwin",
        to: "./",
      },
      { from: "./entry/query-engine-darwin", to: "./" },
      { from: "./schema.prisma", to: "./" },
      { from: "./entry/", to: "./public/" },
    ]),

    // new IconFontPlugin(),

    ...(process.env.ANALYZE
      ? [new (require("webpack-bundle-analyzer").BundleAnalyzerPlugin)()]
      : []),
  ].concat(environmentPlugins),
  server: [
    new webpack.BannerPlugin({
      banner: 'require("source-map-support").install();',
      raw: true,
      entryOnly: false,
    }),

    new webpack.DefinePlugin({
      __TEST__: "false",
      __DEV__: JSON.stringify(process.env.NODE_ENV !== "production"),
      enviornment: JSON.stringify(process.env.NODE_ENV),
      // SSR
      "process.env.BROWSER": "false",
      "process.env.PRISMA_API_LOCAL": JSON.stringify(
        process.env.PRISMA_API_LOCAL
      ),
      "process.env.PRISMA_API_PROD": JSON.stringify(
        process.env.PRISMA_API_PROD
      ),
    }),

    // new webpack.debug.ProfilingPlugin({
    //   outputPath: "server-build.json"
    // }),

    // new HappyPack({
    //   id: "ts",
    //   threads: process.env.CI ? 1 : Math.max(1, os.cpus().length / 2 - 1),
    //   loaders: [
    //     {
    //       path: "ts-loader",
    //       query: { happyPackMode: true, configFile: "tsconfig.json" },
    //     },
    //   ],
    // }),
    new ForkTsCheckerWebpackPlugin({
      // https://github.com/Realytics/fork-ts-checker-webpack-plugin#options
      useTypescriptIncrementalApi: true,
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "server.css",
      chunkFilename: "server.css",
    }),
    // new IconFontPlugin(),
  ]
}