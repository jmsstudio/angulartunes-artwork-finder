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


