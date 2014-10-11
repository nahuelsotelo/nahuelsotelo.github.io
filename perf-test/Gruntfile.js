'use strict';
module.exports = function (grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Define the configuration for all the tasks
    grunt.initConfig({

        // configurable paths
        path: {
            src:        'src',
            dist:       '.',
            css_src:    '<%= path.src %>/css',
            css_dist:   '<%= path.dist %>/css',
            js_src:     '<%= path.src %>/_js',
            js_dist:    '<%= path.dist %>/js',
            img_src:    '<%= path.src %>/img',
            img_dist:   '<%= path.dist %>/img',
            tmp:        '.tmp',
        },
        files: {
            css:        'main',
            js:         'scripts',
        },

        // IMAGES ======================
        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= path.img_src %>/',
                    src: ['*.{png,jpg,gif}'],
                    dest: '<%= path.img_dist %>/',
                }]
            },
            views: {
                files: [{
                    expand: true,
                    cwd: '<%= path.img_src %>/views/',
                    src: [
                        '*.{png,jpg,gif}',
                        '!_*.{png,jpg,gif}',
                    ],
                    dest: '<%= path.dist %>/views/images',
                }]
            }
        },
        // CSS ======================
        csso: {
            compress: {
                expand: true,
                cwd: '<%= path.css_src %>/',
                src: ['*.css', '!*.min.css'],
                dest: '<%= path.css_src %>/',
                ext: '.min.css'
            }
        },
    });

    // Tasks
    grunt.registerTask('default', [
        'imagemin',
        'csso',
    ]);
};
