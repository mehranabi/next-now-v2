const withCSS = require('@zeit/next-css')
module.exports = withCSS({
	target: 'serverless',
  webpack: (config, {}) => {
    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
          name: '[name].[ext]'
        }
      }
    })
    config.node = {
      fs: 'empty'
    }
    return config
  }
})
