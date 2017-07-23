(function () {
    'use strict';
    angular.module('app.town', ['ngMockE2E'])
        .run(function ($httpBackend) {

            var towns =
                [
                    {
                        id: 1,
                        name: 'Sofia'
                    },
                    {
                        id: 2,
                        name: 'Plovdiv'
                    },
                    {
                        id: 3,
                        name: 'Rousse'
                    },
                    {
                        id: 4,
                        name: 'Bourgas'
                    },
                    {
                        id: 5,
                        name: 'Varna'
                    }
                ];

            $httpBackend.whenGET('/api/v1/books').respond(function (method, url, data) {
                //var games = ServerDataModel.findAll();
                return [200, towns, {}];
            });

            $httpBackend.whenGET(/\/towns\/\d+/).respond(function (method, url, data) {
                var chars = url.split('/');
                var id = chars[chars.length - 1];
                var town = _.find(towns, function (town) {
                    return town.id === parseInt(id);
                })
                return [201, town, {}];
            });

            // this is the creation of a new resource
            $httpBackend.whenPOST('/towns').respond(function (method, url, data) {
                var town = angular.fromJson(data);
                town.id = towns.length + 1;
                towns.push(town);
                return [201, null, { Location: '/towns/' }];
            });

            // this is the update of an existing resource (ngResource does not send PUT for update)
            $httpBackend.whenPUT(/\/towns\/\d+/).respond(function (method, url, data) {
                var chars = url.split('/');
                var id = parseInt(chars[chars.length - 1]);
                var townIndex = _.findIndex(towns, function (town) {
                    return town.id === id;
                })

                towns[townIndex] = angular.fromJson(data);
                console.log(towns);
                return [201, null, {}];
            });

            // this is the update of an existing resource (ngResource does not send PUT for update)
            $httpBackend.whenDELETE(/\/towns\/\d+/).respond(function (method, url, data) {
                var chars = url.split('/');
                var id = chars[chars.length - 1];

                _.remove(towns, function (n) {
                    return n.id == id;
                });

                console.log(towns);
                debugger;

                return [204, {}, {}];
            });

            // pass through template requests
            $httpBackend.whenGET(/\.html$/).passThrough();
        });
})();