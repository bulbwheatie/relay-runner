(function() {
    'use strict';
    
    angular
        .module('app')
        .controller('TeamController', TeamController);

    TeamController.$inject = ['$scope',  '$http'];
    
    function TeamController($scope, $http) {
        
        var vm = this;
        console.log("Fetching all the runners");
        
        $http.get('/api/allRunners')
            .success(function(response) {
                console.log("success");
                console.log(response);
                vm.runners = response;
            })
            .error(function(err) {
                console.log(err)
            });

        console.log(vm.runners);   
        $scope.formData = {"teamID": "1"}
        
        $scope.processForm = function() {
            console.log("Form submitted");
              $http({
                method  : 'POST',
                url     : '/api/createRunner',
                data    : $.param($scope.formData),  // pass in data as strings
                headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
             })
             .success(function(data){
                 vm.runners.push(data);
                 console.log(data);
             });
        };
    }
    
})();

