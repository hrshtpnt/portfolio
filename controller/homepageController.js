myApp.controller('homepageController',['$scope','$log', '$timeout',function($scope, $log, $timeout) {
	

	/*$window.on('load', function() {
		$body.removeClass('is-loading');
	});*/

// Poptrox.
	$scope.onload = function() {
		var	$window = $(window),
		$body = $('body'),
		$wrapper = $('#wrapper');

	skel.breakpoints({
		xlarge:	'(max-width: 1680px)',
		large:	'(max-width: 1280px)',
		medium:	'(max-width: 980px)',
		small:	'(max-width: 736px)',
		xsmall:	'(max-width: 480px)'
	});
	$body.addClass('is-loading');
	$body.removeClass('is-loading');
	$('.thumbnails').poptrox({
		onPopupClose: function() { $body.removeClass('is-covered'); },
		onPopupOpen: function() { $body.addClass('is-covered'); },
		baseZIndex: 10001,
		useBodyOverflow: false,
		usePopupEasyClose: true,
		overlayColor: '#000000',
		overlayOpacity: 0.75,
		popupLoaderText: '',
		fadeSpeed: 500,
		usePopupDefaultStyling: false,
		windowMargin: (skel.breakpoint('small').active ? 5 : 50)
	});
	}

	$scope.showContact = false;

	$scope.getRandomColor = function() {
		var letters = '123456789ABCDEF';
		var color = '#';
		for (var i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * 16)];
		}
			return color;
		};

	$scope.setRandomColor = function() {
			$scope.randomColor = $scope.getRandomColor();
	   		$scope.dynamicColor = {
	   			'color' : $scope.getRandomColor()
	   		}
	   		$timeout($scope.setRandomColor, 5000);
	};
			$timeout($scope.setRandomColor(), 2000);



}]);