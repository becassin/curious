



module.exports = function(grunt) {
  grunt.initConfig({
    sass: {                              // Task
      dist: {                            // Target
        options: {                       // Target options
          style: 'expanded'
        },
        files: {                         // Dictionary of files
          'css/style.css': 'scss/style.scss',       // 'destination': 'source'
        }
      }
    },
    uglify: {
      my_target: {
        files: {
          'js/custom.js': ['js-source/custom.js']
        }
      }
    },
    watch: {
      css: {
        files: ['scss/*.scss', 'js-source/*.js'],
        tasks: ['sass', 'uglify'],
        options: {
          // Start a live reload server on the default port 35729
          livereload: true,
        },
      }
      // dont: {
      //   files: ['other/stuff/*'],
      //   tasks: ['dostuff'],
      // },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['watch']);
};