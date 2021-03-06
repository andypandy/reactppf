const path = require('path')
const express = require('express')
const app = express()

if (process.env.NODE_ENV !== 'production') {
  console.log('Dev mode')
  const webpack = require('webpack')
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpackHotMiddleware = require('webpack-hot-middleware')
  const config = require('./webpack.config.js')
  const compiler = webpack(config)

  app.use(webpackHotMiddleware(compiler))
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }))
}

app.use('/static', express.static('dist'));
app.get("*", function(req, res) {
  res.sendFile(__dirname + '/index.html')
})

const port = (process.env.PORT || 3000)
app.listen(port)
console.log(`Listening at http://localhost:${port}`)
