//Operadores

let n1;
let n2;

n1 = 23;
n2 = 2;


console.log("Orignal values");
console.log(n1);
console.log(n2);
console.log("---------------");

//Suma
console.log(n1 + n2);
//Resta
console.log(n1 - n2);
//Multiplicación
console.log(n1 * n2);
//Division
console.log(n1 / n2);
//Modulo
console.log(n1 % n2);


// Operadores de Asignación
console.log("Operadores de " + "Asignación:");

n2 += n2;
console.log(n2);

n2 -= 1;
console.log(n2);

n2 *= 10;
console.log(n2);

n2 /= 2;
console.log(n2);

n2 %= 2;
console.log(n2);


// Operadores de Incrementación
console.log("Operadores de " + "Post-Incrementación:");

let numero = 2;

numero++;
console.log(numero++);
console.log(numero);

console.log("Otro ejemplo");
//Primero elavalua y luego ejecuta.
console.log(numero--);
console.log(numero);


// Operadores de Pre-Incrementación
console.log("Operadores de " + "Pre-Incrementación:");

let numero2 = 5;

//Realiza la ejecución al instante. 
++numero2;
console.log(numero2);
console.log(++numero2);

