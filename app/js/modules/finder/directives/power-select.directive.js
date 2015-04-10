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
