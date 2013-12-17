/*
 * grunt-webshot
 * https://github.com/Bartvds/grunt-webshot
 *
 * Copyright (c) 2013 Bart van der Schoor
 * Licensed under the MIT license.
 */

module.exports = function (grunt) {
	'use strict';

	grunt.registerMultiTask('webshot', 'Render screenshots of websites', function() {
		var options = this.options({
			site: null,
			savePath: null
		});
		var done = this.async();

		// late init webshot
		var webshot = require('webshot');

		if (!options.site) {
			grunt.fail.warn('undefined site');
			done(false);
		}
		if (!options.savePath) {
			grunt.fail.warn('undefined savePath');
			done(false);
		}

		// copy own options
		var site = options.site;
		var savePath = options.savePath;

		// clean from webshot's options
		delete options.site;
		delete options.savePath;

		// lets go
		webshot(site, savePath, options, function(err) {
			if (err) {
				grunt.log.writeln('webshot error:');
				grunt.fail.warn(err);
				done(false);
			}
			done(true);
		});
	});
};
