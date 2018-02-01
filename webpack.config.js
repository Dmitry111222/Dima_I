module.exports = {
  entry: "./main.js",
  output: {
  filename: "build.js"
  },

  module: {
    loaders: [

       { test: /\.vue$/, loader: 'vue-loader' },
       { test: /\.js$/, loader: 'babel-loader' },
       { test: /\.png|jpg$/, loader: 'file-loader' }
    ]
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js'
    }
  }
}
