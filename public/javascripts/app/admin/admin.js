(function() {
    'use strict';
    
    angular
        .module('app')
        .controller('AdminController', AdminController);
        
        AdminController.$inject = ['$scope', '$http'];
        
        function AdminController($scope, $http) {
            
            var vm = this;
            
            $scope.addNewRace = function() {
                console.log("adding new race!");
                $http({
                    method: 'POST',
                    url: '/api/admin/addRace',
                    data : $.param($scope.raceData),
                    headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
                })
                .success(function(data){
                     console.log("Successful post request: createRace");
                     $scope.raceData = null;
                     console.log(data);
                });
            };
            
            $scope.addNewRaceLeg = function() {
                $http({
                    method: 'POST',
                    url: '/api/admin/addRaceLeg',
                    data : $.param($scope.raceLegData),
                    headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
                })
                .success(function(data){
                     console.log("Successful post request: createRaceLeg");
                     $scope.raceLegData = null;
                     console.log(data);
                });              
            }
        }
})();