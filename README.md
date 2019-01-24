# ejs-html-loader

[![Version][version-badge]][npm]
[![Build][build-badge]][travis]
[![Coverage][coverage-badge]][coveralls]

[Webpack][webpack] loader for rendering plain HTML from [EJS][ejs]
template files

## Install

Install with [npm][npm]. Ensure [EJS][ejs] and [Webpack][webpack] are installed
as well, as these are peer dependencies.

```sh
npm install --save-dev webpack ejs ejs-html-loader
```

## Usage

In your Webpack [configuration][webpack-configuration], pass data to your
templates through either an `'options'` object or as query parameters.

```js
module.exports = {
  // ...
  module: {
    rules: [{
      test: /\.ejs$/,
      loader: 'ejs-html-loader',
      options: {
        title: 'The Ant: An Introduction',
        season: 1,
        episode: 9,
        production: process.env.ENV === 'production'
      }
    }]
  }
};
```

Data may also be passed through a resource query. These data take precedence
over any options with the same name.

```js
import "./index.ejs?page=home";
```

## Options

All properties passed as loader options will be available to your
templates as local variables. In addition, the following [EJS][ejs]
options may be set:

* **context** : `object`<br>
The value of `this` in your templates. If specified, its properties will be
available in your templates, e.g. `<%= this.somePropery %>`.

* **delimiter** : `string='%'`<br>
Character used inside of angle brackets marking opening/closing tags.
Defaults to `'%'`, as in `<%= some.variable %>`.

For example:

```js
{
  // ...
  options: {
    delimiter: '$',
    title: 'The Naked Ant',
    season: 1,
    episode: 12
  }
}
```

## Includes

The EJS `filename` option is set automatically, so you may include partials
relative to your template files. If you want your included files to
automatically recompile in watch mode, be sure to use the following syntax:

```
<% include some/file %>
```

## License

Copyright &copy; 2016&ndash;2019 Akim McMath. Licensed under the [MIT License][license].

[version-badge]: https://img.shields.io/npm/v/ejs-html-loader.svg?style=flat-square
[build-badge]: https://img.shields.io/travis/mcmath/ejs-html-loader/master.svg?style=flat-square
[coverage-badge]: https://img.shields.io/coveralls/mcmath/ejs-html-loader/master.svg?style=flat-square&service=github
[dependencies-badge]: https://img.shields.io/gemnasium/mcmath/ejs-html-loader.svg?style=flat-square

[npm]: https://www.npmjs.com/package/ejs-html-loader
[license]: LICENSE
[travis]: https://travis-ci.org/mcmath/ejs-html-loader
[coveralls]: https://coveralls.io/github/mcmath/ejs-html-loader?branch=master
[gemnasium]: https://gemnasium.com/mcmath/ejs-html-loader
[webpack]: https://webpack.js.org/
[webpack-configuration]: https://webpack.js.org/configuration/
[ejs]: http://ejs.co/
