function mostrar()
{
	let numero;

	for (;  ;) {
    numero = parseInt(prompt("Ingrese un Numero: "));

	if (numero == 9) {
		break;
	}

	alert("Usted ingreso el numero " + numero);
		}
}