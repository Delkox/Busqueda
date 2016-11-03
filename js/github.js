var. app = angular.module('app', []);
app.controller('MainCtrl', function($http){
	var vm = this;
	$http.get('https://api.github.com/').then(function(response){
		vm.data = response;
		console.log(vm.data);

	})
})