<body ng-controller="MainCtrl as vm">
		<form>
			<div class="form-group">
				<input type="text" ng-model="user.name" class="form-control" placeholder="Escribe aqui el nombre de usuario GitHub">
				<button ng-click="vm.fetchData(user)" class="btn btn-primary">Busca!</button></br>
				<label>Busqueda de perfiles en GitHub</label>
				<h4 ng-if="vm.loading === true">loading...</h4>
				<h3>{{vm.data}}</h3>
			</div>	
		</form>