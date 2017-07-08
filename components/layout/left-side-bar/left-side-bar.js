(function () {
    'use strict';

    angular.module('layout').directive('leftSideBar', constructor);

    function constructor(){
        return {
            restrict:'E',
            templateUrl:'components/layout/left-side-bar/left-side-bar.html',
            replace:true
        }
    }
})();