/**
 * Created by mgt on 08/04/15.
 */
module.exports = {
    vendor: {
        src: [
            '<%= config.vendor %>/angular/angular.js',
            '<%= config.vendor %>/angular-resource/angular-resource.js',
            '<%= config.vendor %>/angular-sanitize/angular-sanitize.js',
            '<%= config.vendor %>/angular-ui-router/release/angular-ui-router.js',
            '<%= config.vendor %>/lodash/lodash.js'
        ],
        dest: '<%= config.dist %>/js/vendors.js'
    },
    app: {
        src: [

            '<%= config.js %>/app.js',
            '<%= config.js %>/modules/**/**/*.js'
        ],
        dest: '<%= config.dist %>/js/application.js'

    }

};