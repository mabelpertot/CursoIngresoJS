function mostrar()
{
	var estacion=txtIdEstacion.value;
	var destino=txtIdDestino.value;
	var base=15000
	var dif20=(base*20)/100;
	var dif10=(base*10)/100;

	switch (estacion+"|"+destino){
		default:
			void(0);
			break;
		case 'Invierno|Bariloche':
		case 'Verano|Mar del plata':
			alert('El precio final es: '+(base+dif20));
			break;

		case 'Invierno|Mar del plata':
		case 'Verano|Bariloche':
			alert('El precio final es: '+(base-dif20));
			break;	
		case 'Invierno|Cordoba':
		case 'Invierno|Cataratas':
			alert('El precio final es: '+(base-dif10));
			break;
		
		case 'Otoño|Cordoba':
		case 'Primavera|Cordoba':
			alert('El precio final es: '+(base));
			break;

		case 'Verano|Cordoba':
		case 'Otoño|Bariloche':
		case 'Otoño|Cataratas':
		case 'Otoño|Mar del plata':
		case 'Primavera|Bariloche':
		case 'Primavera|Cataratas':
		case 'Primavera|Mar del plata':
			alert('El precio final es: '+(base+dif10));
		}
	}