function mostrar()
{
	let clave;
	
	clave = prompt("Ingrese clave");

	while(clave == "utn750"){
		alert("Clave Correcta ✅" + clave);
		
	clave = prompt("Ingrese clave");
	}
        alert("Clave Incorrecta❌" + clave);
}

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