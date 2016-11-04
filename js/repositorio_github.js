/*Github user repo*/
var app1 = angular.module('app', []);

app1.controller('MainCtrl', function($http){
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

