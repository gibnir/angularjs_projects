'use strict'; 

/*

myApp: dependencies: ui.router, appServices, appControllers, appDirectives.

*/

var myApp = angular.module('myApp', [
  'ui.router',
  'appServices',
  'appControllers',
  'appDirectives'
  ]);

/*
config: using ui.ruter to navigate between the tabs. 
*/

myApp.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider
    .when('', '/page-1')
    .when('/index.html', '/page-1');

    $stateProvider
    .state('page-1', {
      url: "/page-1",
      templateUrl: 'views/page-1.html'
    })
    .state('page-2', {
      url: "page-2",
      templateUrl: 'views/page-2.html'
    })
    .state('page-3', {
      url: "page-3",
      templateUrl: 'views/page-3.html'
    });
  }]);