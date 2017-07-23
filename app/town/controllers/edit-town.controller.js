(function () {
    'use strict';

    angular.module('app.town').controller('EditTownController', constructor);

    constructor.$inject = ['$scope', '$state', '$stateParams', '$http'];
    function constructor($scope, $state, $stateParams, $http) {
        if ($stateParams.townId) {
            $http.get('/towns/' + $stateParams.townId)
                .then(function (response) {
                    $scope.town = response.data;
                });
        }

        $scope.update = function () {
            $http.put('/towns/' + $stateParams.townId, $scope.town)
                .then(function (response) {
                    $state.go('towns');
                });
        }
    }
})();