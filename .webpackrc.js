const path = require('path');

export default {
  entry: 'src/index.js',
  extraBabelPlugins: [
    ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }],
  ],
  env: {
    development: {
      extraBabelPlugins: ['dva-hmr'],
    },
  },
  proxy: {
    '/blog': {
      target : 'http://localhost:9999',
      pathRewrite: {'^/blog' : '/blog'},
      secure: false
    },
    '/auth': {
      target: 'http://127.0.0.1:9999',
      changeOrigin: true,
      secure: false,
      pathRewrite: {
        '^/auth': '/auth'
      }
    },
    '/admin': {
      target: 'http://127.0.0.1:9999',
      changeOrigin: true,
      pathRewrite: {
        '^/admin': '/admin'
      }
    }
  },
  alias: {
    components: path.resolve(__dirname, 'src/components/'),
  },
  ignoreMomentLocale: true,
  theme: './src/theme.js',
  html: {
    template: './src/index.ejs',
  },
  disableDynamicImport: true,
  publicPath: '/',
  hash: true,
};
