'use strict';

var expect = require('chai').expect;
var readFile = require('fs').readFile;
var webpack = require('webpack');
var fixtures = require('./fixtures');
var paths = require('./config/paths');
var rimraf = require('rimraf');

describe('loader:ejs-html-loader', function() {

  afterEach('remove output directory', function(done) {
    rimraf(paths.OUTPUT, done);
  });

  describe('usage', function() {

    describe('simple usage', function() {

      it('renders template', function(done) {
        testMatch(fixtures.simple, done);
      });
    });

    describe('partials included in template', function() {

      it('renders included partial', function(done) {
        testMatch(fixtures.withInclude, done);
      });
    });

    describe('options passed as query string', function() {

      it('renders locals from query string', function(done) {
        testMatch(fixtures.queryString, done);
      });
    });
  });

  describe('options', function() {

    describe('option:context', function() {

      it('renders templates with `this` context set', function(done) {
        testMatch(fixtures.context, done);
      });
    });

    describe('option:delimiter', function() {

      it('renders templates with custom delimiter set', function(done) {
        testMatch(fixtures.delimiter, done);
      });
    });
  });

  describe('incorrect EJS syntax', function() {
    it('emits a custom Error', function(done) {
      testError(fixtures.badSyntax, done);
    });
  });

});

function testMatch(config, done) {
  webpack(config, function(err, stats) {
    expect(err).not.to.exist;

    readFile(paths.RENDERED, 'utf8', function(err, content) {
      expect(err).not.to.exist;
      expect(content).to.match(config.match);

      done();
    });
  });
}

function testError(config, done) {
  webpack(config, function(err, stats) {
    expect(err).not.to.exist;
    expect(stats.toString()).to.match(config.error);
    done();
  });
}
