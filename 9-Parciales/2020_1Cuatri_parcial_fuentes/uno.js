
function mostrar()
{
  let producto;
  let precio;
  let cantidad;
  let marca;
  let fabricante;
  let minPrecioAlcohol;
  let minUnidadAlcohol;
  let minFabricanteAlcohol;
  let flag = "Es el primer producto";
  let acumCantidadAlcohol;
  let acumCantidadBarbijo;
  let acumCantidadJabon;
  let promedioCompra;
  let contCantidadAlcohol;
  let contCantidadBarbijo;
  let contCantidadJabon;
  let mensaje;
 
  acumCantidadAlcohol = 0;
  acumCantidadBarbijo = 0;
  acumCantidadJabon = 0;
  contCantidadAlcohol = 0;
  contCantidadBarbijo = 0;
  contCantidadJabon = 0;



  for (let index = 0; index < 5; index++) {
	producto = prompt ("Ingrese un producto (`barbijo`,`jabon`, o `alcohol`)");

    while (producto != "alcohol" && producto != "barbijo" && producto != "jabon")
    {    
    producto = prompt ("Re Ingrese un producto (`barbijo`,`jabon`, o `alcohol`)");
    }

    precio = prompt ("Ingrese el precio del producto (`100 - 300`)");
    precio = parseFloat (precio);

    while (precio < 100 || precio > 300) {
    precio = prompt (" Re Ingrese el precio del producto (`100 - 300`)");
    precio = parseFloat (precio); 
    }

    cantidad = prompt ("Ingrese la cantidad del producto (`1 - 1000`)");
    cantidad = parseInt (cantidad);

    while (cantidad < 1 || cantidad > 1000) {
    cantidad = prompt (" Re Ingrese el cantidad del producto (1 - 1000)");
    cantidad = parseInt (cantidad); 
    }

    marca = prompt ("Ingrese la marca");
    fabricante = prompt ("Ingrese el fabricante");
//Desarrollo Punto A

  switch (producto) {
    case "alcohol":

        if (flag == "Es el primer producto") {
          minPrecioAlcohol = precio;
          minFabricanteAlcohol = fabricante;
          minUnidadAlcohol = cantidad;
          flag = "Ya no es el primer producto"; 
        }
        else
        {
         if(precio < minPrecioAlcohol) 
        {
          minPrecioAlcohol = precio;
          minFabricanteAlcohol = fabricante;
          minUnidadAlcohol = cantidad;
        }   
       }  
        acumCantidadAlcohol = acumCantidadAlcohol + cantidad;
        contCantidadAlcohol = contCantidadAlcohol + 1;

       break;

    case "barbijo":
      acumCantidadBarbijo = acumCantidadBarbijo + cantidad;
      contCantidadBarbijo = contCantidadBarbijo + 1;

       break;
      
      default:
      acumCantidadJabon += cantidad;
      contCantidadJabon++;
        
      break;
  }   
}
if (acumCantidadAlcohol > acumCantidadBarbijo  && acumCantidadAlcohol > acumCantidadJabon)
{
  mensaje = "El mas vendido fue el producto alcohol";
  promedioCompra = acumCantidadAlcohol / contCantidadAlcohol; 
  }

else
{
if (acumCantidadBarbijo > acumCantidadJabon) 
 {
  mensaje = "El mas vendido fue el producto barbijo";
  promedioCompra = acumCantidadBarbijo / contCantidadBarbijo;
  
  }
  else 
  {
    mensaje = "El mas vendido fue el producto jabon";
    promedioCompra = acumCantidadJabon / contCantidadJabon;
  
  }
}
alert("El producto mas barato fue alcohol y su precio " + minPrecioAlcohol +
" . La cantidad de unidades fue " + minUnidadAlcohol + " . El fabricante fue " + minFabricanteAlcohol + 
" . El tipo con mas unidades " + mensaje + " . El promedio fue " + promedioCompra + 
" . Las unidades de jabones fueron " + acumCantidadJabon);
}