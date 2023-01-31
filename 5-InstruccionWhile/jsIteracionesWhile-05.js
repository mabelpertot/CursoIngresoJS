/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
    let sexo;
	
	sexo = prompt("Ingrese sexo");

	while(sexo == 'f'){
		alert("Usted es de sexo Femenino");

	}
		sexo = prompt("Ingrese sexo");	
		alert("Usted es de sexo Masculino");
		document.getElementById("txtIdSexo").value = sexo;
	}