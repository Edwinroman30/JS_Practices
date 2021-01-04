/* 6 - Escribe un programa que permita ir introduciendo una serie indeterminadade números
 mientras su suma no supere 50. Cuando esto ocurra, se debe mostrar el total
  acumulado y el contador de cuantos números se han introducido */

  let num;  
  let counter = 0;
  let pluss = 0;

  do{

    num = parseInt(prompt('Digite un numero:')) 
       if(num == null || num == undefined){alert('error'); break;}
        pluss += num;
        counter++;

    if(pluss > 50){
        alert('Con la cantidad que intentas sumar sobre pasan los 50, wait for result')
        pluss = pluss - num;
        break;
    }
       
  } while(pluss < 50);

  alert(`El total de la suma de los numeros introducidos es ${pluss}`)
  console.log(`El total de la suma de los numeros introducidos es ${pluss}`)

  alert(`El total de numeros introduccidos son ${counter}`);
  console.log(`El total de numeros introduccidos son ${counter}`);