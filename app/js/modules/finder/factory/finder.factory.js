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