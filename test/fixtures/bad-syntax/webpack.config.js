'use strict';

var configure = require('../configure.js');

module.exports = configure(__dirname, {
  error: /ejs-html-loader.+EJS render error/,
  options: {
    heading: 'Some heading'
  }
});
