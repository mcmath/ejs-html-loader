'use strict';

var isString = require('lodash.isstring');
var parseQuery = require('loader-utils').parseQuery;
var render = require('ejs').render;
var cyan = require('chalk').cyan;



module.exports = function ejsHtmlLoader(source) {
  var data = this.options.ejsHtml || parseQuery(this.query);

  this.cacheable();

  try {
    return render(source, data, {
      filename: this.resourcePath,
      delimiter: data.delimiter,
      context: data.context
    });
  } catch(e) {
    throw new Error(renderError(e));
  }
};


function renderError(e) {
  return cyan('\nejs-html-loader: ') + 'EJS render error:\n' + e.message;
}
