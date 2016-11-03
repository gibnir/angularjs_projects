var app = angular.module('app', [
	'ngRoute',
	'mainControllers',
	'mainDirectives'
]);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/main', {
        templateUrl: 'views/main-content.html'
      }).
      otherwise({
        redirectTo: '/main'
      });
  }]);

