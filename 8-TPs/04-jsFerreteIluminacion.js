/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio ()
{
    const PRECIO = 35;
    const IIBB = 10;
    let cantidad;
    let marca;
    let descuento = 0;
    let proporcion;
    let importe;
    
    
    cantidad = parseInt(document.getElementById("txtIdCantidad").value);
    marca = document.getElementById("Marca").value;

    importe = (PRECIO * cantidad);

    if(cantidad >=6)
    {
        descuento = 50;        
    }
    if(cantidad == 5 && marca == "ArgentinaLuz")
    {
        descuento = 40;           
     }
    else
    {
       descuento = 30;
    }
    
    if(cantidad == 4 && marca == "ArgentinaLuz" || marca == "FelipeLamparas")
     {
      descuento = 25;
    }
    else
    {
       descuento = 20;
    }                

    if(cantidad == 3 && marca == "ArgentinaLuz")
    {
       descuento = 15;
    }
    if (cantidad == 3 && marca == "FelipeLamparas")
    {
     descuento = 10;
    }
     else
    {
    descuento = 5;
    }
}    
    proporcion = importe *(descuento / 100);

        precioBruto = cantidad * PRECIO;
    
    proporcion = (precioBruto * descuento) / 100;

    precioFinal = precioBruto - proporcion;

    if(precioFinal>120){
        proporcion = precioFinal * IIBB/100;
        precioFinal = precioFinal + proporcion;
        mensaje = mensaje + "me aplicaron impuestos";
         
}

    alert(mensaje);
    alert(precioFinal);






/*{
    const PRECIO = 35;
    let cantidad;
    let marca;
    let descuento;
    let importeFinal;
    let iibb;
    let precioConDescuento;
    
    cantidad = parseInt(document.getElementById("txtIdCantidad").value);
    marca = document.getElementById("Marca").value;

    switch(cantidad){
        case 1:
        case 2:
            descuento = 0;
            break;
        case 3:
            if(marca == "ArgentinaLuz"){
            descuento = 15;
            }
            else if(marca == "FelipeLamparas"){
                descuento = 10;
            }
            else{
                 descuento = 5;
            }
            break;
         case 4:
            if(marca == "ArgentinaLuz" || marca == "FelipeLamparas"){
                descuento = 25;
            }
            else{
                descuento = 20;
            }
            break;
         case 5:
            if (marca == "ArgentinaLuz"){
            descuento = 40;
            }
            else{
                descuento = 30;
            }
            break;
        default:
            descuento = 50;
    } 
    precioConDescuento = PRECIO - PRECIO * descuento /100;
    document.getElementById("txtIdprecioDescuento").value = precioConDescuento;

    importeFinal = precioConDescuento * cantidad;
    if(importeFinal > 120){
        iibb = importeFinal *10 / 100;
        importeFinal += iibb;
       
        alert(`Importe a pagar $ ${importeFinal}. Usted pago $ ${iibb} de Ingresos Brutos`);
    }
    else{
        alert(`Importe a pagar $ ${importeFinal}.`);
}
}*/

