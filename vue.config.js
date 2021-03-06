const path = require('path')

const resolve = dir => {
  return path.join(__dirname, dir)
}
module.exports = {
  publicPath: '/admin-cli',
  lintOnSave: true,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_c', resolve('src/components'))
  },
  productionSourceMap: false
}