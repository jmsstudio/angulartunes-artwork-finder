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