/* 2 - Escribe un programa que pueda calcular el área de 3 figuras geométricas, triángulo, rectángulo y círculo.
 En primer lugar pregunta de qué figura se quiere calcular el área, después solicita los datos que necesites para 
 calcularlo.
    triángulo = b * h/2
    rectángulo = b * h
    círculo = π * r2 (pi * radio al cuadrado) */

let option = parseInt(prompt('Elige que una opcion: \n 1)Triángulo  2)Rectángulo  3)Círculo'));
const valor = document.getElementById('intermedia');
let b;
let h;
let area;

switch (option) {
    case 1:
       
        b = parseFloat(prompt('Digite la base del triángulo'));
        h = parseFloat(prompt('Digite la altura del triángulo'));
         area = b * (h/2);
        valor.textContent = 'El area es: '+ area;

        break;

        case 2:
             b = parseFloat(prompt('Digite la base del rectángulo'));
             h = parseFloat(prompt('Digite la altura del rectángulo'));
             area = b * h;
            valor.textContent = 'El area es: '+ area;
            break;

            case 3:
                
                 let r = parseFloat(prompt('Ingrese el radio del círculo'));
                 area = Math.PI  * Math.pow(r,2);
                valor.textContent = 'El area es: '+ area;
                break;
    
    default:
        alert('uups ha ocurrido un error elige una opcion en el recuadro.');
        valor.textContent = 'ERROR';
        break;
}

