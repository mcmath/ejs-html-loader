'use strict';


module.exports = {
  badSyntax: require('./bad-syntax/webpack.config'),
  context: require('./context/webpack.config'),
  delimiter: require('./delimiter/webpack.config'),
  queryString: require('./query-string/webpack.config'),
  simple: require('./simple/webpack.config'),
  withInclude: require('./with-include/webpack.config')
};
