/* 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120. */

//* 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.

/* console.log("Beautifull Console")

const Arrow_Solution = (parameter) =>{
    return parameter
}

//Formula para general un ramdom
//console.log(Math.random() * (max - min) + min);
let Aleatory_number = Math.round(Math.random() * (600-501) + 501)

console.log(`In an Arrow function man ${Arrow_Solution(Aleatory_number)}`) */

//10) Programa una función que reciba un número y evalúe si es capicúa o no 
//(que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá 
//true.
/* 
const Funcion = (number) =>{

     number = String(number)
        let letler = ""

     for(let i= number.length; i>=0; i--){
         letler += number.charAt(i) 
     }

    if(number == letler){
        return true
    }else{
        return false
    }

}

console.log(`Eso es: ${Funcion(11)}, capicúa.`)

 */
//11) Programa una función que calcule el factorial de un número 
//(El factorial de un entero positivo n, se define como el producto de todos 
//los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120. */


/* const Factory = (number) =>{

    let result = 1;

    for(let i=1; i<=number; i++)
    {
        result = result * i
    }

    return result

}

console.log(Factory(3))
 */
