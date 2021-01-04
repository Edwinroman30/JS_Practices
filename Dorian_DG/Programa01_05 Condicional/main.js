/* #6 - Curso básico de JavaScript 2018 (Ordenar 3 números de mayor a menor) */

let num = Math.round(Math.random() * (100 - 1) + 1);
let num2 = Math.round(Math.random() * (100 - 1) + 1);
let num3 =  Math.round(Math.random() * (100 - 1) + 1);

console.log("(Ordenar 3 números de mayor a menor)");

if(num > num2 && num > num3)
{
console.log(`${num} es mayor que ${num2} y ${num3}`);
}
else
{
    if(num2> num && num2> num3)
    {
        console.log(`${num2} es mayor que  ${num3}  y ${num}`);
    }
    else
    {
        console.log(`${num3} es mayor que  ${num} y ${num2}`);
    }
}
