function mostrar()
{
	let destino;

	destino = document.getElementById("txtIdDestino").value;

	switch(destino){
		
		case 'Cataratas':
		case 'Mar del plata':
			alert("Calor🌞");
			break;
		default:
			alert("Frio❄️");
			break;	
	}
}
/*var destino=txtIdDestino.value;
	switch(destino){
		default:
			alert('Frio ❄️ ');
			break;
	case 'Cataratas':
	case 'Mar del plata':
     alert('Calor 🌞');
	*/