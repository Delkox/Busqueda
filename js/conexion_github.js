/*Github*/
var app = angular.module('app', []);
var ruta_img; 
app.controller('MainCtrl', function($http){
	var vm = this;
	vm.fetchData = function(user){
		vm.loading = true;
		$http.get('https://api.github.com/users/' + user.name).then(function(res){
			vm.data = res;
			vm.data.imagen = res.data.avatar_url;
			//imagen de perfil GitHub
			var imagen_perfil = document.getElementById("imagen_perfil");
			imagen_perfil.innerHTML = vm.data.imagen;
			vm.loading = false;
		})
	}
})






