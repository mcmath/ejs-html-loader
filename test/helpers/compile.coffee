{readFile} = require 'fs'
{expect} = require 'chai'
webpack = require 'webpack'
paths = require '../config/paths'
config = require './config'

module.exports = (match, opts) ->
    new Promise((resolve) ->
        webpack config(opts), (err) ->
            expect(err).not.to.exist

            readFile paths.outFile, 'utf8', (err, content) ->
                expect(err).not.to.exist
                expect(content).to.match match

                resolve()
    )
