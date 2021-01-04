
/* prompt("Texto descriptivo","Texto por defecto"); */

let saludo = prompt("Insert your name:");

if(saludo == null || saludo == "")
{
alert("Usted no ha insertado nada.");
}
else
{
alert("Bienvenido a mi app Sr." + saludo);
}

