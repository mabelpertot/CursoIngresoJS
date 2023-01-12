function mostrar()
{
	var edad=parseInt(txtIdEdad.value);
	var estado=estadoCivil.value;

	if (estado='Soltero'&&edad>='18'){
		alert ("Es soltero y no es menor");
	}
}