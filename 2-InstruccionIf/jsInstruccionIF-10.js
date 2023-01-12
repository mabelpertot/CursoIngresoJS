function mostrar()
{
  var numero=Math.floor(Math.random()*11);
  console.log(numero);

  if (numero<'4'){
    alert("Vamos, la proxima se puede");
  }else if (numero>='4'&&numero<='8'){
    alert("APROBÓ");
  }else{
    alert('EXCELENTE');
  }
 }