function mostrar()
{
	/*edad=parseInt(txtIdEdad.value);

	if (edad>='0'){
		alert("✅ No es adolescente")	
	}*/
//Si estoy fuera del rango
	let edad;

	edad=parseInt(document.getElementById("txtIdEdad").value);
 
	if(edad < 13 || edad > 17){
		alert("No es adolescente");
	}
}
/*Version Intuitiva*/
/*Operador logico-conectivo binario OR ||*/
/*Condición que es verdadera para los valores de edad que estan por debajo o encima del rango*/

//Si estoy dentro del rango
//Version contra intuitiva
/*if(!(edad >= 13 && edad <= 17)){
	alert("No es adolescente");
}*/