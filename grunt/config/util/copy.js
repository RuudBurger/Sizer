// Configuration for Copy task(s)
// Copies specified folders/files to specified destination
'use strict';

var taskConfig = function (grunt) {

	grunt.config.set('copy', {
		dist: {
			files: [{
				expand: true,
				cwd: '<%= yeogurt.client %>/',
				dest: '<%= yeogurt.dist %>/',
				src: [
					'styles/fonts/**/*.{woff,otf,ttf,eot,svg}',
					'images/**/*.{webp}',
					'!*.js',
					'*.{ico,png,txt}',
					'*.html'
				]
			},{
				src: '<%= yeogurt.client %>/../main.js',
				dest: '<%= yeogurt.dist %>/main.js',
			},{
				src: '<%= yeogurt.client %>/../package.json',
				dest: '<%= yeogurt.dist %>/package.json',
			}]
		}
	});

};

module.exports = taskConfig;
