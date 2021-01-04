/*10 - Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "rosa"] determinar si un color
 introducido por el usuario a través de un prompt se encuentra dentro del array o no.*/


 let colors = ["azul", "amarillo", "rojo", "verde", "rosa"]

 let get_color  = prompt('Introduce un color para verificar si se encuentra en el arreglo').toLowerCase()


 	if (colors.indexOf(get_color) > -1) 
 	{
 		console.log('Se encuentra....')
 	}else{
 		console.log('Nooooooo')
 	}


 