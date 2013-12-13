# grunt-webshot

> Grunt [plugin](http://gruntjs.com/) to run [webshot](https://github.com/brenden/node-webshot/) and take screenshots of websites and local html.

[![Build Status](https://secure.travis-ci.org/Bartvds/grunt-webshot.png?branch=master)](http://travis-ci.org/Bartvds/grunt-webshot) [![Dependency Status](https://gemnasium.com/Bartvds/grunt-webshot.png)](https://gemnasium.com/Bartvds/grunt-webshot) [![NPM version](https://badge.fury.io/js/grunt-webshot.png)](http://badge.fury.io/js/grunt-webshot)

A simple (naïve) wrapper for [webshot](https://github.com/brenden/node-webshot/) that uses phantomJS to render webpages to various image formats.

For example generate preview images of your project to send to clients, link in the documentation or get creative with the browser rendering engine. Use webshot features like offsets, timers and a 'trigger' callback.

## Getting Started

This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
$ npm install grunt-webshot --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-webshot');
```

## The "webshot" task       

### Options

The `grunt-webshot` specific options are:

* Required `site` and `savePath` are passed to screenshot method.
* Additional the `siteType` option supports a new property `'file'` that will treat the behaviour of the `'site'` options as the file path to read as html. 


All other options are passed directly to the webshot screenshot command: see [the  documentation](https://github.com/brenden/node-webshot/) for supported options.

```js
grunt.initConfig({
	webshot: {
		// example
		homepage: {
				options: {
					// url, file or html
					siteType: 'url',
					site: 'https://github.com/Bartvds/grunt-webshot',
					savePath: './tmp/shot.png',
					windowSize: {
						width: 1024,
						height: 768
					},
					shotSize: {
						width: 1024,
						height: 'all'
					}
				}
			}
		}
	}
});
```

## Known problems

* Doesn't work well with large size local html (or file). I'm looking into a fix.

## History

* 0.0.1 - First release

## Contributing

Contributions are very welcome, please leave a [ticket](https://github.com/Bartvds/grunt-webshot/issues) before doing something major.

In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).
