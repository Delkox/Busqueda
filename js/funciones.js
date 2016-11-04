//Ocultar y mostrar
function proceso(){
document.getElementById('ocultar').style.display = 'none';
document.getElementById('mostrar').style.display = 'block';
var lista = document.getElementById('lista_repos');
lista_repos.innerHTML="";
}

function agregar(){
	 var db = firebase.database();
	 //Obtener informacion del comentario
	var caja_comentario = document.getElementById('caja_comentario');
	var comentario = caja_comentario.value;
	  db.ref("metadata").push({
	  	pex: comentario
	  }); 
}

function mostrar(){
	db.ref("metadata").on('value', function(snapshot){
		var publicar = document.getElementById("publicar");
		publicar.innerHTML = snapshot.val();
	});
}

//Evento de boton para gitHub
/*var boton_gitHub = document.getElementById('boton_gitHub')
boton_gitHub.addEventListener("click", proceso);*/

//Evento e boton para firebase
var boton_firebase = document.getElementById('boton_firebase');
boton_firebase.addEventListener("click", agregar);
boton_firebase.addEventListener("click", mostrar);




