function mostrar()
{
	let estacion = document.getElementById("txtIdEstacion").value;
    let destino = document.getElementById("txtIdDestino").value;
	let viaje = 0

	switch(estacion){
		case "Invierno":
			if(destino == "Bariloche"){
				viaje = 1;
			}
			break;
		case "Verano":
			if(destino == "Mar del plata" || destino == "Cataratas"){
				viaje = 1;
			}
			break;
		case "Otoño":
			viaje = 1;
		case "Primavera":
			if(destino != "Cordoba" ){
				viaje = 1;	
			}
			break;
	   }
		   if(viaje == 1){
			alert("Se viaja");
	   }
	   else{
		   alert("No se viaja");
	}
}
	/*var estacion=txtIdEstacion.value;
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
		}*/
	