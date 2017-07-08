(function () {
    'use strict';

    angular.module('app').directive('adsPreview', constructor);

    function constructor(){
        return {
            restrict:'E',
            templateUrl:'components/ads/ads-preview/ads-preview.html',
            replace:'true'
        }
    }

})();