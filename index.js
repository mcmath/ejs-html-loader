'use strict';

var parseQuery = require('loader-utils').parseQuery;
var compile = require('ejs').compile;

function ejsHtmlLoader(source) {
  var data = this.options.ejsHtml ||
    this.options.ejsHtmlLoader ||
    parseQuery(this.query);

  this.cacheable();

  var template;

  try {
    template = compile(source, {
      filename: this.resourcePath,
      delimiter: data.delimiter,
      context: data.context
    });
  } catch (e) {
    throwError(e.message);
  }

  template.dependencies.forEach(function(dep) {
    this.addDependency(dep);
  },this);

  try {
    return template(data);
  } catch (e) {
    throwError(e.message);
  }
}

function throwError(message) {
  var err = new Error('ejs-html-loader\n' + message);
  Error.captureStackTrace(err, ejsHtmlLoader);
  throw err;
}

module.exports = ejsHtmlLoader;
