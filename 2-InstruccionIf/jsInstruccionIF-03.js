function mostrar()
{
	/*edad=parseInt(txtIdEdad.value);

	if (edad>='18'){
		alert("✅ Es mayor de edad");
	}

	edad=parseInt(txtIdEdad.value);

	if (edad<="17"){
		alert("⬇️Es menor de edad")
    }*/

	let edad;
	edad = parseInt(document.getElementById("txtIdEdad").value);

	if(edad >= 18){
		alert("Es mayor de edad");
	}
    else{
		alert("Es menor de edad");
}
}
/*if(true-falso){
	alert("La condición es verdadera");
}
else{
	alert("La condición es falsa");
}
}
/*alert("Estoy despues del bloque if/else");*/