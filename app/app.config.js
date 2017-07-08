(function () {
    'use strict';

    angular.module('app').config(routeConfiguration);

    routeConfiguration.$inject = ['$stateProvider', '$urlRouterProvider'];
    function routeConfiguration($stateProvider, $urlRouterProvider) {

        $stateProvider.state('home',{
            url: '/home',
            templateUrl: 'app/home/home.html'
        });

        $urlRouterProvider.when('', '/home');
    }

})();