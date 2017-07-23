(function () {
    'use strict';

    angular.module('app.town').controller('DeleteTownController', constructor);

    function constructor($scope, $http, $state, $stateParams) {
        var vm = this;

        function init() {
            if ($stateParams) {
                vm.townDetail = $stateParams.townDetail;
            }
        }
        init();

        vm.removeTown = function (townId) {
            $http.delete('/towns/' + townId);
            $state.go('towns');
        }
    }
})();