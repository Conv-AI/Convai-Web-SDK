const path = require('path');

const LIB_BASE_CONFIG = {
  entry: './src/index.ts',
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

const DIST_DIR = path.resolve(__dirname, 'dist');

module.exports = [
  {
    name: 'lib-commonjs',
    ...LIB_BASE_CONFIG,
    target: 'node', // Set the target to 'node' for CommonJS output
    output: {
      path: DIST_DIR,
      filename: `convai-web-client.common.js`, // Adjusted filename for CommonJS
      libraryTarget: 'commonjs',
      globalObject: 'this',
    },
  },
  {
    name: 'lib-umd',
    ...LIB_BASE_CONFIG,
    target: 'web',
    output: {
      path: DIST_DIR,
      filename: `convai-web-client.umd.js`,
      library: 'ConvaiWebClient', // Adjusted library name for UMD
      libraryTarget: 'umd',
      globalObject: 'this',
    },
  },
];
