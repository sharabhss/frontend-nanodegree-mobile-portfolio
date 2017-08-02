'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          sizes: [{
            width: 320,
            name: 'small',
            quality: 50
            }, {
            width: 640,
            name: 'medium',
            quality: 50
          }, {
            width: 800,
            name: 'large',
            quality: 50
          }]
        },
        files: [{
          expand: true,
          src: ['*.{jpg,gif,png}'],
          cwd: 'img/',
          dest: 'img/new-images'
        }]
      }
    },
    cssmin: {
      options: {
        mergeIntoShorthands: false,
        roundingPrecision: -1
      },
      target: {
        files: [{
          expand: true,
          cwd: 'css/',
          src: ['*.css', '!*.min.css'],
          dest: 'css/',
          ext: '.min.css'
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['responsive_images']); // add tasks for whatever you need to do
};