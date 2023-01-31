/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	//Declarar e inicializar de corresponder, variables.
	let seguir;
	let numero;
	let positivos = 0;
	let negativos = 1;
	let flag = 0; // let contadorNegativos = 0; podria ser tambien una variable.

	do{
		//Pedir los numeros ---> dentro del bucle x.
        numero = parseInt(prompt("Ingrese un numero: "));

        //Analizar el signo de cada número ---> dentro del bucle x.
		//Acumulamos el numero en el acumulador correspondiente ---> dentro del bucle x.
		if(numero >= 0){
			positivos = positivos + numero;
		}
		else{
			flag = 1; /* contadorNegtivos++; flag Determina si ingreso al flujo del programa*/
			negativos = negativos * numero;
		}

		seguir = prompt("Quiere ingresar otro numero?");

	}while(seguir == 's');

	//Mostrar los resultados ---> fuera del bucle x.
    if(flag == 0){ //(contadorNegativos == 0){
		negativos = 0;
    }
	document.getElementById("txtIdProducto").value = negativos;
	document.getElementById("txtIdSuma").value = positivos;	
}