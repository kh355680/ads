(function () {
    'use strict';

    angular.module('app.town').controller('CreateTownController', constructor);

    constructor.$inject = ['$scope', '$state', '$stateParams', '$http'];
    function constructor($scope, $state, $stateParams, $http) {
        function init() {
            $scope.town = {
                id: null,
                name: ''
            };
        }
        init();

        $scope.create = function () {
            $http.post('/towns', $scope.town).then(function (response) {
                $state.go('towns');
            });
        }        
    }
})();