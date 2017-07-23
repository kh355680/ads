(function () {
    'use strict';

    angular.module('app.town').controller('TownController', constructor);

    function constructor($http, $state, $stateParams) {
        var vm = this;
        function init() {

            /*
            if ($stateParams.id) {
                $http.get('/api/books/' + $stateParams.id).then(function (response) {
                    debugger;
                })
            }
            */

            $http.get('/api/v1/books')
                .then(function (response) {
                    vm.towns = response.data;
                });

        }
        init();

        vm.create = function () {
            $http.post('/towns', { data: 'yo' }).then(function (response) {
                $state.go('towns');
            });
        }
    }
})();