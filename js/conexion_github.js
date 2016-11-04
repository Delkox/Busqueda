/*Github user data*/
var app = angular.module('app', []);

app.controller('MainCtrl', function($http){
	var rm = this;
	rm.fetchData = function(user){
		rm.loading = true;
		$http.get('https://api.github.com/users/' + user.name + '/repos').then(function(res){
			rm.data = res;
			var largo = res.data.length;
			rm.loading = false;
			x=0;
			var lista_repos = document.getElementById('lista_repos');
			while(x < largo){
				lista_repos.innerHTML+= "<li class='list-group-item'>"+ " <h4> " + res.data[x].name + "</h4>" + "</br>"+ res.data[x].description + "</li>";
				x++;
			}
		})
	}

})

/*Github user data
var app = angular.module('app', []);
var ruta_img; 

app.controller('MainCtrl', function($http){
	var vm = this;

	vm.fetchData = function(user){
		vm.loading = true;
		$http.get('https://api.github.com/users/' + user.name).then(function(res){
			vm.data = res;
			vm.data.imagen=res.data.avatar_url;
			vm.data.nombre=res.data.name;
			vm.data.cuenta=res.data.login;
			vm.data.email=res.data.email;
			vm.data.ubicacion=res.data.location;
			vm.loading = false;

			//imagen de perfil GitHub
			var imagen_perfil={
				imagen_url: vm.data.imagen
			};

			var imagen_canvas = document.getElementById("usuario--imagen");
			var contexto_img_perfil = imagen_canvas.getContext('2d');
			imagen_perfil.imagen = new Image();
			imagen_perfil.imagen.src =imagen_perfil.imagen_url;
			imagen_perfil.imagen.onload = dibujarFondo();

			function dibujarFondo(){
				contexto_img_perfil.drawImage(imagen_perfil.imagen,0,0);
			}

			//datos usuario

			var usuario_nombre=document.getElementById("usuario__nombre");
			var usuario_cuenta=document.getElementById("usuario__cuenta");
			var usuario_email=document.getElementById("usuario__email");
			var usuario_ubicacion=document.getElementById("usuario__ubicacion");


			usuario_nombre.innerHTML=    "Nombre:    " + vm.data.nombre;
			usuario_cuenta.innerHTML=    "Cuenta:    " + vm.data.cuenta;
			usuario_email.innerHTML=     "Email:     " + vm.data.email;
			usuario_ubicacion.innerHTML= "Ubicacion: " + vm.data.ubicacion;

		})
	}


})*/

