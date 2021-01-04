//Fuentes para las expresiones regulares:

 //Mozilla Developer
 //https:developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions
 //Wikipedia
 //--https://es.m.wikipedia.org/wiki/Expresi%C3%B3n_regular

//Las Expresiones regulares estan compuestas por:

// 1) Cadena de texto.
// 2) Caracter o patrón.
// 3) Bandera o flags

 //Formas de ejecutar una expresion regular:
    //Puede usarse con:
    //  * La Clase RegExp()
    //  * Utilizando / /

   /*  let MyRegExp = new RegExp("lorem\D","i")
    let MyRegExp2 = /lorem\D/i; */

    //Métodos para comprobar o ejecutar la expresión.
    // .test() - Retorna True o False.
    // .exec() - Retorna un array. 
    // Hay otros pero estos suelen ser mas común.

    //Let's get it started
        /*     const Texto_ejemplo = "Lorem2 ipsum dolor sit  amet consectetur adipisicing elit. Quos incidunt eligendi quis cum amet quia autem placeat minima iusto ipsam quasi, sequi soluta officiis, hic ullam unde aliquam quaerat officia!"

            let MyRegExp1 = new RegExp("\d","i")

            console.log(MyRegExp1.test(Texto_ejemplo))
            console.table(MyRegExp1.exec(Texto_ejemplo)) */


    // Utilizare la forma más comoda de trabajar con las expresiones:
let string_result = "Lorem2 ipsum dolor sit  amet consectetur adipisicing elit. Quos incidunt eligendi quis cum amet quia autem placeat minima iusto ipsam quasi, sequi soluta officiis, hic ullam unde aliquam quaerat officia!"


console.warn(string_result)

/*	La barra "|"*/
let regExpCont = /Lorem|amet/ig
console.log(regExpCont.test(string_result))
console.table(regExpCont.exec(string_result))

/*---------------------------------------------*/

regExpCont = /\D/i

console.log(regExpCont.test(string_result))
console.table(regExpCont.exec(string_result))


/*---------------------------------------------*/

let iD = "001-2230489-8"
let Email = "Edwinroman@hotmail.com"


// (El punto decimal) coincide con cualquier carácter precedente excepto un carácter de nueva línea.
regExpCont = /@./

const Arg_Extrac = regExpCont.exec(Email)

console.warn(Arg_Extrac[0])

if(Arg_Extrac[0] == "@g" || Arg_Extrac[0] == "@h" || Arg_Extrac[0] ==  "@o" ){
    console.log("Validated...")
}
else{
    console.error("Invalidate")
}

console.table(Arg_Extrac)

// Forma mejorada de validacion

//Validando el provedor del correo electronico
regExpCont = /@(?=hotmail|gmail|outlook|yahoo|email)/i
let dot_exp = /\.{1}/

console.table(regExpCont.exec(Email))
const result_valitation = regExpCont.test(Email)


if(result_valitation && dot_exp.test(Email)){
    console.log("aprovado puede proseguir")
}else{
  console.log("Error no validated")
}

console.log("Ultima tabla")
console.table(dot_exp.exec(Email))


//How many numbers are there?
const numbers = [45,56,48,66,48,98]

let numExpe = /[0-9]/

console.table(numExpe.exec(numbers))
console.info(`El valor es: ${numExpe.test(numbers)}`)