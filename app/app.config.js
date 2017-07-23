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
            .state('createTown', {
                url: '/towns/create',
                templateUrl: 'app/town/partials/new-town.html',
                controller: 'CreateTownController'
            })
            .state('editTown', {
                url: '/towns/edit/{townId}',
                templateUrl: 'app/town/partials/edit-town.html',
                controller: 'EditTownController'
            })
            .state('deleteTown', {
                url: '/towns/delete',
                templateUrl: 'app/town/partials/delete-town.html',
                controller: 'DeleteTownController',
                controllerAs: 'town',
                params: {
                    townDetail: null
                }
            });

        $urlRouterProvider.when('', '/home');
    }

})();