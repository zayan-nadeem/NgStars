var starsss = angular.module('ngStars');
  
  starsss.controller('starsCtrl', function($scope, $http){
    $http.get("data/stars.json").then(function(response){
                $scope.stars = response.data;
    }); 
  });