
const valor = document.getElementById('valor');
let input = prompt("Ingrese para el switch");

let pou;

pou = parseInt(input);


console.log(typeof(pou));

switch(pou)
{
    case 1:
        valor.textContent = '1';
    break;

    case 2: 
    valor.textContent = '2';
    break;

    case 3:
        case 4:
            case 6:
                valor.textContent = "there are 3, 4 or 6.";
        break;

    default:
        valor.textContent = 'Nothing values that say, there are not a number in the switch.';
        break;

}

