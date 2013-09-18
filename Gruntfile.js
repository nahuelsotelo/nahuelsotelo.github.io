module.exports = function(grunt) {

    // Configuration goes here
    grunt.initConfig({

        compass: {
            dist: {
                options: {
                    sassDir: '_scss',
                    cssDir:  'css',
                    imagesDir: 'img',
                    outputStyle: 'expanded',
                    noLineComments: true
                }
            }
        },

        watch: {
            scss: {
                files: [
                    '_scss/**/*.scss'
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

    // Define your tasks here
    grunt.registerTask('default', [
        'compass',
    ]);
};