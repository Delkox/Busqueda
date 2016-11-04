var database = db.ref('metadata'); 
database.once('value').then(function(comentarios){
	var elemento = comentarios.val(); 
	$comentariosList = $('.lista-notas'); 
	$comentariosList.innerHTML = '';
	elemento.forEach(function(nota){
		$comentariosList.append('<li>' + nota + '</li>')); 
	});
});