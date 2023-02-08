function mostrar()
{

	let numero;
	
	numero = prompt("Ingrese numero");

	while(numero <= 9){
		alert("Dato Valido");
		
	numero = prompt("Ingrese numero");
	}
    
	document.getElementById("txtIdNumero").value = numero;
    alert("Dato Invalido");
}

	/*{var numero=prompt("ingrese un número entre 0 y 9.");
	
	while (numero>9){
		alert('Dato Invalido');
		numero=prompt("ingrese un número entre 0 y 9.");
    }
	txtIdNumero.value=numero;
	*/