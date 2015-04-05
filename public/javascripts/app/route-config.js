(function() {
    'use strict'

    angular
        .module('app')
        .config(config);

    config.$inject = ['$routeProvider'];

    function config($routeProvider) {
        $routeProvider
            .when('/team', {
                templateUrl: 'javascripts/app/team/team.html',
                controller: 'TeamController',
                controllerAs: 'vm'
            })
            .when('/race', {
                templateUrl: 'javascripts/app/race/race.html',
                controller: 'RaceController',
                controllerAs: 'vm'
            })
            .when('/race-legs', {
                templateUrl: 'javascripts/app/race-legs/race-legs.html',
                controller: 'RaceLegsController',
                controllerAs: 'vm'
            });
    }
}());