
//Uso de prototipos en JS

/* function Animal (nombre,genero){
    this.nombre = nombre;
    this.genero = genero;

    this.Saludar = function(){
        console.log("Hola, Helllo")
    }
}

console.log(Animal)

let guibu = new Animal("guibu","Masculine")

// Este es un propotipo  de animal
console.log(guibu) */

//Generalmente los prototipos son de Objects

//Las Arrow_functions son muy globales razon por la que 
//debemos de tener cuidado en usarlas observemos un ejemplo
//en el siguiente objeto

let abanico = {
    marca:"Electric_home",
    girar: () => {
        console.log(this)
    }
}

// al hacer un llamado de esta funcion
  abanico.girar()
//Si vemos esta haciendo referencia al objeto Windows
//esto puede ser útil no es malo pero, no necesitamos
//algo del objeto global en este caso ES Windows, veamos
//si la modificamos


let abanico2 = {
    marca:"Electric_home",
    girar:function(){
        console.log(this)
    }
}

console.log(abanico2.girar())
//como podemos ver aquí hace   referencia al objeto
//local en este caso abanico2 y es el que necesitamos.
//En fin esta es la diferecia ,,,, La Arrow hacen una
//referencia global y las function lo realizan local.


 function Animal (nombre,genero){
    this.nombre = nombre;
    this.genero = genero;
    
    // Aqui estaban los metodos ahora son prototipos
}

let guibito = new Animal("Guibito","Male")
let guibu = new Animal("guibu","Masculine")

//Podemos ver que los metodos a cada objeto se genera una copia y para la memoria podria ser problema, lo mejor seria
//aislar los metodos de la funcion y agragarlos como prototipo.

//antes se encontraban dentro de una funcion como una clases de POO ahora son prototipo
Animal.prototype.Saludar = function(){
    console.log("Hola, Helllo")
}
Animal.prototype.Comer = function(){
        console.log("Estoy comiendo")
}

console.log(guibu.Saludar())
console.log(guibito.Comer())
//Con esto se soluciona el problema anterior, porque esta colgado dentro del prototipo animal
console.log(guibito) //Sí, en nuestro objeto instanciado abrimos _proto_ veremos que las funciones
//fueron asignadas al prototipo.
