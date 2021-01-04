/* Ordenar 3 números de mayor a menor */

const number = window.document.getElementById("numbers");
const result = window.document.getElementById('result');

let num1 = prompt("Inserte el primer número:");
let num2 = prompt("Inserte el segundo número:");
let num3 = prompt("Inserte el tercer número:");


 number.innerHTML = `<h1>Los numeros son ${num1},${num2},${num3}</h1>`;


if(num1>= num2 && num1>=num3)
{

    if(num2>=num3)
    {
        result.textContent = `${num1},${num2},${num3}`;
    }
    else
    {
        result.textContent = `${num1},${num3},${num2}`;
    }

}
else
{

if(num2>=num1 && num2 >= num3)
{

    if(num1>= num3)
    {
    result.textContent = `${num2},${num1},${num3}`;
    }
    else
    {
        result.textContent = `${num2},${num3},${num1}`;

    }

}
else
{


    
if(num3>=num1 && num3 >= num2)
{

    if(num1>= num2)
    {
    result.textContent = `${num3},${num1},${num2}`;
    }
    else
    {
        result.textContent = `${num3},${num2},${num1}`;

    }

}

}


}

/* STRING textContent	Devuelve el contenido de texto del elemento. Se puede asignar para modificar.

STRING innerHTML	Devuelve el contenido HTML del elemento. Se puede usar asignar para modificar.
 */
