function mostrar()
{
	
	let mes;

	mes = document.getElementById("txtIdMes").value;


	switch(mes){
	
	case "Febrero":
		alert('Este mes tiene 28 dias');
		break;
	case 'Noviembre':
	case 'Abril':
	case 'Junio':
	case 'Septiembre':
		alert('Este mes tiene 30 dias');
		break;
		
			default:
		alert('Este mes tiene 31 dias');
	}		
}	

	/*var mes=txtIdMes.value;
	switch(mes){
		default:
			alert('Este mes tiene 31 dias');
			break;
			case 'Febrero':
			alert('Este mes tiene 28 dias');
			break;
			case 'Noviembre':
			case 'Abril':
			case 'Junio':
			case 'Septiembre':
				alert('Este mes tiene 30 dias');
	}*/
