myApp.controller('portfolioController',['$scope','$log', '$timeout',function($scope, $log, $timeout) {
	

	$scope.Hello = "Hello I am Harshit ";
	$scope.blinkingSymbol = "";

	$scope.showBlinkingFunction = function(){
		$scope.blinkingSymbol = "|";
		$timeout($scope.hideBlinkFunction, 500);
	};
	$scope.hideBlinkFunction = function(){
		$scope.blinkingSymbol = "";
		$timeout($scope.showBlinkingFunction, 200);
	};

	$timeout($scope.showBlinkingFunction(), 200);

}]);