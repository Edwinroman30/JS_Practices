/* 
18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.
20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero. */ 


//18) Programa una función que dada una cadena de texto cuente el número de
// vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4,
// Consonantes: 5.


/* const Counter = (cd = undefined) =>{

    if(cd== undefined)
    console.warn("Por favor inserte un valor")

    if(typeof(cd) != "string")
    console.error("Necesito un STring o Cadena")

    cd = cd.split("")

    let vowel=0,
    consonant = 0

    cd.forEach( (a) =>{
        if(a=="a"|| a=="e" || a=="i" || a=="o" || a=="u")
            vowel++
        else if(a==" "){
            
        }else
            consonant++
    })

    console.log(`Se encontraron ${vowel} vocales y ${consonant} consonantes.`)

}

let cadena = "EDWIN cadena".toLowerCase()
Counter(cadena) */

//19) Programa una función que valide que un texto sea un nombre válido,
// pe. miFuncion("Jonathan MirCha") devolverá verdadero.

/* const Validad_name = (name = undefined) =>{

    if(name == undefined || typeof(name) != "string"){
        console.error("Hubo un error, no es CADENA o ESta vacia...")
    }
    else{

        const Reg_expre = /[^\w ]/ig
       // La expresión indicada permite encontrar, por ejemplo, cualquier 
       //carácter que no sea alfanumérico o un espacio, es decir, busca todos 
       //los símbolos de puntuación y demás caracteres especiales. 


        if(!Reg_expre.test(name)){
           return true
        }
        else{
            return false
        }

    }
}

let  nombre = "Edwin"
if(Validad_name(nombre))
console.log(`Si ${nombre} es un name.`)
else
console.log(`NO, ${nombre} es un name`) */


//20) Programa una función que valide que un texto sea un email válido, 
//pe. miFuncion("jonmircha@gmail.com") devolverá verdadero. */ 

const Validar_email = (email) =>{


const expresion = /\@+(?!\.)/
//Coincide con 'x' solo si 'x' no es seguida por 'y'. Es una previsión negativa.
const expresion2 = /\@/
const expresion3 = /\./

    if(expresion.test(email) && expresion2.test(email)  && expresion3.test(email))
        return true
    else
        return false

}

console.log(Validar_email("jonmircha@gmail.com"))