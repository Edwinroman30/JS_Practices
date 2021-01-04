// * https://javascript.info/weakmap-weakset#:~:text=WeakMap%20is%20Map%20%2Dlike%20collection,become%20inaccessible%20by%20other%20means.

let Users = {nombre: 'Edwin', correo:'edwinrm@gmail.com'}
let fire = {a:'Free fire'}


/* const ws = new WeakSet()

ws.add(Users)
ws.add(fire)

console.log(ws.has(fire)) */


const wm = new WeakMap()

wm.set(Users,Users.correo)
wm.set(fire,Users.nombre)

setInterval(() => {
  console.log(wm)
},1000)
console.log(wm)

setTimeout(()=>{
  Users = null
},2000)
