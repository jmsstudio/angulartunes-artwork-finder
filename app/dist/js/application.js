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
"use strict";

angular
    .module('tunartFinderApp')
    .directive('powerSelect', myExample);

function myExample() {
    var directive = {
        restrict: 'E',
        template: function () {
            return '<div class="ui fluid search selection dropdown" ng-transclude></div>';
        },
        transclude: true,
        link: linkFunc
    };

    return directive;

    function linkFunc(scope, el, attr) {
        $(el.context.childNodes[0]).dropdown();
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
"use strict";

angular
    .module('tunartFinderApp')
    .service('DataService', DataService);

function DataService() {

    var _countries = {
            us: 'United States of America',
            gb: 'United Kingdom',
            ca: 'Canada',
            br: 'Brazil',
            ae: 'United Arab Emirates',
            ag: 'Antigua and Barbuda',
            ai: 'Anguilla',
            al: 'Albania',
            am: 'Armenia',
            ao: 'Angola',
            ar: 'Argentina',
            at: 'Austria',
            au: 'Australia',
            az: 'Azerbaijan',
            bb: 'Barbados',
            be: 'Belgium',
            bf: 'Burkina-Faso',
            bg: 'Bulgaria',
            bh: 'Bahrain',
            bj: 'Benin',
            bm: 'Bermuda',
            bn: 'Brunei Darussalam',
            bo: 'Bolivia',
            bs: 'Bahamas',
            bt: 'Bhutan',
            bw: 'Botswana',
            by: 'Belarus',
            bz: 'Belize',
            cg: 'Democratic Republic of the Congo',
            ch: 'Switzerland',
            cl: 'Chile',
            cn: 'China',
            co: 'Colombia',
            cr: 'Costa Rica',
            cv: 'Cape Verde',
            cy: 'Cyprus',
            cz: 'Czech Republic',
            de: 'Germany',
            dk: 'Denmark',
            dm: 'Dominica',
            do: 'Dominican Republic',
            dz: 'Algeria',
            ec: 'Ecuador',
            ee: 'Estonia',
            eg: 'Egypt',
            es: 'Spain',
            fi: 'Finland',
            fj: 'Fiji',
            fm: 'Federated States of Micronesia',
            fr: 'France',
            gd: 'Grenada',
            gh: 'Ghana',
            gm: 'Gambia',
            gr: 'Greece',
            gt: 'Guatemala',
            gw: 'Guinea Bissau',
            gy: 'Guyana',
            hk: 'Hong Kong',
            hn: 'Honduras',
            hr: 'Croatia',
            hu: 'Hungaria',
            id: 'Indonesia',
            ie: 'Ireland',
            il: 'Israel',
            in: 'India',
            is: 'Iceland',
            it: 'Italy',
            jm: 'Jamaica',
            jo: 'Jordan',
            jp: 'Japan',
            ke: 'Kenya',
            kg: 'Krygyzstan',
            kh: 'Cambodia',
            kn: 'Saint Kitts and Nevis',
            kr: 'South Korea',
            kw: 'Kuwait',
            ky: 'Cayman Islands',
            kz: 'Kazakhstan',
            la: 'Laos',
            lb: 'Lebanon',
            lc: 'Saint Lucia',
            lk: 'Sri Lanka',
            lr: 'Liberia',
            lt: 'Lithuania',
            lu: 'Luxembourg',
            lv: 'Latvia',
            md: 'Moldova',
            mg: 'Madagascar',
            mk: 'Macedonia',
            ml: 'Mali',
            mn: 'Mongolia',
            mo: 'Macau',
            mr: 'Mauritania',
            ms: 'Montserrat',
            mt: 'Malta',
            mu: 'Mauritius',
            mw: 'Malawi',
            mx: 'Mexico',
            my: 'Malaysia',
            mz: 'Mozambique',
            na: 'Namibia',
            ne: 'Niger',
            ng: 'Nigeria',
            ni: 'Nicaragua',
            nl: 'Netherlands',
            np: 'Nepal',
            no: 'Norway',
            nz: 'New Zealand',
            om: 'Oman',
            pa: 'Panama',
            pe: 'Peru',
            pg: 'Papua New Guinea',
            ph: 'Philippines',
            pk: 'Pakistan',
            pl: 'Poland',
            pt: 'Portugal',
            pw: 'Palau',
            py: 'Paraguay',
            qa: 'Qatar',
            ro: 'Romania',
            ru: 'Russia',
            sa: 'Saudi Arabia',
            sb: 'Soloman Islands',
            sc: 'Seychelles',
            se: 'Sweden',
            sg: 'Singapore',
            si: 'Slovenia',
            sk: 'Slovakia',
            sl: 'Sierra Leone',
            sn: 'Senegal',
            sr: 'Suriname',
            st: 'Sao Tome e Principe',
            sv: 'El Salvador',
            sz: 'Swaziland',
            tc: 'Turks and Caicos Islands',
            td: 'Chad',
            th: 'Thailand',
            tj: 'Tajikistan',
            tm: 'Turkmenistan',
            tn: 'Tunisia',
            tr: 'Turkey',
            tt: 'Republic of Trinidad and Tobago',
            tw: 'Taiwan',
            tz: 'Tanzania',
            ua: 'Ukraine',
            ug: 'Uganda',
            uy: 'Uruguay',
            uz: 'Uzbekistan',
            vc: 'Saint Vincent and the Grenadines',
            ve: 'Venezuela',
            vg: 'British Virgin Islands',
            vn: 'Vietnam',
            ye: 'Yemen',
            za: 'South Africa',
            zw: 'Zimbabwe'
        },
        _entities = [
            { id: 'movie', label: 'Movie', icon: 'film' },
            { id: 'album', label: 'Album', icon: 'music' },
            { id: 'tvSeason', label: 'TV Show', icon: 'record' },
            { id: 'ebook', label: 'iBook', icon: 'book' },
            { id: 'id', label: 'Apple ID (Movies)', icon: 'apple' }
        ];

    this.getCountries = function() {
        return _countries;
    };

    this.getEntities = function() {
        return _entities;
    };

}