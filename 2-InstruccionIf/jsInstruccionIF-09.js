function mostrar()
{


	/*var numero=Math.floor(Math.random()*11);

	/*alert(numero);*/

	let numero;
	let maximo = 10;
	let minimo = 1;
	//Declarar variable minimo maximo brinda la posibilidad de modificar solo en variable y actualiza automaticamente el bloque.
	//Rapidez, flexibilidad
	//Minimiza errores

	numero = Math.round(Math.random() * (maximo - minimo) + minimo);
	//Prioridad de operador ()Max-Min lo * Math.random() y a ese resultado le + el valor Min y a ese resultado lo redondea Math.round al entero mas cercano y se guarda en numero.
	//Secuencia de ejecución
	alert(numero);
}
//Funcion matemática aleatoria [0,1). Valor mín 0, valo max 0,999...
//Math.round es redondear y necesita el dato de entrada que debe redondear.
