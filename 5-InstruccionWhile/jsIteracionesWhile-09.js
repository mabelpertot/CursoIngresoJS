/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	//Declaración de variables.
	let seguir;
	let numero;
	let maximo; 
	let minimo;
	let flag = 0;
	
    //Se genera un bucle de tipo mientras el usuario desee. (do while).
	do{
	//Se solicita el numero.	
        numero = parseInt(prompt("Ingrese un numero: "));
    //Reconocer si se pide dato por primera vez.
		if(flag == 0 || numero > maximo){
	//Si es por primera vez inicializar variables.
			maximo = numero;
		}
	//Si no lo es actualizar de ser necesario mínimo y máximo.
         if (flag == 0 || numero < minimo){
			 minimo = numero;
			 flag = 1;
			}

		seguir = prompt("Quiere ingresar otro numero?");

	} while(seguir == 's');
	//Muestro dato mínimo y máximo(caja de txt).
    }
	document.getElementById("txtIdMaximo").value = maximo;
	document.getElementById("txtIdMinimo").value = minimo;
		
