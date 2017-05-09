{resolve} = require 'path'
paths = require '../config/paths'

module.exports = (opts) ->
    context: paths.fixt
    entry: resolve paths.fixt, opts.entry
    output:
        path: paths.out
        filename: 'bundle.js'
    module:
        rules: [
            test: /\.ejs$/
            use:
                loader: 'file-loader?name=index.html'
            ,
                loader: if opts.query then "#{paths.src}?#{opts.query}" else paths.src,
                options: opts.ejsHtml
        ]
