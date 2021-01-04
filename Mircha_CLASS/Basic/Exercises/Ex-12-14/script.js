/* 
12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F. */




//12) Programa una función que determine si un número es primo 
//(aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.

/* const Deter_Primo = (valor) => {

    let counter = 0

    console.log(`${valor}/1`)

    for(let i=2; i<= valor ; i++)
    {
        if(valor % i == 0){
            console.log(`${valor}/${i}`)
            counter++
        }

        if(counter > 1){
            return false;
            break
        }

    }

    return true

}

if(Deter_Primo(1024)){
    console.log("Es Primo...")
}else{
    console.log("No es Primo...")
} */

//13) Programa una función que determine si un número es par o impar, pe. miFuncion(29)
//devolverá Impar.

/* const Deter_POI = (number) =>{

    if(number%2 === 0){
        console.info("Es par")
    }else{
        console.info("Es impar")
    }
}

Deter_POI(20) */

//14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, 
//pe. miFuncion(0,"C") devolverá 32°F. */
//°0C = 32°F
//(0 °C × 9/5) + 32 = 32 °F
//(0 °F - 32) / (9/5) = -17.7778°C
//(9/5) = 1.8

const Conv_Temp = (value_temp,string_value) =>{

    switch(string_value){

        case "C".toLowerCase():
        console.info("De Celsius a Fahrenheit")
        console.log(`Su resultado es: ${(value_temp * (9/5)) + 32}°F`)
        break;

        case "F".toLowerCase():
            console.info("De Fahrenheit a Celsius")
            console.log(`Su resultado es: ${((value_temp - 32) / (9/5)) }°C`)
            break;
    
    }

}

Conv_Temp(0,"f")
