'use strict';

var configure = require('../configure.js');


module.exports = configure(__dirname, {
  match: /This example uses a delimiter/,
  options: {
    heading: 'This example uses a delimiter',
    delimiter: '?'
  }
});
