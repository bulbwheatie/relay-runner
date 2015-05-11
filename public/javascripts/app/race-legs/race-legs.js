(function() {
    
    'use strict'
    
    angular
        .module('app')
        .controller("RaceLegController", RaceLegController);
      
    RaceLegController.$inject = ['$scope', '$http'];
        
    function RaceLegController($scope, $http) {
        
        var vm = this;
        console.log("fetching team legs");
        
                //Create funciton to assign a runner to a race
        $scope.assignRunnerToLeg = function(chosen_runner, teamLeg) {
            console.log("BLEH");
            console.log("Attempting to register runner: " + chosen_runner.name + " for " + teamLeg);
            $http({
                method: 'POST',
                url: '/api/assignRunnerToLeg',
                data: $.param({runner: chosen_runner._id, teamLeg: teamLeg}),
                headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
            })
            .success(function(data) {
                console.log("successful assignment");
            })
            .error(function(err) {
                console.log(err);
            });
        } 
        
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