var sideBarControllers = angular.module('sideBarControllers', []);

sideBarControllers.controller('sidebarCtrl', ['$scope', '$http',
	function ($scope, $http) {
		$http.get('app/sidebar/sidebar.json').success(function(data) {
			$scope.items = data;
		});
	}]);