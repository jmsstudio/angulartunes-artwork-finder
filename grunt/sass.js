/**
 * Created by mgt on 09/04/15.
 */
module.exports = {
    dist: {
        options: {
            style: 'expanded',
            require: 'susy'
        },
        files: {
            '<%= config.dist %>/css/styles.css': '<%= config.css %>/main.scss'
        }
    }
};