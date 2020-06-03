{/*const path = require('path');
const webpack = require('webpack');
module.exports = {
    name: 'react-app',
    mode: 'development',
    devtool: 'eval',
    resolve:{
        extensions: ['.js','jsx']
    },
    entry: {
        app: './App.js',
    },
    module: {
        rules: [{
            test: /\.jsx?/,
            loader: 'babel-loader',
            options:{
                presets: [
                    ['@babel/preset-env',{
                    targets:{
                        browsers: ['> 5% in KR']
                    },
                    debug: true,
                }], '@babel/preset-react'],
                plugins: [
                    '@babel/plugin-proposal-class-properties',
                    'react-hot-loader/babel'
                ],
            }
        },
        {
            test : /\.(css)$/,
            use:['style-loader','css-loader']
        }
    ]
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({debug: true}),
    ],
    output: {
        path: path.join(__dirname,'./public'),
        filename: 'app.js',
        publicPath: '/public/',

    }
} */}
const path = require('path');
const createExpoWebpackConfigAsync = require("@expo/webpack-config");
const paths = require("@expo/config/paths");

function resolvePath(sourcePath, currentFile, otherparams) {
  // add logic to resolve your source path to a new file
  // https://github.com/tleunen/babel-plugin-module-resolver

  // this can be used to solve different kind of problems
  // 1 - the specific library do not have an implementation for web, so you need to mock the file
  // 2 - the specific import is relative and you need to solve using the path API from nodeJS

  // undefined will not change the source path
  return undefined;
}

// Expo CLI will await this method so you can optionally return a promise.
module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);

  console.log(config);

  // Maybe you want to turn off compression in dev mode.
  if (config.mode === "development") {
    config.devServer.compress = false;
  }

  // Or prevent minimizing the bundle when you build.
  if (config.mode === "production") {
    config.optimization.minimize = false;
  }
  config.watch=true

  config.output = {
    path: path.join(__dirname,'./android/public'),
    filename: 'app.js',
  }
  config.module = {
    rules: [
    {
      test: /\.js$|mjs$|jsx$|ts$|tsx/,
      include: paths.getPossibleProjectRoot(),
      loader: require.resolve("babel-loader"),
      options: {
        plugins: [
          [
            "module-resolver",
            {
              root: ["./src"],
              resolvePath(sourcePath, currentFile, ...otherparams /* opts */) {
                return resolvePath(sourcePath, currentFile, otherparams);
              },
              loglevel: "verbose",
            },
          ],
        ],
      },
    },{
        test: /\.ttf$|eot$|svg$|gif$|png$(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        include: paths.getPossibleProjectRoot(),
        loader: require.resolve("file-loader"),  
    },
  ]
};

  // Finally return the new config for the CLI to use.
  return config;
};