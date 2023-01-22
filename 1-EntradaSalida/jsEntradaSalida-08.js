function SacarResto()

/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/

    /*var dividendo;
	var divisor;
	var resultado;

	dividendo=txtIdNumeroDividendo.value;
	divisor=txtIdNumeroDivisor.value;
	resultado=parseInt(dividendo)%parseInt(divisor);

	alert("El resto es "+resultado);*/
	
	{
		{
			let dividendo;
			let divisor;
			let resto;
		
			dividendo = parseInt(document.getElementById ("txtIdNumeroDividendo").value);
			divisor = parseInt(document.getElementById ("txtIdNumeroDivisor").value);
			resto = dividendo % divisor;
		
			alert("El resto es " + resto);
	}
	}
/* Ejemplo 
   let x = 40;
   let y = 20;
   let z = 10;
   let = resultado:
   resultado = x + y *z;
   alert(resultado); 
   La operacion se separa en terminos. La prioridad de operadores es () % */ 
   /*Si en una operacion se combina prioridad de operadores, se resuelve de izquierda a derecha*/
   /*Para resolver x + y * z y aplicar la operacion de suma y luego multiplicar se encierra en parentesis (x + y) * z*/
   /*Parentesis tiene la mayor prioridad*/