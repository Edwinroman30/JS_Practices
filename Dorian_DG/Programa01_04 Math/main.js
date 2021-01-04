//Usando el Objeto estico Math.
/*
Enlaces de información: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Math
*/

let numero = 30;

console.log(numero);

//Somethings constans in Javascript PI and E

console.log(Math.PI); //PI

console.log(Math.E); //E

/*Valor absoluto.
Es el numero entero en su forma base.*/
console.log(Math.abs(-75));


//Devuelve el entero más pequeño mayor o igual que un número.
console.log(Math.ceil(32.8));

//Devuelve el mayor entero menor que o igual a un número.
console.log(Math.floor(32.9));

//Las devoluciones de base a la potencia de exponente, que es, baseexponent.
console.log(Math.pow(4,2));

//Devuelve el valor de un número redondeado al número entero más cercano.
let decimal = 34.55;

console.log(`El valor de la variable base ${decimal} y  su
valor redondeado -->` + Math.round(decimal));

//Devuelve la raíz cuadrada positiva de un número.
console.log(Math.sqrt(49));

//Devuelve un número pseudo-aleatorio entre 0 y 1.
console.log(Math.random());

//Formula para general un ramdom
//console.log(Math.random() * (max - min) + min);
console.log(Math.round( Math.random() * (10 - 1) + 1)); 

console.log(Math.sign(2)); // -1, 0, 1


// Ctrl+K Ctrl+C Add line comment
// Ctrl+K Ctrl+U Remove line comment
// Ctrl+/ Toggle line comment        ------->
// Shift+Alt+A Toggle block comment  ------->
