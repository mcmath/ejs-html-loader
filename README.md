# ejs-html-loader

[![Version][version-badge]][npm]
[![License][license-badge]][license]
[![Build][build-badge]][travis]
[![Coverage][coverage-badge]][coveralls]
[![Dependencies][dependencies-badge]][gemnasium]

[Webpack][webpack] loader for rendering plain HTML from [EJS][ejs]
template files

## Install

Install with [npm][npm]. And be sure to install [EJS][ejs] and
[Webpack][webpack], which are peer dependencies.

```sh
npm install --save-dev webpack ejs ejs-html-loader
```

## Usage

In your Webpack [configuration][webpack-configuration], options and locals can
be passed to EJS in two ways. First, through a query string or query object:

```js
module.exports = {
  // ...
  module: {
    loaders: [{
      test: /\.ejs$/,
      loader: 'ejs-html?title=The%20Big%20Gatsby&production'
    }]
  }
};
```

Or second, via an `'ejsHtml'` property:

```js
module.exports = {
  // ...
  ejsHtml: {
    title: 'For Whom the Bell Rings',
    baseUrl: '/',
    delimiter: '?'
  }
};
```

## Options

All properties passed to the loader will be available to your
templates as local variables. In addition, the following [EJS][ejs]
options may be set:

* **context** : `object`<br>
The value of `this` in your templates. If specified, its properties will be
available in your templates, e.g. `<%= this.somePropery %>`.

* **delimiter** : `string='%'`<br>
Character used inside of angle brackets marking opening/closing tags.
Defaults to `'%'`, as in `<%= some.variable %>`.

## Includes

The EJS `filename` option is set automatically, so you may include partials
relative to your template files. If you want your included files to
automatically recompile in **watch mode**, be sure to use the following syntax:

```
<% include some/file %>
```

## License

Copyright &copy; 2016 Akim McMath. Licensed under the [MIT License][license].

[version-badge]: https://img.shields.io/npm/v/ejs-html-loader.svg?style=flat-square
[license-badge]: https://img.shields.io/npm/l/ejs-html-loader.svg?style=flat-square
[build-badge]: https://img.shields.io/travis/akim-mcmath/ejs-html-loader/master.svg?style=flat-square
[coverage-badge]: https://img.shields.io/coveralls/akim-mcmath/ejs-html-loader/master.svg?style=flat-square&service=github
[dependencies-badge]: https://img.shields.io/gemnasium/akim-mcmath/ejs-html-loader.svg?style=flat-square

[npm]: https://www.npmjs.com/package/ejs-html-loader
[license]: LICENSE
[travis]: https://travis-ci.org/akim-mcmath/ejs-html-loader
[coveralls]: https://coveralls.io/github/akim-mcmath/ejs-html-loader?branch=master
[gemnasium]: https://gemnasium.com/akim-mcmath/ejs-html-loader
[webpack]: https://webpack.github.io/
[webpack-configuration]: https://webpack.github.io/docs/configuration.html
[ejs]: http://ejs.co/
