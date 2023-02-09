function mostrar()
/*{  /*EJERCICIO RESUELTO CON SWITCH
   Solo utiliza operador == toma explicitamente el valor de la variable para ejecutar los CASE.
   Depura el uso de llaves, parentesis, operadores. 
   No es conveniente utilizar esta funcion para resolver situaciones de rangos*/

    /*let destino;

	destino = document.getElementById("txtIdDestino").value;

	switch(destino){
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
			break;	
	}
}*/

{
	/*EJERCICIO RESUELTO CON IF
	Es conveniente esta funcion para trabajar con rangos.
	Utiliza todos los operadores.
	Para realizar un comentario en HTML <!--    -->*/

	let destino;

	destino = document.getElementById("txtIdDestino").value;

	if(destino == "Bariloche"){
		alert("Oeste");
	}
	else if(destino == "Cataratas"){
		alert("Norte");
	}
	else if(destino == "Mar del plata"){
		alert("Este");
	}
	else{
		alert("Sur");
	}
}

    //REALIZADO CON ANGEL

	//var destino=txtIdDestino.value;

	/*switch(destino){
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
	}*/
