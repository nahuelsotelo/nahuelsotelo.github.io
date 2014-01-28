'use strict';

module.exports = function(grunt) {

    // Configuration goes here
    grunt.initConfig({
        // CSS ====================
        compass: {
            dist: {
                options: {
                    sassDir: 'scss',
                    cssDir:  'css',
                    imagesDir: 'img',
                    outputStyle: 'expanded',
                    noLineComments: true
                }
            }
        }
        // IMAGES ======================
        , svgmin: {
            options: {
                plugins: [
                    { removeViewBox: false },
                    { removeUselessStrokeAndFill: false }
                ]
            },
            dist: {                     // Target
                files: [{               // Dictionary of files
                    expand: true,       // Enable dynamic expansion.
                    cwd: 'img/svg-src',     // Src matches are relative to this path.
                    src: ['**/*.svg'],  // Actual pattern(s) to match.
                    dest: 'img',       // Destination path prefix.
                    ext: '.svg'     // Dest filepaths will have this extension.
                    // ie: optimise img/src/branding/logo.svg and store it in img/branding/logo.min.svg
                }]
            }
        }
        // GENERAL =================
      , watch: {
            scss: {
                files: [
                    'scss/**/*.scss'
                ],
                tasks: [
                    'compass'
                ],
                options: {
                    spawn: false,
                    livereload: true,
                }

            }
        }
    });

    // Load plugins here
    grunt.loadNpmTasks('grunt-contrib');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-grunticon');
    grunt.loadNpmTasks('grunt-svgmin');

    // Define your tasks here
    grunt.registerTask('default', [
        'compass',
    ]);
};