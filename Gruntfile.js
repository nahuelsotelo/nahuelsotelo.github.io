'use strict';

module.exports = function(grunt) {

    // load all grunt tasks matching the `grunt-*` pattern
    require('load-grunt-tasks')(grunt);

    // require it at the top and pass in the grunt instance
    require('time-grunt')(grunt);

    // Configuration goes here
    grunt.initConfig({
        // CSS ========================
        compass: {
            dist: {
                options: {
                    sassDir: 'scss',
                    cssDir:  'css',
                    imagesDir: 'img',
                    outputStyle: 'compressed',
                    noLineComments: true
                }
            }
        },

        // JS ==========================
        modernizr: {
            dist: {
                devFile:     'js/vendor/modernizr-dev.js',
                outputFile:  'js/modernizr.js',
                files: {
                    src: [
                        'css/**/*.*',
                        'js/main.js'
                    ]
                }
            }
        },

        // IMAGES ======================
        svgmin: {
            options: {
                plugins: [
                    { removeViewBox: false },
                    { removeUselessStrokeAndFill: false }
                ]
            },
            sprite: {                     // Target
                files: [{               // Dictionary of files
                    expand: true,       // Enable dynamic expansion.
                    cwd: 'img/svg-src',     // Src matches are relative to this path.
                    src: ['**/*.svg'],  // Actual pattern(s) to match.
                    dest: 'img/svg-src',       // Destination path prefix.
                    ext: '.svg'     // Dest filepaths will have this extension.
                    // ie: optimise img/src/branding/logo.svg and store it in img/branding/logo.min.svg
                }]
            },
            content: {
                files: [{               // Dictionary of files
                    expand: true,       // Enable dynamic expansion.
                    cwd: 'img/',     // Src matches are relative to this path.
                    src: ['*.svg'],  // Actual pattern(s) to match.
                    dest: 'img',       // Destination path prefix.
                    ext: '.svg'     // Dest filepaths will have this extension.
                    // ie: optimise img/src/branding/logo.svg and store it in img/branding/logo.min.svg
                }]
            }
        }

        grunticon: {
            svg: {
                files: [{
                    expand: true,
                    cwd: 'img/svg-src',
                    src: [
                        '*.svg',
                        '*.png'
                    ],
                    dest: 'css/svg'
                }],
                options: {
                    pngfolder: '../../img/png-src',
                    customselectors: {
                        '*': [
                            '.icon-$1:after',
                            '.is--$1:before'
                        ]
                    },
                    cssprefix: 'is--'
                }
            }
        },

        // GENERAL =================
        watch: {
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

    // Define your tasks here
    grunt.registerTask('default', [
        'compass',
    ]);

    grunt.registerTask('build', [
        'svgmin',
        'grunticon',
        'compass',
        'modernizr'
    ]);
    grunt.registerTask('img', [
        'svgmin',
        'grunticon',
        'compass'
    ]);
    grunt.registerTask('watcher', [
        'connect',
        'watch'
    ]);

};