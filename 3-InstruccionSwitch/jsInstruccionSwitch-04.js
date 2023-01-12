function mostrar()
{
	var mes=txtIdMes.value;
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
	}
}