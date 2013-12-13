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
			// example
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
			}
		}
	});

	grunt.registerTask('prep', ['clean', 'jshint']);
	grunt.registerTask('build', ['prep']);

	grunt.registerTask('pass', ['webshot:repo']);

	grunt.registerTask('test', ['build', 'pass']);
	grunt.registerTask('default', ['test']);
};
