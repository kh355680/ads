(function () {
    'use strict';

    angular.module('app', ['ngMockE2E', 'layout', 'ui.router', 'app.town'])
        .run(function ($httpBackend) {
            // pass through template requests
            $httpBackend.whenGET(/\.html$/).passThrough();
        });

})();