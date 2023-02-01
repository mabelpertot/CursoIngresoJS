/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/

function mostrarAumento ()

{
		let importe;
		let importeFinal;
		let descuento;

		importe = parseFloat(document.getElementById("txtIdImporte").value);
		descuento = importe * 25 / 100;  
		importeFinal = importe - descuento;
	
		document.getElementById("txtIdResultado").value = importeFinal;
	}

	/*{ //10 Bis
		let importe;
		let importeFinal;
		let descuento;
		let porcentaje;

        porcentaje = prompt("Ingrese importe");
		importe = parseFloat(document.getElementById("txtIdImporte").value);
		descuento = (importe * porcentaje) / 100;  
		importeFinal = importe - descuento;
	
		document.getElementById("txtIdResultado").value = importeFinal;
	}*/	
	


	 
	/*var importe;

	importe=txtIdImporte.value;

	resultado=parseInt(importe)-parseInt(importe*25)/100;

	txtIdResultado.value=resultado;*/

	
	