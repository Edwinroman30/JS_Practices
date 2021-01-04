//Type of functions

/* function Saludar(name){
    console.log(`Hola ${name} que tal...`)
}

const  Saludar_arrow = (name) => console.log('Un arrow saludo ' + name) 


Saludar('Edwin')

Saludar_arrow('Alberto Roman') */

const Plus = (val1,val2) => val1+val2

const Subtraction = (val1,val2) =>{
	return val1-val2
}

const Multiplication = (val1,val2) =>{
	return val1*val2
}

const Division = (val1,val2) =>{

	if (val1 == 0 || val2 ==0) {
		return 0
	}

	return val1 / val2;
}


let num1 = parseFloat(prompt('Insert the fist value'))
let num2 = parseFloat(prompt('Insert the second value'))

const op = parseInt(prompt('Choose a option in the box \n\r 1)Plus 2)Subtraction 3)Multiplication 4)Division'))

switch(op)
{
	case 1:
		console.log(Plus(num1,num2)) 
	break;

	case 2:
		console.log(Subtraction(num1,num2))
		break;

	case 3: 
		console.log(Multiplication(num1,num2))
	break;

	case 4:
		console.log(Division(num1,num2))
		break;

		default:
			console.log('This option not exist');
			alert('This option not exist')
		break;

}