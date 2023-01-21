/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
var uno;
var dos;
var igual;

uno=txtIdNumeroUno.value;
dos=txtIdNumeroDos.value;
igual=parseInt(uno) + parseInt (dos)	

alert("El resultado es " + igual);
}