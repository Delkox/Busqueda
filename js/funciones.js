//Ocultar y mostrar
function proceso(){
document.getElementById('ocultar').style.display = 'none';
document.getElementById('mostrar').style.display = 'block';
var lista = document.getElementById('lista_repos');
lista_repos.innerHTML="";
}

function agregar(){
	 var db = firebase.database();
	  db.ref("comentarios").set({
	  	usuario: 
	  });
}

//Evento de boton para gitHub
var boton_gitHub = document.getElementById('boton_gitHub')
boton_gitHub.addEventListener("click", proceso);

var caja_comentario = document.getElementById('caja_comentario');

//Evento e boton para firebase
var boton_firebase = document.getElementById('boton_firebase');
boton_firebase.addEventListener("click", agregar);



