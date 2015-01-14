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

    // Copy
    copy: {
      libs: {
        nonull: true,
        expand: true,
        flatten: true,
        src: ['bower_components/html5shiv/dist/html5shiv.min.js', 'bower_components/respond/dest/respond.min.js'],
        dest: '<%= pkg.root %>/js/libs/'
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
    csso: {
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


    // Spriting
    sprite: {
      basic: {
        'src': ['<%= pkg.root %>/img/sprite/*.png'],
        'dest': '<%= pkg.root %>/img/sprite.png',
        'destCss': '<%= pkg.root %>/less/_sprite.less',
        'imgPath': '../img/sprite.png?' + (new Date().getTime())
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
        tasks: ['sprite']
      },

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
  grunt.registerTask('javascript', ['includereplace:basic', 'newer:uglify:basic']);
  grunt.registerTask('css', ['less:basic', 'newer:autoprefixer:basic', 'csso:basic']);

  grunt.registerTask('build', ['sprite', 'css', 'javascript']);
  grunt.registerTask('setup', ['shell', 'copy:libs', 'build']);
  grunt.registerTask('serve', ['connect', 'watch']);

  grunt.registerTask('default', ['setup', 'serve']);
};