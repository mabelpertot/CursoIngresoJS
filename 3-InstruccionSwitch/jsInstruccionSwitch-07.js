function mostrar()
{
	var destino=txtIdDestino.value;

	switch(destino){
		default:
			void(0)
			break;
		case 'Bariloche':
			alert('Oeste');
			break;
		case 'Cataratas':
			alert('Norte');
			break;
		case 'Mar del plata':
			alert('Este');
			break;
		case 'Ushuaia':
			alert('Sur');
		}
}