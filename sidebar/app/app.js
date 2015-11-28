var sideBarApp = angular.module('sideBarApp', [
	'ngRoute',
	'sideBarControllers',
	'sideBarDirective'
]);

sideBarApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/sidebar', {
        templateUrl: 'views/side-bar-content.html',
        controller: 'sidebarCtrl'
      }).
      otherwise({
        redirectTo: '/sidebar'
      });
  }]);

