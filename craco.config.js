const CracoLessPlugin = require('craco-less')

module.exports = {
  devServer: {
    proxy: {
      '/image-api': {
        target: 'https://image.fendy5.cn/api/v1/upload',
        changeOrigin: true,
        pathRewrite: {
          '^/image-api': ''
        }
      },
      '/dev-api': {
        target: 'http://127.0.0.1:6355',
        changeOrigin: true,
        pathRewrite: {
          '^/dev-api': ''
        }
      }
    }
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#673ab6' },
            javascriptEnabled: true
          }
        }
      }
    }
  ]
}
