function mostrar()
{
  /*var numero=Math.floor(Math.random()*11);
  console.log(numero);

  if (numero<'4'){
    alert("Vamos, la proxima se puede");
  }else if (numero>='4'&&numero<='8'){
    alert("APROBÓ");
  }else{
    alert('EXCELENTE');
  }*/

     let nota;

     nota = Math.round(Math.random() * 9 +1);

     if(nota > 9){
       alert("EXCELENTE Nota: "+ nota);
      }
      else if(nota > 4){
        alert("APROBÓ Nota: " + nota);
      }
        else{
          alert("Vamos, la proxima se puede Nota: " + nota)

        }
      }
    
