var. app = angular.module('app', []);
app.controller('MainController', function($http){
	var vm = this;
    vm.fetchData = function(user){
	    $http.get('https://api.github.com'´+ user.name).then(function(res){
	    	console.log(res);
	    })
    }
})