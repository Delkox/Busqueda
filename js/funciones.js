//Ocultar y mostrar
function proceso(){
document.getElementById('ocultar').style.display = 'none';
document.getElementById('mostrar').style.display = 'block';
var lista = document.getElementById('lista_repos');
lista_repos.innerHTML="";
}

//Evento de boton para gitHub
var boton_gitHub= document.getElementById('boton_gitHub')
boton_gitHub.addEventListener("click", proceso);




