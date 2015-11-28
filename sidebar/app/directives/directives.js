var sideBarDirective = angular.module('sideBarDirective', []);

sideBarDirective.directive('itemInfo', function() {
	return { 
		restrict: 'E', 
		scope: {
			info: '=' 
		}, 
		templateUrl: 'app/directives/item-info.html' 
	}; 
});