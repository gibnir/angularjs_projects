console.log('controller ok!');

var mainControllers = angular.module('mainControllers', []);

mainControllers.controller('mainCtrl', ['$scope','$http',
    function($scope,$http){
        
		$scope.items = [];

    	$scope.getList = function(){

	        var url = 'https://itunes.apple.com/us/rss/toppaidapplications/limit=25/json';

	        var successCallback = function(response) {

	        	response.data.feed.entry.forEach(function(e){

	        		var myId = e['id'].attributes['im:id'];
	        		var name = e['im:name'].label;
	        		var image = e['im:image'][0].label;
	        		var price = e['im:price'].label;
	        		var author = e['im:artist'].label;
	        		var releaseDate = e['im:releaseDate'].label;
	        		var summary = e['summary'].label;

	        		$scope.items.push({
	        			'myId':myId,
	        			'name':name,
	        			'image':image,
	        			'price':price,
	        			'author':author,
	        			'releaseDate':releaseDate,
	        			'summary':summary
	        		});
	        	});

	        };

	        var errorCallback = function(response) {
	        	console.log('error');
	        };

	        $http.get(url/*,{transformResponse: transformResponse}*/)
	        .then(successCallback, errorCallback);


	    };
	    $scope.getList();

	    console.log($scope.items);
	}
]);