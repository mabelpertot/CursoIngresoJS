function mostrar()
{
	/*var edad=parseInt(txtIdEdad.value);
	var estado=estadoCivil.value;

	if (estado='Soltero'&&edad>='18'){
		alert ("Es soltero y no es menor");
	}*/

	let edad;
	let estado;

	edad = parseInt(document.getElementById("txtIdEdad").value);
	estado = document.getElementById("estadoCivil").value;

	if(estado == "Soltero" && !(edad < 18)){
		alert("Es soltero y no es menor");
	}
}
/*Negativa Anti Intuitiva
If(!(edad < 18 || estadoCivil != "Soltero")){
	alert( "Es soltero y no es menor")
}*/