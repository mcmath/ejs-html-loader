chai = require 'chai'
rimraf = require 'rimraf'
ejsHtmlLoader = require '../src'
paths = require './config/paths'
compile = require './helpers/compile'
error = require './helpers/error'

before ->
    chai.should()

describe 'ejs-html-loader', ->

    afterEach (done) ->
        rimraf paths.out, done

    it 'exports a function', ->
        ejsHtmlLoader.should.be.a 'function'

    context 'options passed as ejsHtml property', ->

        it 'renders template', ->
            compile /tuvalu/,
                entry: 'simple.js'
                ejsHtml:
                    heading: 'tuvalu'

    context 'options passed as query string', ->

        it 'renders template', ->
            compile /togo/,
                entry: 'simple.js'
                query: 'heading=togo'

    context 'options passed through resource query', ->

        it 'renders template', ->
            compile /abcxyz123/,
                entry: 'resource-query.js'
                ejsHtml:
                    two: '987'
                    three: '123'

    context 'with include statement', ->

        it 'includes partial', ->
            compile /trinidad[\s\S]*tobago/,
                entry: 'include.js'
                ejsHtml:
                    one: 'trinidad'
                    two: 'tobago'

    context 'option: delimiter', ->

        it 'sets EJS delimiter option', ->
            compile /tajikistan/,
                entry: 'delimiter.js'
                ejsHtml:
                    heading: 'tajikistan'
                    delimiter: '?'

    context 'option: context', ->

        it 'sets EJS context option', ->
            compile /tibet/,
                entry: 'context.js'
                ejsHtml:
                    context:
                        heading: 'tibet'

    context 'error: undelcared locals', ->

        it 'emits error', ->
            error /ejs-html-loader/,
                entry: 'bad-locals.js'
                ejsHtml:
                    heading: 'tunisia'

    context 'error: invalaid syntax', ->

        it 'emits error', ->
            error /ejs-html-loader/,
                entry: 'bad-syntax.js'
                ejsHtml:
                    heading: 'turkey'
