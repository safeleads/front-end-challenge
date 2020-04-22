const path = require('path');
const resolveSrc = _path => path.join(__dirname, _path);

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '~': resolveSrc('src')
      }
    }
  },
  css: {
    sourceMap: process.env.NODE_ENV !== 'production',
    loaderOptions: {
      scss: {
        prependData: `
            @import "~/assets/sass/_helpers.scss";
            @import "~/assets/sass/_variables.scss";`
      }
    }
  }
};
