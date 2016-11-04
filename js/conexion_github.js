/*Github*/
var app = angular.module('app', []);
app.controller('MainCtrl', function($http){
	var vm = this;
	vm.fetchData = function(user){
		vm.loading = true;
		$http.get('https://api.github.com/users/' + user.name).then(function(res){
			vm.data = res;
			contenido = vm.data.avatar_url;
			vm.loading = false;
		})
	}
})




