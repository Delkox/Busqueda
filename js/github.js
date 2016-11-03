var. app = angular.module('app', []);
app.controller('MainController', function($http){
	var vm = this;
    $http.get('https://api.github.com').then(function(res){
    	console.log(res);
    })
})