
function Greeting (person){
    return `Estamos saludando a ${person.name} con edad ${person.age}`
}


const promesa = new Promise((resolve,reject) =>{

    resolve(Greeting({name:'Dani', age:18}))
    reject('ERROR')

});


promesa
.then((data) =>{
    console.log(data)
})
.catch(err => console.error(err))
