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