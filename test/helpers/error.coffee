{expect} = require 'chai'
webpack = require 'webpack'
config = require './config'

module.exports = (match, opts, done) ->
    new Promise((resolve) ->
        webpack config(opts), (err, stats) ->
            expect(err).not.to.exist
            expect(stats.toString()).to.match match

            resolve()
    )
