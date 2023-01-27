function mostrar()
{
   
	/*edad=parseInt(txtIdEdad.value);

	if (edad<="12"){
		alert("Niño");
	}else if (edad>="13" &&edad<="17"){
			alert("Adolescente");
	}else {
			alert("Mayor");
	}*/

	let edad;

	edad=parseInt(document.getElementById("txtIdEdad").value);
	if(edad < 13){
		alert("Es Niño");
	}
		else if(edad >= 13 && edad <= 17){
				alert("Es adolescente");
			}
			else{
				alert("Es adulto");

			}
		}
	