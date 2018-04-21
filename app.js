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
		})
		.when("/blog", {
			templateUrl: "view/blog.html",
			controller: "blogController"
		})
		.when("/admin",{
				resolve: { //this is called conditional routing
					"check" : function($location, $rootScope){
						if(!$rootScope.sessiondata){
							$location.path("/");
						}
					}
				},
				templateUrl: "view/admin.php",
				controller: "adminController"
		})
		.when("/loginpage", {
			templateUrl: "view/loginpage.html",
			controller: "postController"
		}).otherwise("/")
});