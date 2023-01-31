/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	let nombre; //*Reserva espacio en memoria para guardar el nombre del usuario VARIABLE
	nombre = prompt  ("Cual es tu nombre?");//*Guarda la variable nombre el texto que escribio el usuario en la ventana emergente PROMPT
	document.getElementById("txtIdNombre").value = nombre; //*Copio en nombre que esta en la variable nombre que se encuentra en la caja de texto embebida de la pgina HTML
}

    /*var nombre;
	nombre=prompt("Cual es tu nombre?");

	txtIdNombre.value=nombre;*/
