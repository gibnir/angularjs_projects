var appServices = angular.module('appServices', []);

/*
service: appService
params: $http.
*/

appServices.service('appService', [
	'$http',
	function ($http) {
		var appService = {
			getJson: function() {
			// $http returns a promise, which has a then function, which also returns a promise
			var promise = $http.get('app/json-files/employees.json')
			.then(function successCallback(response) {
				console.log('success.');
			// The return value gets picked up by the then in the controller.
			return response.data;
		}, function errorCallback(response) {
			console.log('failure.');
			return response.data;
		});
			// Return the promise to the controller
			return promise;
		}
	};
	return appService;
}]);