/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()

	/*var sueldo;
	
	sueldo=txtIdSueldo.value;
	
	resultado=parseInt(sueldo)+parseInt(sueldo*10)/100;

	txtIdResultado.value=resultado;*/

{
	let sueldo;
	let nuevoSueldo;
	let aumento;

	sueldo = parseFloat(document.getElementById("txtIdSueldo").value);
	aumento = sueldo * 10 / 100;  
	nuevoSueldo = sueldo + aumento;

	document.getElementById("txtIdResultado").value = nuevoSueldo;
}	
