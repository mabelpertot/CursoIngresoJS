function mostrar()
{
   
	edad=parseInt(txtIdEdad.value);

	if (edad<="12"){
		alert("Niño");
	}else if (edad>="13" &&edad<="17"){
			alert("Adolescente");
	}else {
			alert("Mayor");
	}
}





