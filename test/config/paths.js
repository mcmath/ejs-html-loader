'use strict';

var resolve = require('path').resolve;



var ROOT = resolve(__dirname, '../..');
var TEST = resolve(ROOT, 'test');
var OUTPUT = resolve(TEST, 'output');



module.exports = {
  ROOT: ROOT,
  OUTPUT: OUTPUT,
  LOADER: resolve(ROOT, 'index.js'),
  RENDERED: resolve(OUTPUT, 'index.html')
};
