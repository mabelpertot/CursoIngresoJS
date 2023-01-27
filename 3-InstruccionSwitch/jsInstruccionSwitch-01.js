function mostrar()
{
	let mes;

	 mes = document.getElementById("txtIdMes").value;


	 switch(mes){
		case "Enero":
			alert("Que comiences bien el año!!!");
			break;
		case "Marzo":
			alert("A clases!!!");
			break;
		case "Julio":
			alert("Se vienen las vacaciones!!!");
			break;
		case "Diciembre":
			alert("Felices fiestas!!!");
			break
	}
}


	/*{
		var mes=txtIdMes.value;

	switch (mes){
		default:
			alert('este mes no importa!!!!');
			break;
			switch (mes) {
				case "Enero":
					alert('que comiences bien el año!!!🎆');
					break;
					case "Marzo":
			alert('a clases!!! 🏫');
			break;
		case "Julio":
			alert('se vienen las vacaciones!!! 🏖️');
			break;
		case "Diciembre":
			alert('Felices fiesta!!! 🎄');
			break;
	}
}*/