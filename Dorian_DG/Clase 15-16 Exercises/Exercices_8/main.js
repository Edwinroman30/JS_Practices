/*8 - Dado un array de letras, solicita un número de DNI y calcula que letra le corresponde.
 El número no puede ser negativo ni tener más de 8 dígitos. La posición de la letra es el resultado del módulo del número
introducido entre 23
*/

const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 
'C', 'K', 'E', 'T'];

const Dni = prompt('Inserte su DNI')


if ( Dni.length == 8 && parseInt(Dni) > 0) {
    
  console.log(`la letra que le correponde a su DNI es ${letras[Dni%23]} en total ${Dni}${letras[Dni%23]}`)

}else
{
  console.log('Error al proseguir con la aplicacion')
}