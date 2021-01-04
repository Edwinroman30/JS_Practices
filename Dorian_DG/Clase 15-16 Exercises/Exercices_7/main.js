/* 7 - Crea 3 arrays. El primero tendra 5 números y el segundo se llamará pares y el  tercero impares, ambos
estarán vacíos. Después multiplica cada uno de los números del primer array por un número aleatorio entre 1 y 10, si
el resultado es par guarda  ese número en el array de pares y si es impar en el array de impares. Muestra por 
consola:
    -la multiplicación que se produce junto con su resultado con el formato 2 x 3 = 6
    -el array de pares e impares */

    first = Array(5);
    let pares = [];
    let impares = [];
   

    first = [24,74,23,14,43];

    for(let a of first){

      let rdn = Math.round(Math.random() * (10 - 1) + 1);   
      let mult = a * rdn;

      console.log(`${a} X ${rdn} = ${mult}`);

      if(mult % 2){
          pares.push(mult);
      }else{
        impares.push(mult);
      }

    }

    for(let pa of pares){
      console.log('Muestra de los Pares');
      console.log(pa);
    }
    
    for(let im of impares){
      console.log('Muestra de los Impares');
      console.log(im);
    }

    