module.exports = function(grunt) {
  // Include all dependencies from package.json
  require('load-grunt-tasks')(grunt);

  // Package-specific configs
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    // LESS / CSS
    autoprefixer: {
      basic: {
        expand: true,
        cwd: 'css/',
        src: '*.css',
        dest: 'css/'
      }
    },

    cssmin: {
      basic: {
        expand: true,
        cwd: 'css/',
        src: ['*.css', '!*.min.css'],
        dest: 'css/',
        ext: '.min.css'
      }
    },

    less: {
      basic: {
        expand: true,
        cwd: 'less/',
        src: ['**/*.less', '!**/_*.less'],
        dest: 'css/',
        ext: '.css'
      }
    },

    // JS
    includereplace: {
      options: {
        prefix: '// @@'
      },
      basic: {
        files: {
          'js/default.js': ['js/default.dist.js']
        }
      }
    },
    uglify: {
      basic: {
        files: {
          'js/default.min.js': ['js/default.js']
        }
      }
    },

    // watching
    watch: {
      less: {
        files: ['less/*.less'],
        tasks: ['less:basic', 'newer:autoprefixer:basic', 'cssmin:basic']
      },

      js: {
        files: ['js/*.dist.js', 'js/_*.js'],
        tasks: ['newer:includereplace:basic', 'newer:uglify:basic']
      },

      livereload: {
        files: [
          '*.php',
          '*.html',
          'css/*.min.css',
          'js/**/*.min.js'
        ],
        options: {
          livereload: true
        }
      }
    }

  });

  // Default tasks
  grunt.registerTask('default', ['build', 'watch']);

  grunt.registerTask('build', ['less:basic', 'newer:autoprefixer:basic', 'cssmin:basic', 'includereplace:basic', 'uglify:basic']);
};