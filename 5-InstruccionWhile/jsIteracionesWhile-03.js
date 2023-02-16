
function mostrar()
{
	let clave;
	let mensaje;
	
	clave = prompt("Ingrese clave");

	while(clave != "utn750"){
		clave = prompt("Clave Incorrecta, Re Ingrese Clave");
	}
        mensaje = "Bienvenido";

	alert(mensaje);
} 

// BIEN HECHO


/* { do{
	if (flag == 0){
		flag = 1;
	}
	else{
		clave = prompt("Clave invalida!!, re ingrese clave");
}

} while (clave != "utn750");
alert("Clave valida. ");
}*/