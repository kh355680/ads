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

            $httpBackend.whenGET(/\/books\/\d+/).respond(function (method, url, data) {
                // parse the matching URL to pull out the id (/games/:id)
                var town = towns[0];
                return [200, town, {}];
            });

            // this is the creation of a new resource
            $httpBackend.whenPOST('/towns').respond(function (method, url, data) {
                towns.push({name:'yo'});        
                return [201, data, { Location: '/towns' }];
            });

            // this is the update of an existing resource (ngResource does not send PUT for update)
            $httpBackend.whenPOST(/\/games\/\d+/).respond(function (method, url, data) {
                var params = angular.fromJson(data);

                // parse the matching URL to pull out the id (/games/:id)
                var gameid = url.split('/')[2];

                var game = ServerDataModel.updateOne(gameid, params);

                return [201, game, { Location: '/games/' + gameid }];
            });

            // this is the update of an existing resource (ngResource does not send PUT for update)
            $httpBackend.whenDELETE(/\/games\/\d+/).respond(function (method, url, data) {
                // parse the matching URL to pull out the id (/games/:id)
                var gameid = url.split('/')[2];

                ServerDataModel.deleteOne(gameid);

                return [204, {}, {}];
            });

        });
})();