console.log('get to directives file');

var appDirectives = angular.module('appDirectives', []);

/*
directive: mainTabs
*restrict to element.
*/

appDirectives.directive('mainTabs', function() {
  return { 
    restrict: 'E', 
    scope: {}, 
    templateUrl: 'app/directives/main-tabs.html' 
  }; 
});

/*
directive: itemInfo
*restrict to element. 
*use scope info for passing the item.
*/

appDirectives.directive('itemInfo', function() {
	return { 
		restrict: 'E', 
		scope: {
			info: '=' 
		}, 
		templateUrl: 'app/directives/item-info.html' 
	}; 
});
/*
appDirective.directive('btnState', function() { 
  return { 
    restrict: 'E', 
    scope: {}, 
    templateUrl: 'app/directives/btn-state.html',
    link: function(scope, element, attrs) { 
      	scope.buttonText = "X", 
        scope.installed = false, 

        scope.state = function() { 
        element.toggleClass('btn-active'); 
        if(scope.installed) { 
          scope.buttonText = "X"; 
          scope.installed = false; 
        } else { 
          scope.buttonText = "Open"; 
          scope.installed = true; 
        } 
      } 
    }    
  }; 
});*/