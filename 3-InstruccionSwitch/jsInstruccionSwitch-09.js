function mostrar()
{
	
	const PRECIO = 15000;
	let estacion
    let destino
    let precioFinal;
    let descuento = 0;
	let aumento = 0;
	//Declaracion de variables.

	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;
   //Relevamiento de datos.
  // Segun estacion y destino evaluar aumentos y descuentos.
   switch(estacion){
	case "Invierno":
		if(destino == "Bariloche"){
			aumento = 20;
		}
		else if(destino == "Mar del plata"){
			descuento = 20
		}
		else{
			descuento = 10;
		}
		break;
	case "Verano":
		if(destino == "Bariloche"){
			descuento = 20;
		}
		else if(destino == "Mar del plata"){
			aumento = 20
		}
		else{
			aumento = 10;
		}
		break;
	case "Otoño":
	case "Primavera":
		if(destino == "Cordoba" ){
		    aumento = 0;	
		}
		else{
			aumento = 10;
		}
		break;
   }
       if(aumento != 0){
		precioFinal = PRECIO + PRECIO * aumento / 100;
   }
   else if(descuento != 0){
	    precioFinal = PRECIO - PRECIO * descuento /100;
   }
   else{
	   precioFinal = PRECIO; 
   }
       alert("Precio final $ "+ precioFinal);
}



	/*RESUELTO CON ANGEL
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
		}*/
	