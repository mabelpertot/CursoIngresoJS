/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{	//Declaración de variables.
	let seguir;
	let numero;
	let contadorPositivos = 0; 
	let contadorNegativos = 0;
	let contadorCeros = 0;
	let contadorPares = 0;
	let acumuladorPositivos = 0;
	let acumuladorNegativos =0;
	let promediosPositivos = 0;
	let promediosNegativos = 0;
	let diferencia;

	
    //Se genera un bucle de tipo mientras el usuario desee. (do while).
	do{
	//Se solicita el numero.
		numero = parseInt(prompt("Ingrese un numero: "));
    //Analizar el signo de numeros y actuar en consecuencia.
	     
	    if (numero < 0){
			//negativos
			acumuladorNegativos += numero;
			contadorNegativos++;
		}
		else if(numero == 0){
			//ceros.
			contadorCeros++;
		}
			else {
		    //positivos.
				acumuladorPositivos += numero;
				contadorPositivos++;
			
		}
		     //Analizar si el numero es paridad.
			 if(numero % 2 == 0){
				contadorPares++;
			 }

		seguir = prompt("Quiere ingresar otro numero?");

	} while (seguir == 's');
    // Hacer los calculos que necesitan los datos conseguidos durante el bucle.
	if (contadorPositivos > 0){
    promediosPositivos = acumuladorPositivos / contadorPositivos;
	}
	if (contadorNegativos > 0){
	promediosNegativos = acumuladorNegativos / contadorNegativos;
	}

	diferencia = contadorPositivos - contadorNegativos;

     console.log("1-Suma de los negativos: " + acumuladorNegativos);
	 console.log("2-Suma de los positivos: " + acumuladorPositivos);
	 console.log("3-Cantidad de positivos: " + contadorPositivos);
	 console.log("4-Cantidad de negativos; " + contadorNegativos);
	 console.log("5-Cantidad de ceros: " + contadorCeros);
	 console.log("6-Cantidad de pares: " + contadorPares);
	 console.log("7-Promedio de positivos: " + promediosPositivos);
	 console.log("8-Promedio de negativos: " + promediosNegativos);
	 console.log("9-diferencia" + diferencia);
}