(function() {
    
    'use strict'
    
    angular
        .module('app')
        .controller("RaceLegController", RaceLegController);
      
    RaceLegController.$inject = ['$scope', '$http'];
        
    function RaceLegController($scope, $http) {
        
        var vm = this;
        console.log("fetching team legs");
        //Get all the legs associated with this race leg
        $http.get('/api/allTeamLegs') 
            .success( function(response) {
                console.log(response);
                vm.raceLegs = response;
            })    
            .error( function(err) {
                console.log(err);
            });
            
        $http.get('api/allRunners')
            .success( function(response) {
                console.log(response);
                vm.runners = response;
            })
            .error( function(err) {
                console.log(err);
            });
    };
        
}());