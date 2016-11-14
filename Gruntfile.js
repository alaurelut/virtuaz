module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        watch: {
            sass: {
                files: ['scss/*.scss', 'js/*.js'],
                tasks: ['sass', 'concat']
            }
        },

        sass: {
            dist: {
                files: {
                    'dist/app.css': 'scss/app.scss'
                }
            }
        },

        concat: {
            dist: {
                src: ['js/*.js'],
                dest: 'dist/app.js'
            }
        },

        uglify: {
            my_target: {
                files: {
                    'dist/app.min.js': ['dist/app.js']
                }
            }
        },

    });
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('default', ['sass', 'concat', 'uglify', 'watch']);
};
