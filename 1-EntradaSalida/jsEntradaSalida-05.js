/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
//*var nombre;
//*var edad;

//*nombre=txtIdNombre.value;
//*edad=txtIdEdad.value;

//*alert("Usted se llama "+nombre+" y tiene "+edad+" años");
//*alert(`Usted se llama ${nombre} y tiene ${edad} años`) //*Temple string-plantilla de cadena

   let nombre;
   let edad;
   
   nombre = document.getElementById("txtIdNombre").value;
   edad = document.getElementById("txtIdEdad").value;

   alert("Usted se llama "+ nombre + " y tiene " + edad +" años");
}
//*back tick es el asento invertido-AltGr+Tabs  ``      	
