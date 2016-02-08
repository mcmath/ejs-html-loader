'use strict';

var configure = require('../configure.js');


module.exports = configure(__dirname, {
  match: /This is a simple example/,
  options: {
    heading: 'This is a simple example'
  }
});
