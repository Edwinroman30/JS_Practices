
let name = prompt("Insert your name");
let confirmar = confirm("Confirme su nombre es " + name);


// Evalua el caso del confirm para realizar funcionalidades.
if(confirmar == true)
{
 alert("Genial ere " + name);
}
else
{
 alert("Recargue la página.");
}