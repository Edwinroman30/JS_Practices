/* 
const Funcion_math = (n) =>{

   /*  if(typeof(n) != "number")
    Promise.reject (console.error("No es un numero."))

    n = n + 1

   return new Promise((result, reject) => {
        
    if(typeof(n) != "n umber")
        result(`${n*n} es un numero`)
    else
        reject(("No es un numero."))

   })
}

Funcion_math(4)
.then((result) => {
    console.log(result)
})
.catch((err) => {
    console.error(err)
}); */

const Users = [
    {
        id:1,
        user: 'Edwin'
    },
    {
        id: 2,
        user: 'Sebas'
    }, 
    {
        id: 3,
        user: 'Eddy'
    }, 
    {
        id: 4,
        user: 'Paola'
    }
];

const Emails = [
    {
        id: 1,
        email: 'Edw@gmai.com'
    },
    {
        id: 2,
        email: 'Sebalaska@gmai.com'
    },
    {
        id: 3,
        email: 'Edd@gmai.com'
    }
];


const getUser = (id) => {

    
         console.log(`Asg:Esto es otro codigo fuera de las promesas que por obligacion debe de ejecutarse`)

    return new Promise( (result, reject) => 
    {
        if(!(typeof(id) != "number"))
        {
                if(Users.find((user) => user.id === id))
                { 
                    const obj = Users.find((user) => user.id === id)
                     setTimeout(() =>{ console.log(`${obj.user}, es el usuario de ID`)},3000)
                    result(getEmail(obj))
                   
                }
                else
                reject ('Error this user doesnt exist')
        }
        else
        {
            reject ('Error with typeOf date, by edwin coders')
        }
       
    });

}


const getEmail = (user) =>{

     

    return new Promise((result,reject) => {

        if(Emails.find((email) => email.id === user.id))
        {
           result(
               {
                id: user.id,
                user: user.user,
                email: Emails.find((email) => email.id === user.id).email
                }
            )
        }
        else
            reject ('Error this user have not email')

    })
}

clearTimeout();

    getUser(3)
    .then( (u) => u)
    .then ((other_thing) => console.log(other_thing))
    .catch((error) => console.error(error))

