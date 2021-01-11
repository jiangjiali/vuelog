const WebpackCdnPlugin = require('webpack-cdn-plugin')

const prodConfig = {
  devtool: false,
  externals: {
    database: 'Vuelog.database'
  },
  // 警告 webpack 的性能提示
  performance: {
    hints: 'warning',
    // 入口起点的最大体积
    maxEntrypointSize: 3145728,
    // 生成文件的最大体积
    maxAssetSize: 1572864,
    // 只给出 js 文件的性能提示
    assetFilter: function (assetFilename) {
      return assetFilename.endsWith('.js')
    }
  },
  plugins: [
    new WebpackCdnPlugin({
      modules: [
        { name: 'fastclick', var: 'FastClick', path: 'lib/fastclick.js' },
        { name: 'marked', var: 'marked', path: 'marked.min.js' },
        { name: 'prismjs', var: 'Prism', path: 'prism.js' },
        { name: 'vue', var: 'Vue', path: 'dist/vue.runtime.min.js' },
        { name: 'vuex', var: 'Vuex', path: 'dist/vuex.min.js' },
        { name: 'vue-router', var: 'VueRouter', path: 'dist/vue-router.min.js' },
        { name: 'vue-meta', var: 'VueMeta', path: 'dist/vue-meta.min.js' },
        { name: 'vue-i18n', var: 'VueI18n', path: 'dist/vue-i18n.min.js' }
      ],
      prodUrl: '//cdn.jsdelivr.net/npm/:name@:version/:path',
      crossOrigin: 'anonymous'
    })
  ]
}

const devConfig = {
  devtool: 'source-map',
  externals: {
    database: 'Vuelog.database'
  }
}

module.exports = {
  configureWebpack: process.env.NODE_ENV === 'production' ? prodConfig : devConfig,
  outputDir: 'docs',
  publicPath: '.'
}
