(function(){
    'use strict';
    
    angular
        .module('app')
        .controller('RaceController', RaceController);
        
    RaceController.$inject = ['$scope', '$http'];
    
    function RaceController($scope, $http) {
        
        var vm = this;
        
        $http.get('/api/raceInfo')
            .success(function(response) {
                console.log("Got race info");
                console.log(response);
                vm.race = response;
            })
            .error(function(err) {
                console.log(err);
            });
     
        $http.get('/api/allRaces')
            .success(function(response) {
                console.log("Found all races");
                vm.allRaces = response;
            })
            .error(function(err) {
                console.log(err);
            })
            
        //Registering for a race should also add in all the team legs
        $scope.registerRace = function() {
            console.log("Registering for a race: " + $scope.currRace._id);
            $http({
                method: 'POST',
                url: '/api/registerForRace',
                data: $.param($scope.currRace),
                headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
            })
            .success(function(data) {
                console.log("Successful registration");
                vm.race = data;
            })
            .error(function(err) {
                console.log(err);
            });
        }
    }
    
})();