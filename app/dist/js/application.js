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


/**
 * Created by mgt on 09/04/15.
 */
"use strict";

angular
    .module('tunartFinderApp')
    .controller('FinderController', FinderController);

FinderController.$inject = ['$scope'];

function FinderController($scope){
    $scope.nome = 'Davi';
}
"use strict";

angular
    .module('tunartFinderApp')
    .config(FinderConfig);

FinderConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

function FinderConfig($stateProvider, $urlRouterProvider, $locationProvider){
    $locationProvider.hashPrefix('!');
    $urlRouterProvider.otherwise('/');


    $stateProvider
        .state('finder', {
            url: '/',
            templateUrl: '/app/views/finder/main.html',
            controller: 'FinderController'
        });
}