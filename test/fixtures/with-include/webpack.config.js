'use strict';

var configure = require('../configure.js');


module.exports = configure(__dirname, {
  match: /This text is included/,
  options: {
    subheading: 'This text is included'
  }
});
