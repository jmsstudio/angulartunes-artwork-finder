/**
 * Created by mgt on 08/04/15.
 */
module.exports = {
    scripts: {
        files: ['<%= config.js %>/**/**/**/*.js', '!node_modules/**'],
        tasks: ['clean', 'concat']
    },
    gruntfile: {
        files: ['Gruntfile.js', 'grunt/*.js'],
        tasks: ['default']
    },
    sass: {
        files: ['<%= config.css %>/**/*.scss'],
        tasks: ['sass']
    }
};