/* 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
 */

//   1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.

/* const App_Text = (string_1) =>{

    try{

        const regt = /[a-z]/ig
        if(string_1 === "" || !isNaN(string_1) || !(regt.test(string_1))){
            console.error("Aqui solo aceptamos cadenas.")
            
        }
        else{
            let num = string_1.length;
            console.log(num)
        }

    }catch(e){
        console.error(e)
    }

} 

App_Text(true); */

// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) 
//devolverá "Hola".
/* 

const text_Cut = (string_1,numb_to_cut) => {

    try{

        const regt = /[a-z]/ig
        if(string_1 === "" || !isNaN(string_1) || !(regt.test(string_1)) && (isNaN(numb_to_cut) || numb_to_cut > string_1.length) ){
            console.error("Hay un error en la cadena o el numero...")
            
        }
        else{
            
            //my7code
          console.log(string_1.slice(0,numb_to_cut))

        }

    }catch(e){
        console.error(e)
    }

}  

text_Cut("Platzi con Euge Uller",9) */


//3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') 
//devolverá ['hola', 'que', 'tal'].


/* const Get_text = (nvalues,coma) =>{

   let almacen = nvalues.split(" ")

   for (const iterator of almacen) {
        console.log(iterator+coma) 
   }
  
} 

Get_text("Hola que tal","+") */


//4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.


const Repeat_text = (text,numbrep) =>{

    for(let i = 1; i<=numbrep; i++){
        console.log(text)
    }
}

Repeat_text("Eso es tu mamá",5)