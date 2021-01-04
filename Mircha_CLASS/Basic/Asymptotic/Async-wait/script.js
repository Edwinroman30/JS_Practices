
const elevatorMath = (val1,val2) =>{

    return new Promise((result,reject) =>
    {
        if(typeof(val1) != "number" || typeof(val2) != "number")
        {   
            reject(new Error('Esto no es numero...').message)
        }
        
        setTimeout(() =>
        {
            result(val1*val2)

        },1500)

    })
}

/* elevatorMath(2,"2")
.then((val) => console.log(val))
.catch((err) => console.error(err))
elevatorMath(3,3)
.then((val)=> console.info(val)) */

const asyncFuncion = async () =>{

    try
    {
       const valor1 = await elevatorMath(3,2)
         console.log(valor1)
         console.log(await elevatorMath(5,2))
         console.log(await elevatorMath(9,2))
         console.info(await elevatorMath('2',2))
         console.log(await elevatorMath(22,2))

    }catch(err)
    {
        console.error(err);
    }
}

asyncFuncion()

async function Gami ()
{

    try{
        console.log(await elevatorMath(2,2))
        console.log(await elevatorMath(false,2))
        console.log(await elevatorMath(6,2))
     
    }catch(e){
        console.error(e)
    }
  
}

Gami()