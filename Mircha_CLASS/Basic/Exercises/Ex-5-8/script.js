/* 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5. */

// 5) Programa una función que invierta las palabras de una cadena de texto,
// pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".

/* const Invertir = (cadena) =>{
    let nuevacadena = " "

    for(let i = cadena.length; i >= 0; i--){
        nuevacadena +=  cadena.charAt(i)
    }

    return nuevacadena
}

let mo = "Hola hijo de tu pu***, soy Anonimos u hackeo tu madre"

console.log(Invertir(mo)) */

//6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, 
//pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

/* const Contar_palabra = (cadena,buscar) =>{

    if(cadena === "" || cadena == undefined || (buscar === "" || buscar == undefined)){
        console.warn("No puede proseguir con el proceso no se puede debido a que no cumple los parametros de ser una cadena...")
    }else{
        
        const reg = new RegExp(buscar,"ig")//* const Regexpre = /buscar/ig /

        let Arreglos_Repeticiones = 0;

        if(cadena.match(reg) != null){
            Arreglos_Repeticiones =  cadena.match(reg).length
        }
        
        console.log(`El número de coinsidencia de [${buscar}] es igual en la cadena a: ${Arreglos_Repeticiones}`)

    }

}

let cadena_a_mostrar = "Juan el molon, se fue con su tio Juan quien el vecino se llama juan"

console.log(cadena_a_mostrar)
Contar_palabra(cadena_a_mostrar,"Juan") */


//7) Programa una función que valide si una palabra o frase dada, es un palíndromo
// (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
/* 
const Palindro = (frase) => {

    let cadena_base = ""

    for(let i = frase.length; i>=0 ; i--)
    {
        cadena_base += frase.charAt(i)
    }

    frase = frase.toLowerCase()
    cadena_base = cadena_base.toLowerCase()

    if( frase === cadena_base){
       
        console.log(cadena_base)
        return true
    }
    else{
        console.log(cadena_base)
        return false
    }

}

console.log(Palindro("oSo"))
 */


//8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. 
//miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5. */

const Remove_Patrones = (cadena,pa_Eliminar) =>{

    const Patron = new RegExp(pa_Eliminar,"ig")
    let modiCadena = ""
    
    modiCadena = cadena.replace(Patron,"")

    console.log(modiCadena)
}

let Memory = "xyz1, xyz2, xyz3, xyz4 y xyz5"

Remove_Patrones(Memory,"xyz")