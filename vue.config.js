const path = require("path");
module.exports = {
  publicPath: '/site/',
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: [path.resolve(__dirname, "./styles/main.scss")]
    }
  }
}
