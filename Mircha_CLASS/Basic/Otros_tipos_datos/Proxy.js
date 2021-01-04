// * https://javascript.info/proxy#reflect
/*
    -Objeto. (Dato literales) Los literales se utilizan para representar valores en JavaScript. Estos son valores fijos, no variables, que literalmente proporciona en su script. Esta sección describe los siguientes tipos de literales:
    
    -Manejador. el cual lleva dentro una funcion llamada set(OBJETO,PROPIEDA,VALOR).
    (Aqui es donde podremos realizar validaciones.)
    
    -Proxy()

*/

//* Structure

//* Object

    const User = {nombre:'',apellido:'',edad:0}

//* Handler

const Handler = {

    //* Three values 1st: Object, 2nd: Temp_property, 3er: value 
    set(obj,prop,val){
        
        //* We are saying the "object" going to get in the "property" that "value".
      
        
        //! We can put validation:

        // TODO Validation
        if(Object.keys(obj).indexOf(prop) === -1)
        {
          return console.error(`Error dont write or put some code and -"${prop}"- is not a property of this object.`)
        }

        // TODO Validation
        if(prop === 'edad' && val < 0)
        {
            return console.error('Please write the truth age.')
            //obj[prop] = null
        }

        // TODO Validation
        if
        ( 
            (prop === 'nombre' || prop === 'apellido') 
            &&
            !(/^[A-Za-z\s]+$/g.test(val))
        )
        {
          return  console.error(`Los ${prop} deben de ser validos.`)
        }



        //? its remomment assing the value to the object in the end, causes its awaiting for the respont of validation.
        obj[prop] = val
    }
}

//* Proxy

const P_user = new Proxy(User,Handler)

P_user['nombre'] = 'Marcos'
P_user.apellido = 'Felix'
P_user.edad = 19 

P_user.correo = 'Ed@gnails.com'

console.log(P_user)
console.log(User)
