/*

//.................. DECLARACION DE VARIABLES.........................................................

//DECLARO VARIABLES
let = VARIABLE;

VARIABLE = ALGO;

//.....................................................................................................


//.................. BUCLE PRINCIPAL PARA PEDIR DATOS MIENTRAS SE ACEPTE EL CONFIRM....................

//BUCLE PRINCIPAL PIDO DATOS Y VALIDO
let respuesta;

respuesta = true;

    while (respuesta == true) 
	{
        //PEDIDO DE DATOS


    
        confirm("quiere continuar?");
    }

//......................................................................................................


//....................... PEDIDO DE DATOS SIN VALIDACION................................................

        //PIDO DATOS SIN VALIDAR
        VARIABLE = prompt("TEXTO");

//......................................................................................................


//....................... PEDIDO DE DATOS CON PROMPT Y VALIDACION (TEXTO)...............................

        //PIDO DATOS TEXTO VALIDANDO
        posicion = prompt("TEXTO)");
		while (posicion != "TEXTO" && posicion != "TEXTO2" && posicion != "TEXTO3") 
		{
		posicion = prompt("Reingrese posicion (Arquero, Defensor, Mediocampista o Delantero)");
		}

//......................................................................................................


//....................... PEDIDO DE DATOS CON PROMPT Y VALIDACION (NUMEROS).............................

        //PIDO DATOS NUMEROS VALIDANDO
        VARIABLE = prompt("TEXTO");
		VARIABLE = parseInt(VARIABLE);
		while(isNaN(VARIABLE) == true || VARIABLE < 0)
        {
            VARIABLE = prompt("TEXTO");
            VARIABLE = parseInt(VARIABLE);
        }

//......................................................................................................


//....................... OBTENER UN MAXIMO.............................................................

        //DECLARO UNA FLAG AL INICIO Y OBTENGO UN MAXIMO
		if(VARIABLE1 > VARIABLE2 || FLAG == false)
		{
			VARIABLE2 = VARIABLE1;
			VARIABLE3 = VARIABLE;
			FLAG = true;
		}

        //EJEMPLO
        //a)El goleador del torneo
		if(cantidadGoles > maximoGoles || FLAG == false)
		{
			maximoGoles = cantidadGoles;
			nombreMaxGoleador = nombre;
			FLAG = true;
		}

//......................................................................................................


//....................... INFORMAR DATOS OBTENIDOS......................................................

//INFORMO POR DOCUMENT.WRITE()

document.write(`
TEXTO: ${VARIABLE}
TEXTO: ${VARIABLE}
TEXTO: ${VARIABLE}
`);


//INFORMO POR ALERT()

alert(`
TEXTO: ${VARIABLE}
TEXTO: ${VARIABLE}
TEXTO: ${VARIABLE}
`);


//INFORMO POR CONSOLE.LOG()

console.log(`TEXTO: ${VARIABLE}`);
console.log(`TEXTO: ${VARIABLE}`);
console.log(`TEXTO: ${VARIABLE}`);


console.log(`
TEXTO: ${VARIABLE}
TEXTO: ${VARIABLE}
TEXTO: ${VARIABLE}
`);


//INFORMO VALIDANDO SI ALGUNA VEZ PASO POR LA FLAG O SINO MUESTRO OTRO MENSAJE

if(FLAG == true)
	{
		console.log(`TEXTO: ${VARIABLE}`);
	}
	else
	{
		console.log(`TEXTO DICIENDO QUE NO HUBO NADA`);
	}

//......................................................................................................


//...............................OPERACION PARA SABER QUE NUMEROS SON PARES.............................
        //OPERACION MATEMATICA
        NUMERO % 2 == 0


        //EJEMPLO

        if (NUMERO % 2 == 0)
        {
            //ES PAR
        }
        else
        {
            //ES IMPAR
        }

//.........................................PROMEDIO.....................................................

        RESULTADO = (CONTADORindividual * CONTADORtotal) / 100

//......................................................................................................


//.........................................PORCENTAJE...................................................

        RESULTADO = (CONTADORindividual * 100) / CONTADORtotal

//......................................................................................................


//..............................CONTADOR................................................................
       
        var contador = 0;       //SIEMPRE SE INICIALIZA AL INICIO

        //CONTADOR

        //SUMA
        contador++;

        //RESTA
        contador--;

//......................................................................................................



//..............................ACUMULADOR..............................................................
 
        var acumulador = 0;   //SIEMPRE SE INICIALIZA AL INICIO

        //ACUMULADOR
        
        //SUMA
        acumulador += valor;
        acumulador = acumulador + valor;

        //RESTA
        acumulador -= valor;
        acumulador = acumulador - valor;

//......................................................................................................


//..............................ESTRUCTURAS.............................................................

        //ESTRUCTURA IF

        if (CONDICION)
        {

        }
        else
        {

        }


        //ESTRUCTURA SWITCH

        switch (VARIABLE)
        {
            case "CASO1":

                break;
            case "CASO2":
                
                break;
            case "CASO3":
                
                break;
        }


        //ESTRUCTURA WHILE

        while (CONDICION)
        {

        }



//......................................................................................................


//.............................CONDICIONAR QUE SOLO ENTRE AL BUCLE X VECES..............................

    var ingresoUnicaVez = 0; //SIEMPRE SE INICIALIZA AL INICIO

    
    while (ingresoUnicaVez != 1) {
        alert("hola");

		ingresoUnicaVez++;
    }
    
    alert("chau");

//......................................................................................................

1) En la primera oración del enunciado siempre te indica cuál es el mejor ingreso para ciclos. Si la frase contiene una cantidad determinada de ingreso, mejor usar for. Si la frase indica "Ingresar cuantas veces desee el usuario" o no indica nada, mejor usar while.
2) Inicializá y asigná todas las variables. En cada ejercicio de parcial, son las que están denotadas por el * o simplemente son los ítems a ingresar. A medida que vas cargando los prompt, andá definiendo las variables con el let.
3) Armá las validaciones luego de la asignación de cada variable. Las validaciones suelen estar entre paréntesis en el enunciado.
4) Los resultados y operaciones generales suelen ir fuera del ciclo while o for, así que lo dejaría para el último luego de tener todo definido, asignado y validado.

Con que tengas armado algo como ese orden te acorda tiempos por si no sabés por donde empezar*/