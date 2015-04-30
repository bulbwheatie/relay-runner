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
                templateUrl: 'javascripts/app/ra>/runner.html',
                controller: 'RunnerController',
                controllerAs: 'vm'
            })
            .when('/race-legs', {
                templateUrl: 'javascripts/app/runners/runner.html',
                controller: 'RunnerController',
                controllerAs: 'vm'
            })
            .when('/admin', {
                templateUrl:'javascripts/app/admin/admin.html',
                controller:'AdminController',
                controllerAs: 'vm'
            });
            
    }
}());