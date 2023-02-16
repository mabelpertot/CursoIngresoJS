/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexo;

	
	sexo = prompt("Ingrese sexo f o m");
	  
		
	while(sexo != "f" && sexo != "m"){
		sexo = prompt(" Dato Invalido. Re Ingrese sexo f o m");	
	}
	if(sexo == "f"){
		alert("Dato Valido. " + sexo  +" Usted es femenino" );	
	}
	else{
		alert("Dato Valido. " + sexo + " Usted es masculino");
	}
	

	document.getElementById("txtIdSexo").value = sexo;
}

