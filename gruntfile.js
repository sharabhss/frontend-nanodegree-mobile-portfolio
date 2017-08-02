'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          sizes: [{
            width: 320,
            name: 'small'
          }, {
            width: 640,
            name: 'medium'
          }, {
            width: 800,
            name: 'large'
          }]
        },
        files: [{
          expand: true,
          src: ['*.{jpg,gif,png}'],
          cwd: 'views/images',
          dest: 'views/images/new-images'
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-responsive-images');

  grunt.registerTask('default', ['responsive_images']);
};