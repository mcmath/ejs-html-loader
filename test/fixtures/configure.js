'use strict';

var paths = require('../config/paths');



var ejsTest = /\.ejs$/;


function configure(dirname, opts) {

  var loaders = [
    {
      test: ejsTest,
      loader: 'file?name=index.html'
    },
    {
      test: ejsTest,
      loader: paths.LOADER + (opts.query || '')
    }
  ];

  if (opts.initialLoader) {
    loaders.push({
      test: ejsTest,
      loader: opts.initialLoader
    });
  }

  return {
    context: dirname,
    entry: './entry.js',
    output: {
      path: paths.OUTPUT,
      filename: 'bundle.js'
    },
    module: {
      loaders: loaders
    },
    match: opts.match,
    ejsHtml: opts.options,
    error: opts.error
  };
}


module.exports = configure;
