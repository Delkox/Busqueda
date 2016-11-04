//Ocultar y mostrar
function proceso(){
document.getElementById('ocultar').style.display = 'none';
document.getElementById('mostrar').style.display = 'block';}

//Evento de boton para gitHub
var boton_gitHub= document.getElementById('boton_gitHub')
boton_gitHub.addEventListener("click", proceso);

//imagen de perfil GitHub
var datos_perfil = JSON.parse(vm.data);
var imagen_perfil = document.getElementById("imagen_perfil");
//imagen_perfil.innerText("datos_perfil.")



