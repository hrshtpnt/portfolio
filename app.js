var myApp = angular.module('myApp',['ngRoute']);

myApp.config(function($routeProvider){

	$routeProvider
		.when("/", {
			templateUrl:"view/main.html",
			controller:"homepageController"
		})
		.when("/portfolio", {
			templateUrl:"view/portfolio.html",
			controller:"portfolioController"
		}).otherwise("/")
});
