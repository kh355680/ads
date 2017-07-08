(function () {
    'use strict';

    angular.module('layout').directive('rightSideBar', constructor);

    function constructor(){
        return {
            restrict:'E',
            templateUrl:'components/layout/right-side-bar/right-side-bar.html',
            replace:true
        }
    }
})();