function mostrar()
{
	let mes;

	 mes = document.getElementById("txtIdMes").value;

	 switch (mes){
		case "Enero":
		case "Febrero":
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
			alert("Falta para el invierno.");
			break;
		case "Julio":
		case "Agosto":
			alert("Abrigate que hace frio.");
			break;
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
			alert("Ya pasamos el frio, ahora calor!!!");





	/*var mes=txtIdMes.value;

	switch (mes){
		default:
			alert('Falta para el invierno.');
			break;
		case 'Julio':
		case 'Agosto':
			alert('Abrigate que hace frio.');
			break;
		case 'Septiembre':
		case 'Octubre':
		case 'Noviembre':
		case 'Diciembre':
			alert('Ya pasamos el frio, ahora calor!!!');
	}*/

/*	switch (true){
		case ["Septiembre", "Octubre", "Noviembre", "Diciembre"].includes(mes):
			alert('Ya pasamos el frio, ahora calor!!!.');
	}

*/
}
}
