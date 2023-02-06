function mostrar()
{
	let edad;

	edad=parseInt(document.getElementById("txtIdEdad").value);

	if(edad>= 13 && edad<= 17){ 

		alert("✅Es adolescente");
	}
}     

/*Dos operaciones relacionales >= <= y una Logica && ampersand 
Se resuelven las operaciones relacionales y luego la operacion logica cuando esten conbinadas
Si el valor de la edad esta dentro del rango de un adolescente obviamente es adolescente*/

/*Si no estoy afuera del rango
  if(!(edad < 13 || edad > 17 )){
	alert("Es adolescente");
  } 
  Para que se ejecuten los relacionales se encierra dentro de parentesis*/
  /*edad=parseInt(txtIdEdad.value);

	if (edad>='13'&&edad<='17'){
		alert("✅ Es adolescente")
	}*/