 // * MAP

/* El objeto Map almacena pares clave/valor. Cualquier valor 
 (tanto objetos como valores primitivos) pueden ser usados como clave o valor. */

// * Sintaxis
// * new Map([iterable])

// * Methods

/* 
 .set - For entry new values on a Map.
 .get - For recived values on a Map.
 .has - For search keys.
 .keys - get all keys on the Map.
 .values - get all values on the Map.

Property
 -size

*/


const User_map = new Map([
    ['Nombre','Edwin'],
    ['Edad',30],
    ['Email','Edcom@gnails.com'],
    ['Pass','1234'],
    [true,'host:Edwin-pc; database:BDecodo; security_encryted:true']
]);

User_map.set('Sex','Male')

console.log(`Geting a name with ${User_map.get('Nombre')}`)

//* Reset name
User_map.set('Nombre','Albert')

console.log(User_map.keys())
console.log(User_map.values())

console.log(User_map)

for([keys,values] of User_map)
{
    console.log(`Keys: ${keys} and Values: ${values}`)
}