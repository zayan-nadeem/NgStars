(function(){
    
    "use strict"; 

    angular
   	 .module('ngStars')
   	 .controller('starsCtrl', function($scope){
   		 $scope.star = {
   			 title: "First star",
   			 distance: "1000000 mile",
   			 description: "This is the first star"
   		 }
   	 });

});