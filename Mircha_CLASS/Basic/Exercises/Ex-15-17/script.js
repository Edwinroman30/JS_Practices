/* 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.
16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).*/

///* 15) Programa una función para convertir números de base binaria a 
//decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.

/* const Convertidor_Binario = (numero=undefined,base=undefined)=>{
    if(numero === undefined || typeof(numero) != "number")
    console.error("Digite un valor no puede estar vacia")
    if(base === undefined || typeof(base) != "number")
    console.warn("Digite un valor no puede estar vacia en la base")

    if(base === 2)
    console.log(`${numero} en base a ${base} es igual a ${parseInt(numero,base)} binario o base 10`)
    else if(base === 10){
        console.log(`${numero} en base a ${base} es igual a ${(numero.toString(2))} decimal o base 2`)
    }else{
        console.log("Solo acepto dos tipos de base 2 y 10")
    }
}

Convertidor_Binario(1253,1) */

//16) Programa una función que devuelva el monto final después de aplicar un
//descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.

/*  const Discount = (prices=undefined,discount=undefined) =>{
    
    if(prices === undefined || typeof(prices) != "number")
    console.warn("Digite por favor un numero")
    if(isNaN(discount))
    console.warn("Digite por favor un numero")

    console.log(`A su producto XXX de precio ${prices} se le aplicara un ${discount}% (${(prices*discount)/100}) y su monto neto es: ${prices - ((prices*discount)/100)}`)

 }

 Discount(10500,20) */

 //17) Programa una función que dada una fecha válida determine cuantos años han
 //pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).*/

 const Master_Data = (fecha)  =>{

    //Validation
    if(fecha instanceof Date)
    {
        console.info("Es una fecha.")

         let fecha_ML = Math.floor(fecha.getTime())
         let fecha_AC = Math.floor(new  Date().getTime())


         let Result_date = (fecha_AC  - fecha_ML) / (1000*60*60*24*365)

         return Math.floor(Result_date);


    }else
    {
         console.error("Error debe depositar una fecha")
    }
 
 }


 //Recordar que las fechas comienzan en cero ejemplo |0:Enero,1:Febrero, etc...
 const valor = Master_Data(new Date("1961"))

 if(Math.sign(valor) == -1)
    console.log(`Faltan ${Math.abs(valor)} año.`)
 else
  console.log(`Han pasado ${valor} año.`)