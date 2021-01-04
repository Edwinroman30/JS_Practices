
const Users = [
    {
    id:1,
    name:'pepe'
    },
    {
    id:2,
    name:'Sebas'
    },
    {
        id:3,
        name:'Poke'
    }

]

const Getuser = (id,cb) =>{
    Users.find((user) => user.id == id)
   console.log(``)
   cb(msg,) 

}