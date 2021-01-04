/* 21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.

La expresión regular que uso para el email en este video /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i */

//21) Programa una función que dado un array numérico devuelve otro array con los números 
//elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
/* 
const Eleva_al_Cuadro = (arreglo = undefined) =>
{

    if(!(arreglo instanceof Array))
    console.error("No es un arreglo...")

    const nuevo_Arreglo =
        arreglo.map( (a) =>(Math.pow(a,2))
        )

   return nuevo_Arreglo;

}

console.time(1)
console.log(Eleva_al_Cuadro([2,3,5,6]))
console.timeEnd(1) */

//22) Programa una función que dado un array devuelva el número mas alto y
//el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) 
//devolverá [99, -60].

/* const Getarray = (currenvalue = undefined) => {

    const return_Value = []

    if(currenvalue instanceof Array)
    {
         return_Value.push(Math.max(...currenvalue))   
         return_Value.push(Math.min(...currenvalue))

         return return_Value
    }
    else
    console.error(
        "Esto no es un arreglo..."
    )
    
}


console.log(
Getarray([1, 4, 5, -99, 23])
) */

//23) Programa una función que dado un array de números devuelva un 
//objeto con 2 arreglos en el primero almacena los números pares y en el 
//segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) 
//devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.


const Get_Array = (cvalue = undefined) =>{

    if((cvalue instanceof Array))
    {

         return {pares: cvalue.filter((a) => a%2 === 0), 
        impares: cvalue.filter((a) => a%2 === 1)};

    }
   else{
       console.error("Esto no es un arreglo, FLACO...")
   }
   try{
        for (const i of cvalue) 
    {
        if((isNaN(i)))
        {
            console.error("Estos no son numeros")
            break;
        }
    }

   }
   catch(e){
       console.warn("No es iterable y QUIZAS no es un arreglos.")
   }  
   
}

console.log(Get_Array([1,2,3,4,5,6,7,8,9,0]))