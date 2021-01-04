// Tipos de datos, Set

// --Funciones de set
// * add()
// * has() -buscar si se encuetra dicho valor.
// * delete()
// * clear()

// ! Set no es un array aunque parezca, para converirlo 
// ! en uno, se usa el Array.from()

//Es muy eficiente a la hora de tener datos no repetidos.


const Almacen = new Set(['Pablo',true,'Wenddy',false,true,'Pablo'])

console.log(`Este es el size del Set: ${Almacen.size}`)

Almacen.add('Introduction to POO')
Almacen.add('Pablo II')
Almacen.delete('Pablo')

console.log(`Veremos si esta: ${Almacen.has('Pablo II')}`)


console.log(Array.from(Almacen).map((a) => a+'00'))

console.log(Almacen.values())

Almacen.forEach((elem) => {
    console.log(`ID- Elemento: ${elem}`)
})

// * Se encuetra aqui pero en un formato array luego de eliminar repeticiones.
const Valor_a_Almacenar = Array.from(Almacen)

console.log(...Almacen)

Almacen.clear()
