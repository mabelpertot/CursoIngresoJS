/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	//definicion de variables
 	let edad;
 	let sexo;
 	let estadoCivil;
	let sueldo;
	let legajo;
	let nacionalidad;


	//A.	Edad, entre 18 y 90 años inclusive.
	edad = prompt("Ingrese su edad. (Mayor a 18 años y Menos a 90 años");
	edad = parseInt(edad);

	while (edad < 18 || edad > 90){
	edad = prompt(" RE Ingrese su edad. (Mayor a 18 años y Menos a 90 años)");
	edad = parseInt(edad);
    }
	//B.	Sexo, “M” para masculino y “F” para femenino
	sexo = prompt("Ingrese sexo f o m");
	
	while(sexo != "f" && sexo != "m"){
	sexo = prompt(" Re Ingrese sexo f o m");
    }
	//C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
	estadoCivil = prompt("Ingrese su estado civil 1-soltero, 2-casados, 3-divorciados, 4-viudos");
	estadoCivil = parseInt(estadoCivil);
	
	while(estadoCivil != 1 && estadoCivil != 2 && estadoCivil != 3 && estadoCivil != 4){
	estadoCivil = prompt(" RE Ingrese su estado civil");
	estadoCivil = parseInt(estadoCivil);
	}
	//D.	Sueldo bruto, no menor a 8000.

	sueldo = prompt("Ingrese su sueldo");
	sueldo = parseFloat(sueldo);

	while (sueldo < 8000){
	sueldo = prompt(" RE Ingrese su sueldo");
	sueldo = parseFloat(sueldo);
    }
	//E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
    legajo = prompt("Ingresa un numero de legajo de 4 digitos sin cero a la izquierda");
    legajo = parseInt(legajo);

    while (isNaN(legajo)== true || legajo <1000 || legajo >= 10000) {
	legajo = prompt("Re ingresa un numero de 4 digitos sin ceros a la izquierda");
	legajo = parseInt(legajo);
    }
    //F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
	nacionalidad = prompt("Ingresa su nacionalidad");
    nacionalidad = parseInt(nacionalidad);

    while (nacionalidad != A && nacionalidad != E && nacionalidad != N){
	nacionalidad = prompt("Re ingresa su nacionalidad");
	nacionalidad = parseInt(nacionalidad);

    }

	document.getElementById("txtIdEdad").value = edad;
    document.getElementById("txtIdSexo").value = sexo;
    document.getElementById("txtIdEstadoCivil").value = estadoCivil;
	document.getElementById("txtIdSueldo").value = sueldo;
    document.getElementById("txtIdKegajo").value = legajo;
    document.getElementById("txtIdNacionalidad").value = nacionalidad;
}




