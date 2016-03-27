'use strict';

var parseQuery = require('loader-utils').parseQuery;
var compile = require('ejs').compile;
var dependencies = require('./dependencies');

module.exports = function ejsHtmlLoader(source) {
  this.cacheable();

  var options = this.options;
  var query = parseQuery(this.query);
  var data = options.ejsHtmlLoader || options.ejsHtml || query;

  var template;
  var rendered;

  try {
    template = compile(source, {
      filename: this.resourcePath,
      delimiter: data.delimiter,
      context: data.context
    });
    rendered = template(data);
  } catch (e) {
    dependencies.addFromCache(this);
    throwError(e.message);
  }

  dependencies.addAndSave(this, template.dependencies);
  return rendered;
};

function throwError(message) {
  var err = new Error('ejs-html-loader\n' + message);
  Error.captureStackTrace(err, module.exports);
  throw err;
}
