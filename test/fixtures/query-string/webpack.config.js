'use strict';

var configure = require('../configure.js');


module.exports = configure(__dirname, {
  match: /This example uses a query string/,
  query: '?heading=This%20example%20uses%20a%20query%20string'
});
