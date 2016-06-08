{resolve} = require 'path'
paths = require '../config/paths'

ejsRe = /\.ejs$/

module.exports = (opts) ->
  context: paths.fixt
  entry: resolve paths.fixt, opts.entry
  output:
    path: paths.out
    filename: 'bundle.js'
  module:
    loaders: [
      test: ejsRe
      loader: 'file?name=index.html'
    ,
      test: ejsRe
      loader: "#{paths.src}?#{opts.query || ''}"
    ]
  ejsHtml: opts.ejsHtml
