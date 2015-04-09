/**
 * Created by mgt on 08/04/15.
 */
'use strict';

module.exports = function(grunt) {


    require('load-grunt-config')(grunt, {
        data: {
            config: {
                js: 'app/js',
                css: 'app/scss',
                images: 'app/images',
                vendor: 'bower_components',
                dist: 'app/dist',
                views: 'app/views',
                report: 'reports'
            }
        }
    });

    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);


    //teste
    grunt.registerTask('default', [
        'clean',
        'concat',
        'sass'
    ]);

};