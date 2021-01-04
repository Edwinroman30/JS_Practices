// ? Mi JSON que esta en mi variable.

/* 
{
    "name":"Edwin",
    "lastname": "Roman Seberino",
    "age":17,
    "gender":"male",
    "programing_lang": ["C#","JS","PHP"],
    "top_arts": [{"name":"Doja Car","songs":24},
                 {"name":"Drake","songs":50},
                 {"name":"Gami","songs":100}]
} */


let dato = '{"name":"Edwin","lastname": "Roman Seberino","age":17,"gender":"male","programing_lang": ["C#","JS","PHP"],"top_arts": [{"name":"Doja Car","songs":24},               {"name":"Drake","songs":50},{"name":"Gami","songs":100}]}'

const obj = {
    username: 'pipe',
    pass: 'tu*******'
}

let Jsoncadena = JSON.stringify(obj)
console.log(Jsoncadena)
console.log(JSON.parse(Jsoncadena))

// ? De JSONplacesholder

/* fetch('https://jsonplaceholder.typicode.com/users')
    .then((resp) => resp.json())
    .then(valor => valor.map((value,index) => {
    console.log(`${index}-${value.name}`)
 }))
 */