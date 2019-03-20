const path = require('path')

module.exports = {
  resolve: {
    alias: {
      styles: path.resolve(__dirname, '../src/scss/showcase.scss')
    }
  },
  module: {
    rules: [
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'icons/'
            }
          }
        ]
      }
    ]
  }
}
