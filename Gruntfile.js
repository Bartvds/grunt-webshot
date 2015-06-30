/*
 * grunt-webshot
 * https://github.com/Bartvds/grunt-webshot
 *
 * Copyright (c) 2013 Bart van der Schoor
 * Licensed under the MIT license.
 */
 

module.exports = function (grunt) {
	'use strict';

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-clean');

	grunt.loadTasks('tasks');

	grunt.initConfig({
		clean: {
			media: ['./media'],
			tmp: ['./tmp'],
			test: ['./test/tmp']
		},
		jshint: {
			options: {
				jshintrc: '.jshintrc'
			},
			all: [
				'Gruntfile.js',
				'./lib/**/*.js',
				'./tasks/**/*.js'
			]
		},
		webshot: {
			repo: {
				options: {
					// url, file or html
					siteType: 'url',
					site: 'https://github.com/Bartvds/grunt-webshot/blob/master/media/repo.png',
					savePath: './media/repo.png',
					windowSize: {
						width: 1024,
						height: 400
					},
					shotSize: {
						width: 1024,
						height: 'all'
					}
				}
			},
			file: {
				options: {
					siteType: 'file',
					site: 'test/lorem.html',
					savePath: './tmp/lorem.png',
					windowSize: {
						width: 1024,
						height: 400
					},
					shotSize: {
						width: 1024,
						height: 'all'
					}
				}
			}
		}
	});

	var assert = require('assert');

	function assertFile(target) {
		assert(!!grunt.file.exists(target), 'expected file: "' + target + '" to exist');
	}

	grunt.registerTask('verify', function () {
		assertFile('./media/repo.png');
	});

	grunt.registerTask('prep', ['clean', 'jshint']);
	grunt.registerTask('build', ['prep']);

	grunt.registerTask('pass', ['webshot:repo', 'webshot:file']);

	grunt.registerTask('test', ['build', 'pass', 'verify']);
	grunt.registerTask('default', ['test']);
};
