var app = angular.module('ngStars',['ngMaterial']); 

app.config(function ($mdThemingProvider) {
	$mdThemingProvider.theme('default')
	.primaryPalette('teal')
	.accentPalette('orange');
});

app.controller('starsCtrl', function($scope){
   		 $scope.star = {
   			 title: "First star",
   			 distance: "1000000 mile",
   			 description: "This is the first star"
   		 }
   	 });