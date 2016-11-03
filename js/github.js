var. app = angular.module('app', []);
app.controller('MainController', function($http){
	var vm = this;
    vm.fetchData = function(user){
    	vm.loading = true;
	    $http.get('https://api.github.com'´+ user.name).then(function(res){
	    	vm.data = res;
	    	vm.loading = false;
	    })
    }
})