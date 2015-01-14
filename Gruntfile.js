module.exports = function(grunt) {
  // Include all dependencies from package.json
  require('load-grunt-tasks')(grunt);

  // Package-specific configs
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    // Bower
    shell: {
      bower: {
        command: 'bower update'
      }
    },


    // Serve
    connect: {
      dev: {
        options: {
          base: ['<%= pkg.root %>'],
          livereload: true,
          open: {
            target: 'http://localhost:8000'
          }
        }
      }
    },


    // LESS / CSS
    less: {
      basic: {
        expand: true,
        cwd: '<%= pkg.root %>/less/',
        src: ['**/*.less', '!**/_*.less'],
        dest: '<%= pkg.root %>/css/',
        ext: '.css'
      }
    },
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

    // Watching
    watch: {
      less: {
        files: ['<%= pkg.root %>/less/*.less'],
        tasks: ['css']
      },

      js: {
        files: ['<%= pkg.root %>/js/*.dist.js', '<%= pkg.root %>/js/_*.js'],
        tasks: ['javascript']
      },

      sprite: {
        files: ['<%= pkg.root %>/img/sprite/*'],
        tasks: ['sprite:couromoda']
      }

      livereload: {
        files: [
          '*.php',
          '*.html',
          '<%= pkg.root %>/css/*.min.css',
          '<%= pkg.root %>/js/**/*.min.js',
          '<%= pkg.root %>/img/**/*.{png,jpg,gif}',
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