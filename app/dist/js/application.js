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
 * Created by mgt on 10/04/15.
 */
angular
    .module('tunartFinderApp')
    .constant('API_URL', 'https://itunes.apple.com/search');



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
/**
 * Created by mgt on 10/04/15.
 */

angular
    .module('tunartFinderApp')
    .directive('artworkImg', ArtworkImgDirective);

function ArtworkImgDirective() {
    return {
        template: '<img src="" />',
        link: function(elem, attr) {
            elem.setAttribute('src', attr.src);
            return elem;
        }
    };
}



/**
 * Created by mgt on 10/04/15.
 */
angular
    .module('tunartFinderApp')
    .factory('FinderFactory', FinderFactory);

FinderFactory.$inject = ['$http', 'API_URL'];

function FinderFactory($http, API_URL) {
    var finderFactory = {
        finder: finder
    };

    return finderFactory;

    ///////

    function finder(term, country, entity) {
        var apiURL = API_URL + '?term=' + term + '&country=' + country + '&entity=' + entity + '&callback=JSON_CALLBACK';

        return $http.jsonp(apiURL).then(function(resp) {
            return resp.data.results;
        });
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
/**
 * Created by mgt on 10/04/15.
 */
angular
    .module('tunartFinderApp')
    .service('DataService', DataService);

function DataService(){
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

    this.getCountries = function(){
        return sortObject(_countries);
    };

    this.getEntities = function(){
        return _entities;
    };

    function sortObject(obj) {
        var arr = [];
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                arr.push({
                    'key': prop,
                    'value': obj[prop]
                });
            }
        }
        arr.sort(function(a, b) { return a.value - b.value; });
        //arr.sort(function(a, b) { a.value.toLowerCase().localeCompare(b.value.toLowerCase()); }); //use this to sort as strings
        return arr; // returns array
    }
}
