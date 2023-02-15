/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
    let sexo;
	
	sexo = prompt("Ingrese sexo");

	while(sexo != "f" && sexo != "m" || sexo != "F" && sexo != "M"){
		alert("Usted es de sexo Femenino");

	}	
		document.getElementById("txtIdSexo").value = sexo;
	
}