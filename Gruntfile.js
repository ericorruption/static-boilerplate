module.exports = function(grunt) {
  // Include all dependencies from package.json
  require('load-grunt-tasks')(grunt);

  // Package-specific configs
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    // BOWER
    shell: {
      bower: {
        command: 'bower update'
      }
    },

    // SERVE
    connect: {
      dev: {
        options: {
          base: ['<%= pkg.root %>'],
          livereload: true,
          open: true
        }
      }
    },

    // LESS / CSS
    autoprefixer: {
      basic: {
        expand: true,
        cwd: '<%= pkg.root %>/css/',
        src: '*.css',
        dest: '<%= pkg.root %>/css/'
      }
    },

    cssmin: {
      basic: {
        expand: true,
        cwd: '<%= pkg.root %>/css/',
        src: ['*.css', '!*.min.css'],
        dest: '<%= pkg.root %>/css/',
        ext: '.min.css'
      }
    },

    less: {
      basic: {
        expand: true,
        cwd: '<%= pkg.root %>/less/',
        src: ['**/*.less', '!**/_*.less'],
        dest: '<%= pkg.root %>/css/',
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
          '<%= pkg.root %>/js/default.js': ['<%= pkg.root %>/js/default.dist.js']
        }
      }
    },
    uglify: {
      basic: {
        files: {
          '<%= pkg.root %>/js/default.min.js': ['<%= pkg.root %>/js/default.js']
        }
      }
    },

    // watching
    watch: {
      less: {
        files: ['<%= pkg.root %>/less/*.less'],
        tasks: ['less:basic', 'newer:autoprefixer:basic', 'cssmin:basic']
      },

      js: {
        files: ['<%= pkg.root %>/js/*.dist.js', '<%= pkg.root %>/js/_*.js'],
        tasks: ['newer:includereplace:basic', 'newer:uglify:basic']
      },

      livereload: {
        files: [
          '*.php',
          '*.html',
          '<%= pkg.root %>/css/*.min.css',
          '<%= pkg.root %>/js/**/*.min.js'
        ],
        options: {
          livereload: true
        }
      }
    }

  });

  // Default tasks
  grunt.registerTask('build', ['less:basic', 'newer:autoprefixer:basic', 'cssmin:basic', 'includereplace:basic', 'newer:uglify:basic']);
  grunt.registerTask('setup', ['shell', 'build']);
  grunt.registerTask('serve', ['connect', 'watch']);
  grunt.registerTask('default', ['setup', 'serve']);
};