/* 5 - Escriba un programa que pida un número entero mayor que cero y calcule su factorial.
    El factorial es el resultado de multiplicar ese número por sus anteriores hasta la unidad.

    !5 = 5*4*3*2*1 = 120 */

    let num = parseInt(prompt('Inserte un numero'))
    let acum = 1;

    if(num < 0){
        alert('error')
    }else{

       
        for (let i = (num - 1); i < num ; i--) 
        {
            acum= acum * i;
            
            if(i==1){
                break;
            }
        }

        acum = acum * num;
        
        alert(acum);
        console.log(acum);

    }