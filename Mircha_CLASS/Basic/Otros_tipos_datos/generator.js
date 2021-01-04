
// * https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Iterators_and_Generators

// ? https://www.youtube.com/watch?v=6wHGcrVpA2U -> LA MEJOR EXPLICACION

// * Primera faceta es declarar la funcion con el asterisco y no olvidar los  yilds que son como returns.

function* Generador()
{
    yield 'Retorna mensaje1'
    yield 'Otro mensaje'
    yield 'Produciendo un error'
}

// * Almacenar nuestra funcion o mejor dicho generador
const Gshow = Generador()

// * Tipico no olvidar utilizar el .next() porque es iterator.

console.log(Gshow.next())
console.log(Gshow.next())
console.log(Gshow.next())
console.log(Gshow.next()) //? Aqui finaliza con un done: true porque se termino de recorrer todo el contenido.


// TODO otro ejemplo:

console.log('---------------------------------------------------------')

function* Greating(name){
    yield `Hello, ${name}`
}


function* Serie(n,name){

    yield n+1
    yield n+2
    yield Greating(name).next().value
    yield n+3

}

const Ge_series = Serie(30,'Josepe')

/* console.log(Ge_series.next().value)
console.log(Ge_series.next().value)
console.log(Ge_series.next().value) */

for(let v of Ge_series){

    console.log(`Value: ${v}`)
}