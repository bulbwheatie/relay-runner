(function() {
    'use strict';
    
    angular
        .module('app')
        .controller('AdminController', AdminController);
        
        AdminController.$inject = ['$scope', '$http'];
        
        function AdminController($scope, $http) {
            
            var vm = this;
            
            //Get all the current races for the dropdown
            $http.get('/api/allRaces')
            .success(function(response) {
                console.log("success");
                console.log(response);
                vm.races = response;
            })
            .error(function(err) {
                console.log(err)
            });
            
            console.log(vm.races);
            $scope.currRace = {};
            
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
                console.log($scope.currRace);
                $scope.raceLegData.race = $scope.currRace._id;
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
                })
                .error(function(err) {
                    console.log(err);
                });            
            }
        }
})();