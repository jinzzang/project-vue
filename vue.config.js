const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
const path = require("path");

module.exports = {
  devServer: {
      proxy : 'http://localhost:8080'
  },
    indexPath:'../../templates/vue/index.html',
    publicPath: '/vue',
    outputDir: path.resolve(__dirname, "../../resources/static/vue"),

  css:{
    sourceMap: true,
    loaderOptions: {
      scss: {
        additionalData: `
        @import "~@/assets/style/_mixins.scss";
        @import "~@/assets/style/_variables.scss";
        @import "~@/assets/style/_mediaQueries.scss";
        @import "~@/assets/style/_svg.scss";
        @import "~@/assets/style/_common.scss";
        `
      }
    }
  }
}