/* 4 - Escribe un programa que pida un número entero mayor que 1 y que escriba si el número primo o no.
    Un número primo es aquel que solo es divisible por sí mismo y la unidad*/

    let num = parseInt(prompt('Digite un numero para saber si es primo o no'))
    let contador = 0;

    if(num == 1){
        alert('El numero 1 no puede ser insertado aqui.....')
    }else
    {
        
        for (let i = 2; i < num; i++) {
            
            if(num % i == 0)
            {
                console.log(`${num} / ${i} = ${num/i}`);
                contador++;
                break;
            }
            
        }

  
    }

    if(contador==0){
        console.log(`${num} es primo`)
        alert(`${num} es primo`)
    }
