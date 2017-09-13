var app = angular.module('ngStars',['ngMaterial']); 

app.config(function ($mdThemingProvider) {
	$mdThemingProvider.theme('default')
	.primaryPalette('teal')
	.accentPalette('orange');
});
