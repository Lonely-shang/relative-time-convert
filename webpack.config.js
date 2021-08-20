const path = require('path')

module.exports  = {
  mode: "production",
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: 'index.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader'
        },
        exclude: '/node_modules/'
      },
      {
        test: /\.tsx?$/,
        use: ["ts-loader"],
        exclude: [path.resolve(__dirname, "node_modules")]
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".js"]
  }
}