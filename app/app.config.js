(function () {
    'use strict';

    angular.module('app').config(routeConfiguration);

    routeConfiguration.$inject = ['$stateProvider', '$urlRouterProvider'];
    function routeConfiguration($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: 'app/login/login.html'
            })
            .state('registration', {
                url: '/registration',
                templateUrl: 'app/registration/registration.html'
            })
            .state('home', {
                url: '/home',
                templateUrl: 'app/home/home.html'
            })
            .state('towns', {
                url: '/towns',
                templateUrl: 'app/town/partials/towns.html',
                controller: 'TownController',
                controllerAs: 'town'
            })
            .state('townDetail', {
                url: '/towns/{id}',
                templateUrl: 'app/town/partials/towns.html',
                controller: 'TownController',
                controllerAs: 'town'
            })
            .state('townCreate', {
                url: '/towns/new',
                templateUrl: 'app/town/partials/new-town.html',
                controller: 'TownController',
                controllerAs: 'town'
            })
            .state('editTown', {
                url: '/towns/edit',
                templateUrl: 'app/town/partials/edit-town.html'
            })
            .state('deleteTown', {
                url: '/towns/delete',
                templateUrl: 'app/town/partials/delete-town.html'
            });

        $urlRouterProvider.when('', '/home');
    }

})();