const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer'); // Import the plugin

const LIB_BASE_CONFIG = {
  entry: './src/convai_client.ts',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
};

module.exports = [
  {
    name: 'lib-commonjs',
    ...LIB_BASE_CONFIG,
    target: 'node',
    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            compress: {
              drop_console: true,
            },
          },
        }),
      ],
    },
    output: {
      path: path.resolve(__dirname, 'dist/cjs'),
      filename: `convai-web-client.js`,
      libraryTarget: 'commonjs',
      globalObject: 'this',
    },
    plugins: [
      new BundleAnalyzerPlugin({ analyzerPort: 3001 }), // Add the plugin here
    ],
  },
  {
    name: 'lib-umd',
    ...LIB_BASE_CONFIG,
    target: 'web',
    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            compress: {
              drop_console: true,
            },
          },
        }),
      ],
    },
    output: {
      path: path.resolve(__dirname, 'dist/umd'),
      filename: `convai-web-client.umd.js`,
      library: 'convai-web-core',
      libraryTarget: 'umd',
      globalObject: 'this',
    },
    plugins: [
      new BundleAnalyzerPlugin({ analyzerPort: 8889 }), // Add the plugin here
    ],
  },
];
