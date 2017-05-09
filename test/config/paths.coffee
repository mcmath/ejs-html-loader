path = require 'path'
pathMap = require 'relative-path-map'

module.exports = pathMap(
    root: path.resolve __dirname, '../..'
    src: '[root]/src/index.js'
    test: '[root]/test'
    fixt: '[test]/fixtures'
    out: '[test]/.tmp'
    outFile: '[out]/index.html'
)
