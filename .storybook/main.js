const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  stories: ['../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  // webpackFinal: async (config, { configType }) => {
  //   // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  //   // You can change the configuration based on that.
  //   // 'PRODUCTION' is used when building the static version of storybook.
  //   // Check docs here: https://storybook.js.org/docs/react/configure/webpack#extending-storybooks-webpack-config

  //   config.plugins.push(
  //     new MiniCssExtractPlugin({
  //       filename: 'styles.css',
  //     })
  //   );

  //   // Add Linaria loader after babel-loader
  //   config.module.rules.splice(1, 0, {
  //     test: /\.tsx?$/,
  //     exclude: /node_modules/,
  //     use: [
  //       {
  //         loader: require.resolve('@linaria/webpack-loader'),
  //         options: {
  //           sourceMap: true,
  //           babelOptions: {
  //             presets: [
  //               require.resolve('@babel/preset-env'),
  //               require.resolve('@babel/preset-typescript'),
  //               require.resolve('@linaria/babel-preset'),
  //             ],
  //           },
  //         },
  //       },
  //     ],
  //   });
  //   // Replace CSS loader
  //   const cssKey = config.module.rules.findIndex(
  //     (x) => x.test.toString() === '/\\.css$/'
  //   );
  //   config.module.rules[cssKey] = {
  //     test: /\.css$/,
  //     use: [
  //       {
  //         loader: MiniCssExtractPlugin.loader,
  //       },
  //       {
  //         loader: 'css-loader',
  //         options: {
  //           sourceMap: true,
  //         },
  //       },
  //     ],
  //   };
  //   return config;
  // },
  webpackFinal: (config) => {
    // config.module.rules[0].use.push({
    //   loader: '@linaria/webpack-loader',
    //   options: {
    //     sourceMap: process.env.NODE_ENV !== 'production',
    //   },
    // });
    config.module.rules.splice(1, 0, {
      test: /\.tsx?$/,
      exclude: /node_modules/,
      use: [
        {
          loader: '@linaria/webpack-loader',
          options: {
            sourceMap: process.env.NODE_ENV !== 'production',
          },
        },
      ],
    });
    return config;
  },
  docs: {
    autodocs: true,
  },
};
