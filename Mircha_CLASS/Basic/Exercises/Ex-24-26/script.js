/* 24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].
26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.
 */

 ///* 24) Programa una función que dado un arreglo de números devuelva
//un objeto con dos arreglos, el primero tendrá los numeros ordenados en 
//forma ascendente y el segundo de forma descendiente, pe. 
//miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.

/* 
const Ordenar = (order = undefined) => {

    if (!(order instanceof Array))
        console.error("Lo sentimos pero debe de ser un arreglo.")
    if (order === undefined)
        console.warn("No puede estar vacio.")

    for (const i of order) {
        if(isNaN(i))
        console.warn("Por favor inserte un numero")
    }
        
    return { 
         asc: order.map(a => a).sort(),
         desc: order.map(a => a).sort().reverse()
        }
}

console.log(Ordenar([7,5,7,8,6])) */


//25) Programa una función que dado un arreglo de elementos, 
//elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true])
// devolverá ["x", 10, 2, "10", true].

/* const Duplicade = (arre) =>
{
    if (!(arre instanceof Array))
    console.error("Lo sentimos pero debe de ser un arreglo.")
    //Set función clave para eliminar elementos repetidos.
    console.log([... new Set(arre)])
}


Duplicade(["x", 10, "x", 2, "10", 10, true, true]) */

//26) Programa una función que dado un arreglo de números obtenga el 
//promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.

const Average = (arrai =undefined) =>{

    if (!(arrai instanceof Array))
    console.error("Lo sentimos pero debe de ser un arreglo.")
    if(arrai ===undefined)
    console.warn("Debe tener un valor y ser un arreglo.")


    console.log(

        arrai.reduce((a,b,c,d) => (
             b= a+b / d.length
        )
        ,0)
        
        )
}

Average([9,8,7,6,5,4,3,2,1,0])