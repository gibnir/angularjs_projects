console.log('directive call');

var mainDirectives = angular.module('mainDirectives', []);

mainDirectives.directive('itemInfo', function() {
	return { 
		restrict: 'E', 
		scope: {
			info: '=' 
		}, 
		templateUrl: 'app/directives/item-info.html',
		link: function(scope) { 
			scope.state = false, 

			scope.changeState = function() { 
				scope.state = !scope.state;
			} 
		}
	}; 
});