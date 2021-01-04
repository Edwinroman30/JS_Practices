const person ={
    name: 'Edwin',
    age: 24,
    gender: 'M',
    sons: ['Maria','Edwar','Rowin','Eduanny','Eduardo','Alberto']
}

//U.S. Department of State - Trace Effects

for(let index in person){
    console.log(`Hola ${person.name}, su edad es de ${person.age} y cuenta con ${person.sons.length} hijos, cuyos nombres
    son ${person.sons.join(', ')}.`)
}

        console.log('Lista Random de los hijos:')

for (let i = 0; i < person.sons.length; i++) {
    let rdn = Math.round(Math.random() * (person.sons.length-1))
     // if I skip the plus value '+' in the end, it doesnt show me the ZERO.
    console.log(person.sons[rdn])

}