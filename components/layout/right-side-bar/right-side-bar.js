(function () {
    'use strict';

    angular.module('layout').directive('rightSideBar', test);

    function test(){
        return {
            restrict:'E',
            templateUrl:'components/layout/right-side-bar/right-side-bar.html',
            replace:true
        }
    }
})();