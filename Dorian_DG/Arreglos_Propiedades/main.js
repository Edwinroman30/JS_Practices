///Arreglos
const valor = document.getElementById('id');
let Estudiante = ['Manuel','Roman',23];

valor.textContent= 'El asunto para el textContent es que si no encuentra el valor al se referencia no se muestrara';
Estudiante.push('Braily');
var e = Estudiante.unshift('ERS');
alert(e);
console.log(Estudiante);

//Copiar mi array
let copyArray = Estudiante.slice();
window.document.write('<h4>Este es el nombre del estudiante meritorio>>>>'+Estudiante[0]+'</h4>');