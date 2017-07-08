(function () {
    'use strict';

    angular.module('layout').directive('header', constructor);

    function constructor(){
        return {
            restrict:'E',
            templateUrl:'components/layout/header/header.html',
            replace:true
        }
    }

})();