function mostrar()
{ 
//Dclaro variables.
	let numero;
	let contadorPares = 0;
   //Pido numero
   numero = parseInt(prompt("Ingrese un numero"));

   //Una de las variables debe tomar los valores desde el 1 hasta el numero ingresado
    for (let i = 1; i <= numero; i++){
	//Para cada uno de los valores que toma la variable, analizar la pariedad.
	//Cuando encuentra un par lo cuenta y lo muestra.
	   if(i % 2 == 0) {
		contadorPares++;
		console.log(i);
	   }	
    }  
   //Cuando se analicen todos los valores, se muestran los pares.
   console.log("Pares encontrados " + contadorPares);

} //FIN DE LA FUNCIÓN