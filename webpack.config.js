const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

// if you go into the build-utils for webpack.client, you will see that what is returned from export
// is a function and therefore, we call that function that returns an object that webpack can use
// we pass along the side parameter because that's just good functional manners :)
const sideConfig = ({ side, mode }) =>
  require(`./build-utils/webpack.${side}`)(mode);

// webpack can take an object in module exports or a function
// the function option allows us to pass in parameters
// Here we are passing in the params of side and mode to determine our build process

// webpack merge does a deep merge specifically for webpack configs
module.exports = ({ mode, side } = { mode: 'development', side: 'client' }) =>
  webpackMerge(
    {
      mode,
      module: {
        rules: [
          // An object pulled from hot module reload
          // for react projects using typescript
          // didn't veer from their definition
          {
            test: /\.(j|t)sx?$/,
            exclude: '/node_modules/',
            use: {
              loader: 'babel-loader',
              options: {
                cacheDirectory: true,
                babelrc: false,
                presets: [
                  [
                    '@babel/preset-env',
                    { targets: { browsers: 'last 2 versions' } } // or whatever your project requires
                  ],
                  '@babel/preset-typescript',
                  '@babel/preset-react'
                ],
                plugins: [
                  '@babel/proposal-class-properties',
                  '@babel/proposal-object-rest-spread',
                  'react-hot-loader/babel'
                ]
              }
            }
          }
        ]
      },
      plugins: [new ForkTsCheckerWebpackPlugin(), new webpack.ProgressPlugin()]
    },
    // returns an object
    sideConfig({ side, mode })
  );
