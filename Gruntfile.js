module.exports = function(grunt) {

    grunt.initConfig({
      jshint: {
        files: ['Gruntfile.js', 'js/script.js'],
        options: {
          globals: {
            jQuery: true
          }
        }
      },
      watch: {
        files: ['js/script.js'],
        tasks: ['jshint']
      },
      uglify: {
        my_target: {
          files: {
            'dest/output.min.js': ['src/input1.js', 'src/input2.js']
          }
        }
      }
    });
  
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
  
    grunt.registerTask('default', ['jshint', 'watch', 'uglify']);
  
  };