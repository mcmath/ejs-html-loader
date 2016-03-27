# v1.2.2

###### March 27, 2016

#### Fixes

* Fix `Error.captureStackTrace()` to correct constructor argument.

# v1.2.1

###### March 27, 2016

#### Fixes

* Make sure included files maintain their dependencies on error by adding
  a caching mechanism.

#### Maintenance

* Divide loader into multiple files under a new `lib/` directory.

# v1.2.0

###### March 14, 2016

#### Features

* Included files are now added to the loader [dependencies][mark-dependencies],
ensuring automatic recompilation in watch mode

#### Development Features

* Update tests in light of the above changes

#### Maintenance

* Update [README][readme] with new "Includes" section

# v1.1.0

###### February 12, 2016

#### Minor Features

* Allow loader options to be set with `ejsHtmlLoader` property

#### Maintenance

* Update [README.md][readme] to reflect above change

#### Development Maintenance

* Disallow multiple line breaks
* Remove multiple line breaks from [index.js][index] and tests

# v1.0.4

###### February 10, 2016

#### Maintenance

* Minor fixes to [README.md][readme].
* Minor code style fixes in [index.js][index].

#### Development Features

* Add [CHANGELOG.md][changelog].
* Add [JSHint][jshint] as a development dependency.
* Add [JSCS][jscs] code-style support.

[changelog]: CHANGELOG.md
[index]: index.js
[readme]: README.md
[jscs]: http://jscs.info/
[jshint]: http://jshint.com/about/
[mark-dependencies]: http://webpack.github.io/docs/how-to-write-a-loader.html#mark-dependencies
