var appControllers = angular.module('appControllers', []);

/*
controller: appCtrl
params: $scope, $http, $q, appService.
* fetch json data form appService service.
* reset sorting selector to sort by Newest age.
*/

appControllers.controller('appCtrl', [
	'$scope',
	'$http',
	'$q',
	'appService',
	function ($scope, $http, $q, appService) {
		
		appService.getJson().then(function(data) {
			$scope.items = data;
		});
		
		$scope.orderProp = 'age';
	}]);