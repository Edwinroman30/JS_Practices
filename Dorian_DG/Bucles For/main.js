Students = ['Marcon','Edwin','Antonia','Andrea'];

// El for of devuelve los valores.
/*
for(student of Students){
    console.log(`Los valores que desea imprimir son del indice ${Students.indexOf(student)} y el valor es ${student}`);
}
*/

//El for in devuelve el  indice
for(student in Students){
    console.log(`${student}`);
}

let i =0;

while(i<6){
    console.log("Edwin #"+i);
    i++;
}

let r = 10;

do{
    console.log(r);
    r++;
}while(r<=20);