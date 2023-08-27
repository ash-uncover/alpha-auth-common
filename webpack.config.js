const path = require('path')

const DIR_DIST = path.resolve(__dirname, 'dist')
const DIR_DIST_DBG = path.resolve(__dirname, 'dist-dbg')
const DIR_SRC = path.resolve(__dirname, 'src')
const DIR_TOOLS = path.resolve(__dirname, 'tools')
const DIR_NODE_MODULES = path.resolve(__dirname, 'node_modules')

const configBase = {
  entry: path.resolve(DIR_SRC, 'index.ts'),

  devtool: 'source-map',

  resolve: {
    extensions: ['.ts'],
  },

  output: {
    clean: true,
    path: DIR_DIST,
    filename: '[name].js',
    filename: './spa-frontend-services-[name].js',
    library: 'alpha-auth-common',
    libraryTarget: 'commonjs',
  },

  module: {
    rules: [
      {
        test: /.ts$/,
        use: 'ts-loader',
        exclude: [
          DIR_NODE_MODULES,
          DIR_TOOLS,
        ],
      },
    ],
  },
}

module.exports = [
  {
    ...configBase,
    entry: {
      dbg: path.resolve(DIR_SRC, 'index.ts'),
    },
    name: 'dbg',
    mode: 'development',
    optimization: {
      minimize: false,
    },
    output: {
      ...configBase.output,
      path: DIR_DIST_DBG,
    }
  },
  {
    ...configBase,
    entry: {
      min: path.resolve(DIR_SRC, 'index.ts'),
    },
    name: 'min',
    mode: 'production',
  },
]