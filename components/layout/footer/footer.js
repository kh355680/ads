(function () {
    angular.module('layout').directive('footer', constructor);

    function constructor(){
        return {
            restrict:'E',
            templateUrl:'components/layout/footer/footer.html'
        }
    }
})();