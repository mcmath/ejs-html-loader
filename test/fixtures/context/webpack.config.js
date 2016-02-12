'use strict';

var configure = require('../configure.js');

module.exports = configure(__dirname, {
  match: /This example has a context/,
  options: {
    context: {
      heading: 'This example has a context'
    }
  }
});
