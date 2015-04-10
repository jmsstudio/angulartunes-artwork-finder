/**
 * Created by mgt on 09/04/15.
 */
"use strict";

angular
    .module('tunartFinderApp')
    .controller('FinderController', FinderController);

FinderController.$inject = ['DataService', 'FinderFactory'];
/**
 * Finder Controller
 * @constructor
 */
function FinderController(DataService, FinderFactory){
    var vm = this;

    vm.countries = DataService.getCountries();
    vm.country = "";
    vm.entities = DataService.getEntities();
    vm.entity = "";
    vm.search = search;
    vm.term = "";
    vm.artworks = [];

    function search(){
        FinderFactory.finder(vm.term, vm.country, vm.entity).then(function(result){
           console.log(arguments);
            vm.artworks = result;
        });

    }
}