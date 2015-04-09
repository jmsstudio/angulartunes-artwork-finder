/**
 * Created by mgt on 09/04/15.
 */
'use strict';

/* ####################### Third party ####################### */
angular.module('lodash', []).factory('_', function() {
    return window._;
});


// =====================================================================================
//                                  APPLICATION MODULES
// =====================================================================================
angular.module('tunartFinderApp', ['ui.router', 'lodash', 'ngResource', 'ngSanitize']);

