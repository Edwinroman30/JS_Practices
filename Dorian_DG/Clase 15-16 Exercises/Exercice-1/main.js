// 1 - Solicita un nombre, la edad y muestra por consola el mensaje "Hola ____, tienes ____ años y el año que viene tendrás ____ años"
// Realiza el ejercicio con prompt(mensaje) y haz uso de los template strings

let name = prompt("Digite su nombre").toUpperCase();
let age = prompt("Digite su edad");

const mensaje = document.getElementById('intermedia');

mensaje.textContent = `Buenas noches Mr.${name}, su edad es ${age} y el proximo ano tendra ${parseInt(age)+1}`;
