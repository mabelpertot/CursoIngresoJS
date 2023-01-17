function mostrar()
{
	var numero=prompt("ingrese un número entre 0 y 9.");
	
	while (numero>9){
		alert('Dato Invalido');
		numero=prompt("ingrese un número entre 0 y 9.");
    }
	txtIdNumero.value=numero;
}