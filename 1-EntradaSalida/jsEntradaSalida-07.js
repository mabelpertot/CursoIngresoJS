/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()

/*var uno;
var dos;
var resultado;

uno=txtIdNumeroUno.value;
dos=txtIdNumeroDos.value;
resultado=parseInt(uno)+parseInt(dos);

	alert("La suma es "+resultado);	
}

function restar()
{
	var uno;
	var dos;
    var resultado;

	uno=txtIdNumeroUno.value;
	dos=txtIdNumeroDos.value;
	resultado=parseInt(uno)-parseInt(dos);

	alert("La resta es "+resultado);
}

function multiplicar()
{ 
	var uno;
	var dos;
    var resultado;

	uno=txtIdNumeroUno.value;
	dos=txtIdNumeroDos.value;
	resultado=parseInt(uno)*parseInt(dos);

	alert("La multiplicacion es "+resultado);
}

function dividir()
{
	var uno;
	var dos;
    var resultado;

	uno=txtIdNumeroUno.value;
	dos=txtIdNumeroDos.value;
	resultado=parseInt(uno)/parseInt(dos);

	alert("La division es "+resultado);*/
 
	{
		let num1;
		let num2;
		let resultado;
	
		num1 = parseInt(document.getElementById ("txtIdNumeroUno").value);
		num2 = parseInt(document.getElementById ("txtIdNumeroDos").value);
		resultado = num1 + num2;
	
		alert("La suma es " + resultado);
	}

	function restar()

	{
		let num1;
		let num2;
		let resultado;
	
		num1 = parseInt(document.getElementById ("txtIdNumeroUno").value);
		num2 = parseInt(document.getElementById ("txtIdNumeroDos").value);
		resultado = num1 - num2;
	
		alert("La resta es " + resultado);
	}

	function multiplicar()

	{
		let num1;
		let num2;
		let resultado;
	
		num1 = parseInt(document.getElementById ("txtIdNumeroUno").value);
		num2 = parseInt(document.getElementById ("txtIdNumeroDos").value);
		resultado = num1 * num2;
	
		alert("La multiplicacion es " + resultado);
	}

	function dividir()

	{
		let num1;
		let num2;
		let resultado;
	
		num1 = parseInt(document.getElementById ("txtIdNumeroUno").value);
		num2 = parseInt(document.getElementById ("txtIdNumeroDos").value);
		resultado = num1 / num2;
	
		alert("La division es " + resultado); /*alert("Literal de cadena" + operador concatenador)
	}	