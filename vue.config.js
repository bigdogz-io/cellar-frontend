module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://cellar:4000',
        changeOrigin: true,
        xfwd: true,
        pathRewrite: {
          '^/api': '',
        },
      },
    },
    disableHostCheck: true,
  },
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false,
    },
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: '@import "~@/assets/styles/variables.scss";',
      },
    },
  },
};
