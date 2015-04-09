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

/**
 * Finder Controller
 * @constructor
 */
function FinderController(){
    var vm = this;

    vm.adicionaTexto = adicionaTexto;
    vm.indicePintado;
    vm.limparLogs = limparLogs;
    vm.logs = [];
    vm.nome = 'Davi';
    vm.removerItem = removerItem;
    vm.textoDigitado = '';

    function adicionaTexto() {
        vm.indicePintado = -1;
        if (Boolean(vm.textoDigitado.trim())) {
            vm.indicePintado = verificaSeJaExiste();
            if (vm.indicePintado < 0) {
                vm.logs.push(vm.textoDigitado);
                vm.textoDigitado = '';
            }
        }
    }

    function limparLogs(){
        vm.logs = [];
    }

    function removerItem(indice){
        vm.logs.splice(indice, 1);
        vm.indicePintado = -1;
    }

    function verificaSeJaExiste() {
        return vm.logs.indexOf(vm.textoDigitado);
    }
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
            controller: 'FinderController',
            controllerAs: 'vm'
        });
}