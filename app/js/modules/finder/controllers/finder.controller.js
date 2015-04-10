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
    vm.country;

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