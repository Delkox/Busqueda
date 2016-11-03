var app = angular.module('app', []);
app.controller('MainCtrl', function($http){
	var vm = this;
	vm.fetchData = function(user){
		vm.loading = true;
		$http.get('https://api.github.com/users/' + user.name).then(function(res){
			vm.data = res;

			vm.name = res.data.name || 'Not found';
			vm.location = res.data.location || 'Not found';

			vm.loading = false;
		})
	}
})