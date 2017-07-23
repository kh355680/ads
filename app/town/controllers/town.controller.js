(function () {
    'use strict';

    angular.module('app.town').controller('TownController', constructor);

    function constructor($scope, $http, $state, $stateParams) {
        var vm = this;
        vm.yo = 'Yo';
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

        vm.gotoCreatePage = function(){
            $state.go('createTown');
        }

        vm.create = function () {
            $http.post('/towns', { data: 'yo' }).then(function (response) {
                $state.go('towns');
            });
        }

        vm.removeTown = function (townInfo) {
            $state.go('deleteTown', { townDetail: townInfo });
        }

        vm.update = function (townId) {
            debugger;
            $state.go('editTown', { townId: townId });
        }
    }
})();