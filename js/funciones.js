//Ocultar y mostrar
function proceso(){
document.getElementById('ocultar').style.display = 'none';
document.getElementById('mostrar').style.display = 'block';
var lista = document.getElementById('lista_repos');
lista_repos.innerHTML="";
}

var db = firebase.database();

function agregar(){
	 //Obtener informacion del comentario
	var caja_comentario = document.getElementById('caja_comentario');
	var comentario = caja_comentario.value;
	  db.ref("metadata").push({
	  	pex: comentario
	  }); 
}


//Evento de boton para gitHub
var boton_gitHub = document.getElementById('boton_gitHub');
boton_gitHub.addEventListener("click", proceso);

//Evento e boton para firebase
var boton_firebase = document.getElementById('boton_firebase');
boton_firebase.addEventListener("click", agregar);


db.ref("metadata").on('value', function(snapshot){
		var publicar = document.getElementById("publicar");
		var a = snapshot.val();
		publicar.innerHTML="Comentario: "+(a.pex);
});



