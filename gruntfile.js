const sass = require('node-sass');
const themes = require('./gruntfile.themes');

module.exports = (grunt) => {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    imagemin: {
      main: {
        options: {
          optimizationLevel: 3,
          progressive: true,
          svgoPlugins: [{removeViewBox: false}],
        },
        files: [
          {
            // Set to true to enable the following options…
            expand: true,
            // cwd is 'current working directory'
            cwd: 'img/',
            src: ['**/*.{png,jpg,svg}'],
            // Could also match cwd line above. i.e. project-directory/img/
            dest: 'assets/media/compressed/',
          },
        ],
      },
    },

    babel: {
      options: {
        sourceMap: true,
        presets: ['env'],
      },
      dist: {
        files: {
          'assets/js/app.js': 'js/app.js',
        },
      },
    },

    uglify: {
      global: {
        src: ['assets/js/app.js'],
        dest: 'assets/js/build/app.min.js',
      },
    },

    sass: {
      options: {
        implementation: sass,
        outputStyle: 'compressed',
      },
      dist: {
        files: {
          'assets/css/main.css': 'sass/main.scss',
          'assets/css/grid.css': 'sass/grid.scss',
        },
      },
    },

    autoprefixer: {
      options: {
        browsers: ['> 1%'],
      },
      no_dest: {
        src: 'assets/css/*.css',
      },
    },

    copy: {
      css: {
        files: [
          {
            expand: true,
            src: ['assets/css/**'],
            dest: 'jekyllbuild/',
          },
        ],
      },
      js: {
        files: [
          {
            expand: true,
            src: ['assets/js/**'],
            dest: 'jekyllbuild/',
          },
        ],
      },
    },

    watch: {
      options: {
        livereload: true,
      },
      site: {
        files: ['{,*/}{,*/}{,*/}*.html',
          '{,*/}{,*/}{,*/}*.md',
          '**/*.yml',
          '!jekyllbuild/{,*/}{,*/}*.*',
          '!node_modules/{,*/}*.*'],
        tasks: ['exec:jekyllBuild', 'copy'],
      },
      js: {
        files: ['js/{,*/}{,*/}*.js'],
        tasks: ['newer:babel', 'copy:js'],
      },
      css: {
        files: ['sass/{,*/}{,*/}{,*/}*.scss'],
        tasks: ['sass', 'autoprefixer', 'copy:css'],
      },
      images: {
        files: ['assets/img/{,*/}{,*/}*.{png,jpg,svg}'],
        tasks: ['newer:imagemin', 'exec:jekyllBuild', 'copy'],
      },
    },

    exec: {
      jekyllServe: {
        command: 'jekyll serve  --no-watch',
      },
      jekyllBuild: {
        command: 'jekyll build',
      },
    },

    'string-replace': {
      dist: {
        files: {
          'assets/js/themes.js': 'js/themes.template.js',
        },
        options: {
          replacements: [
            {
              pattern: '{{themesCSS}}',
              replacement: themes.getThemesCSS(),
            },
          ],
        },
      },
    },

    replace: {
      dist: {
        options: {
          patterns: [
            {
              match: 'themes',
              replacement: themes.getThemes(),
            },
          ],
        },
        files: {
          'assets/js/themes.js': 'assets/js/themes.js',
        },
      },
    },
  });

  // eslint-disable-next-line global-require
  require('load-grunt-tasks')(grunt);

  grunt.registerTask('default', [
    'newer:imagemin',
    'string-replace',
    'replace',
    'sass',
    'autoprefixer',
    'newer:babel',
    'exec:jekyllBuild',
    'copy',
    'watch']);
  grunt.registerTask('build', [
    'newer:imagemin',
    'string-replace',
    'replace',
    'sass',
    'autoprefixer',
    'babel',
    'uglify']);
};
