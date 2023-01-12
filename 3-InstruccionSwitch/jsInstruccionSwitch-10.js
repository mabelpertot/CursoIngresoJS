function mostrar()
{
	var estacion=txtIdEstacion.value;
	var destino=txtIdDestino.value;

	switch(estacion+"|"+destino){
		default:
			alert('🚫 No se viaja a '+destino+ ' en '+estacion);
			break;		
			case 'Invierno|Bariloche':
			case 'Verano|Mar del plata':
			case 'Verano|Cataratas':
            case "Otoño|Bariloche":
			case "Otoño|Cataratas":
			case "Otoño|Mar del plata": 
			case "Otoño|Cordoba":
			case "Primavera|Cataratas":
			case "Primavera|Mar del plata": 
			case "Primavera|Cordoba":
			alert('✈️ Se viaja a '+destino+ ' en '+estacion);
			break;			
		}
	}